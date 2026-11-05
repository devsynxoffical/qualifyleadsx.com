import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#475569"))
        
        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 755, "QualifiedLeadsX™ : Daily Technical SEO, Content & Search Console Report")
            self.drawRightString(558, 755, "November 05, 2026")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(54, 747, 558, 747)
        
        # Running Footer
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawString(54, 35, "CONFIDENTIAL & PROPRIETARY : QualifiedLeadsX™ (Ecom Expertz LLC)")
        self.drawRightString(558, 35, page_str)
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(54, 47, 558, 47)
        self.restoreState()

def build_pdf(filename="reports/QualifiedLeadsX_Daily_Work_Report_Nov_05_2026.pdf"):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_primary = colors.HexColor("#0f172a")    # Slate 900
    c_accent = colors.HexColor("#16a34a")     # Emerald / Green 600
    c_blue = colors.HexColor("#2563eb")       # Blue 600
    c_text = colors.HexColor("#1e293b")       # Slate 800
    c_muted = colors.HexColor("#475569")      # Slate 600
    c_bg_light = colors.HexColor("#f8fafc")   # Slate 50
    c_border = colors.HexColor("#e2e8f0")     # Slate 200
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=c_primary,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=c_muted,
        spaceAfter=10
    )
    
    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=c_primary,
        spaceBefore=12,
        spaceAfter=5,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=c_text
    )
    
    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=c_text
    )
    
    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10.5,
        textColor=c_primary
    )
    
    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor("#ffffff")
    )

    badge_success = ParagraphStyle(
        'BadgeSuccess',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor("#15803d")
    )
    
    story = []
    
    # Header Banner
    story.append(Paragraph("QualifiedLeadsX™ — Daily Technical SEO & Execution Report", title_style))
    story.append(Paragraph("<b>Target Site:</b> https://www.qualifiedleadsx.com &nbsp;|&nbsp; <b>Parent Entity:</b> Ecom Expertz LLC &nbsp;|&nbsp; <b>Execution Date:</b> Thursday, November 05, 2026", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_blue, spaceBefore=2, spaceAfter=8))
    
    # Executive Summary Card
    summary_data = [
        [
            Paragraph("<b>EXECUTIVE SUMMARY & OPERATIONAL HIGHLIGHTS</b>", table_cell_bold),
            Paragraph("<b>STATUS: 100% PRODUCTION GOALS ACHIEVED</b>", badge_success)
        ],
        [
            Paragraph(
                "Today (Thursday, November 5, 2026), all scheduled Week 1 deliverables up through Thursday were verified and deployed to production. "
                "Core highlights include pulling and merging 32 remote updates with zero errors, executing a full 4-day Master Plan audit, shipping the comprehensive <b>/case-studies upgrade</b> (featuring a 150-word authority intro with 3 headline numbers, a Top 10 'Most Cited Results' revenue table, and 5 strategic internal links), "
                "and executing dual-engine indexing via <b>IndexNow API</b> (HTTP 202 Accepted for Bing & Copilot) and <b>Google Search Console</b> sitemap submission (successfully accepted by Googlebot).",
                body_style
            ),
            ""
        ]
    ]
    t_summary = Table(summary_data, colWidths=[360, 144])
    t_summary.setStyle(TableStyle([
        ('SPAN', (0, 1), (1, 1)),
        ('BACKGROUND', (0, 0), (-1, -1), c_bg_light),
        ('BOX', (0, 0), (-1, -1), 1, c_border),
        ('PADDING', (0, 0), (-1, -1), 6),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_summary)
    story.append(Spacer(1, 10))
    
    # Primary Deliverables Table
    story.append(Paragraph("1. Deliverables Completed Today (Thursday, November 05, 2026)", h1_style))
    
    deliv_headers = [
        Paragraph("Deliverable / Module", table_header),
        Paragraph("Master Plan Target", table_header),
        Paragraph("Execution & Technical Details", table_header),
        Paragraph("Verification Evidence", table_header),
        Paragraph("Status", table_header)
    ]
    
    deliv_rows = [
        deliv_headers,
        [
            Paragraph("<b>Case Studies Upgrade</b><br/>150-Word Intro", table_cell),
            Paragraph("Thu 5 Nov Plan: 150-word intro with 3 headline numbers", table_cell),
            Paragraph("Authored exact 151-word authority overview with $150M+ revenue, 125+ case studies, and $3K–$25K offer range.", table_cell),
            Paragraph("Live on <code>/case-studies</code>. Zero build errors.", table_cell),
            Paragraph("<b>DEPLOYED</b><br/>(Live)", badge_success)
        ],
        [
            Paragraph("<b>Top 10 Results Table</b><br/>Most Cited Revenue", table_cell),
            Paragraph("Thu 5 Nov Plan: Top 10 revenue cases table", table_cell),
            Paragraph("Structured table mapping $846K, $639K, $203.9K, $157K, $150K, etc., with niches, offers, metrics, and proof anchors.", table_cell),
            Paragraph("Ranked 1–10 with clickable video gallery anchors.", table_cell),
            Paragraph("<b>DEPLOYED</b><br/>(Live)", badge_success)
        ],
        [
            Paragraph("<b>5 Strategic Internal Links</b><br/>Topic Equity Flow", table_cell),
            Paragraph("Thu 5 Nov Plan: Links to 2 services & 3 /for/ pages", table_cell),
            Paragraph("Direct links to <code>/meta-ads-agency</code>, <code>/appointment-setting</code>, <code>/for/coaches</code>, <code>/for/consultants</code>, <code>/for/agencies</code>.", table_cell),
            Paragraph("Contextually integrated in copy & table.", table_cell),
            Paragraph("<b>ACTIVE</b><br/>(5 Links)", badge_success)
        ],
        [
            Paragraph("<b>IndexNow API Submission</b><br/>Instant Engine Push", table_cell),
            Paragraph("Immediate Bing & Copilot indexing protocol", table_cell),
            Paragraph("Generated verification key (<code>qlx2026indexnow8f7d9e4a3b2c1f0e.txt</code>) and submitted 14 priority URLs.", table_cell),
            Paragraph("API Response: <b>202 Accepted</b> from <code>api.indexnow.org</code>.", table_cell),
            Paragraph("<b>ACCEPTED</b><br/>(Bing/Copilot)", badge_success)
        ],
        [
            Paragraph("<b>Google Search Console</b><br/>Sitemap Ingestion", table_cell),
            Paragraph("GSC sitemap submission & live URL test", table_cell),
            Paragraph("Submitted <code>sitemap.xml</code> with refreshed 2026-11-05 lastModified timestamp. Tested live URL.", table_cell),
            Paragraph("GSC confirmed: <i>'Sitemap submitted successfully'</i>.", table_cell),
            Paragraph("<b>ACCEPTED</b><br/>(Googlebot)", badge_success)
        ],
        [
            Paragraph("<b>Git Synchronization</b><br/>Production Push", table_cell),
            Paragraph("Continuous deployment to remote origin/main", table_cell),
            Paragraph("Committed <code>3e9130e</code> and <code>fdc725d</code>; pushed clean to GitHub repository.", table_cell),
            Paragraph("Build passing: <code>npx tsc --noEmit</code> passed.", table_cell),
            Paragraph("<b>PUSHED</b><br/>(origin/main)", badge_success)
        ]
    ]
    
    t_deliv = Table(deliv_rows, colWidths=[100, 95, 145, 100, 64])
    t_deliv.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary),
        ('GRID', (0, 0), (-1, -1), 0.5, c_border),
        ('PADDING', (0, 0), (-1, -1), 4),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
    ]))
    story.append(t_deliv)
    story.append(Spacer(1, 10))
    
    # 4-Day Plan Status Table
    story.append(Paragraph("2. Master Plan Week 1 Complete Status Check (Mon–Thu)", h1_style))
    
    plan_headers = [
        Paragraph("Day / Date", table_header),
        Paragraph("Scheduled Deliverable Focus", table_header),
        Paragraph("Implementation Status", table_header),
        Paragraph("Audit Result", table_header)
    ]
    
    plan_rows = [
        plan_headers,
        [
            Paragraph("<b>Mon 2 Nov</b>", table_cell),
            Paragraph("301 Non-WWW to WWW Canonical Redirect + Clutch.co Setup", table_cell),
            Paragraph("Host-level 301 cache in <code>middleware.ts</code> + Clutch profile submitted", table_cell),
            Paragraph("<font color='#15803d'><b>PASS (100%)</b></font>", table_cell)
        ],
        [
            Paragraph("<b>Tue 3 Nov</b>", table_cell),
            Paragraph("22 Titles Trimmed (<55 chars) + Metas (<155 chars)", table_cell),
            Paragraph("18 pages & 12 blogs optimized; 51 internal links & schema graph added", table_cell),
            Paragraph("<font color='#15803d'><b>PASS (100%)</b></font>", table_cell)
        ],
        [
            Paragraph("<b>Wed 4 Nov</b>", table_cell),
            Paragraph("<code>/book-your-call</code> 800+ Words Expansion + 4 FAQs", table_cell),
            Paragraph("828 words verified + 4 comprehensive conversion FAQs live", table_cell),
            Paragraph("<font color='#15803d'><b>PASS (100%)</b></font>", table_cell)
        ],
        [
            Paragraph("<b>Thu 5 Nov</b>", table_cell),
            Paragraph("<code>/case-studies</code> 150-Word Intro, Top 10 Table & 5 Links", table_cell),
            Paragraph("Deployed intro, Top 10 table, 5 internal links + dual indexing", table_cell),
            Paragraph("<font color='#15803d'><b>PASS (100%)</b></font>", table_cell)
        ]
    ]
    
    t_plan = Table(plan_rows, colWidths=[70, 170, 184, 80])
    t_plan.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary),
        ('GRID', (0, 0), (-1, -1), 0.5, c_border),
        ('PADDING', (0, 0), (-1, -1), 4),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
    ]))
    story.append(t_plan)
    story.append(Spacer(1, 10))
    
    story.append(PageBreak())
    
    # Section 3: Deep Dive into Thursday Case Studies Table
    story.append(Paragraph("3. Top 10 'Most Cited Results' Live Ledger Overview", h1_style))
    story.append(Paragraph("This structured ledger gives Googlebot, Perplexity, and ChatGPT verified revenue proof points connected directly to client acquisition services:", body_style))
    story.append(Spacer(1, 4))
    
    table_sample_headers = [
        Paragraph("#", table_header),
        Paragraph("Client & Industry", table_header),
        Paragraph("Core Offer", table_header),
        Paragraph("Acquisition Engine", table_header),
        Paragraph("Verified Revenue", table_header),
        Paragraph("Key Metric", table_header)
    ]
    
    table_sample_rows = [
        table_sample_headers,
        [Paragraph("01", table_cell_bold), Paragraph("B2B Agency & Service Scaling", table_cell), Paragraph("$3,600 Avg Contract", table_cell), Paragraph("Meta Ads + VSL Funnel", table_cell), Paragraph("<b>$846,000</b>", table_cell_bold), Paragraph("235 Clients Closed", table_cell)],
        [Paragraph("02", table_cell_bold), Paragraph("MedSpa Marketing Agency", table_cell), Paragraph("High-Ticket Retainer", table_cell), Paragraph("Broad Meta Ads + Speed-to-Lead", table_cell), Paragraph("<b>$639,000</b>", table_cell_bold), Paragraph("178 Clients in 60 Days", table_cell)],
        [Paragraph("03", table_cell_bold), Paragraph("High-Ticket Coaching & Training", table_cell), Paragraph("$5,000 Program", table_cell), Paragraph("Appointment Setting System", table_cell), Paragraph("<b>$203,941</b>", table_cell_bold), Paragraph("11 Days Cash Collected", table_cell)],
        [Paragraph("04", table_cell_bold), Paragraph("Digital Growth & Media Agency", table_cell), Paragraph("$4,500/mo Retainer", table_cell), Paragraph("Broad Targeting Meta Ads", table_cell), Paragraph("<b>$157,184</b>", table_cell_bold), Paragraph("Direct Cash Collected", table_cell)],
        [Paragraph("05", table_cell_bold), Paragraph("B2B Executive Consulting", table_cell), Paragraph("$7,500 Engagement", table_cell), Paragraph("Qualification Filter + VSL", table_cell), Paragraph("<b>$150,348</b>", table_cell_bold), Paragraph("Consistent Pipeline Scaled", table_cell)],
        [Paragraph("06", table_cell_bold), Paragraph("Specialized Commercial Services", table_cell), Paragraph("$10,000+ Contract", table_cell), Paragraph("Algorithmic Meta Ads", table_cell), Paragraph("<b>$86,275</b>", table_cell_bold), Paragraph("Net Cash Collected", table_cell)],
        [Paragraph("07", table_cell_bold), Paragraph("Agency Backend Continuity", table_cell), Paragraph("Monthly Subscription", table_cell), Paragraph("Automated Lead Routing", table_cell), Paragraph("<b>$86,000</b>", table_cell_bold), Paragraph("Recurring Pipeline", table_cell)],
        [Paragraph("08", table_cell_bold), Paragraph("Done-With-You Consulting", table_cell), Paragraph("$6,000 Offer", table_cell), Paragraph("Broad Targeting Buying", table_cell), Paragraph("<b>$85,000</b>", table_cell_bold), Paragraph("Immediate Cash Inflow", table_cell)],
        [Paragraph("09", table_cell_bold), Paragraph("High-Ticket Funnel Acceleration", table_cell), Paragraph("Front-End to Backend", table_cell), Paragraph("VSL Funnel + Speed-to-Lead", table_cell), Paragraph("<b>$79,070</b>", table_cell_bold), Paragraph("17 Days Revenue Sprint", table_cell)],
        [Paragraph("10", table_cell_bold), Paragraph("B2B Tech & AI Agency", table_cell), Paragraph("$8,000 High-Ticket Deal", table_cell), Paragraph("Performance Meta Media", table_cell), Paragraph("<b>$71,934</b>", table_cell_bold), Paragraph("High-Intent B2B Deals", table_cell)]
    ]
    
    t_top10 = Table(table_sample_rows, colWidths=[24, 130, 85, 110, 75, 80])
    t_top10.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary),
        ('GRID', (0, 0), (-1, -1), 0.5, c_border),
        ('PADDING', (0, 0), (-1, -1), 3.5),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, c_bg_light]),
    ]))
    story.append(t_top10)
    story.append(Spacer(1, 10))
    
    # Section 4: Upcoming Target (Friday 6 Nov)
    story.append(Paragraph("4. Next Scheduled Target (Friday, November 06, 2026)", h1_style))
    story.append(Paragraph(
        "• <b>Week 1 Milestone Sign-off:</b> Confirm GSC canonical indexing for <code>www.qualifiedleadsx.com</code>.<br/>"
        "• <b>Content Brief 2 Preparation:</b> Draft detailed brief for Post 1: <i>'How Much Do Meta Ads Cost in 2026? Cost per Lead and per Booked Call'</i> (target keyword volume: 260, +517% surge, target length: 2,400 words).<br/>"
        "• <b>Index Monitoring:</b> Track Search Console crawl statistics and IndexNow ingestion.",
        body_style
    ))
    story.append(Spacer(1, 14))
    
    # Sign-off box
    signoff_data = [
        [
            Paragraph("<b>REPORT CERTIFICATION</b><br/>"
                      "All production deliverables for Thursday, November 05, 2026, have been verified with 0 TypeScript compiler errors, validated JSON-LD schema graphs, clean Git tree status, and confirmed index submission across Google and Bing.<br/>"
                      "<b>Lead Engineer:</b> Antigravity AI Systems &nbsp;|&nbsp; <b>Property:</b> QualifiedLeadsX™ (Ecom Expertz LLC)",
                      body_style)
        ]
    ]
    t_signoff = Table(signoff_data, colWidths=[504])
    t_signoff.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor("#f8fafc")),
        ('BOX', (0, 0), (-1, -1), 1, c_blue),
        ('PADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_signoff)
    
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"[SUCCESS] PDF Generated at: {filename}")

if __name__ == "__main__":
    build_pdf()

