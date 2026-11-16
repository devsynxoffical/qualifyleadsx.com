import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
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

        if self._pageNumber > 1:
            self.drawString(54, 755, "QualifiedLeadsX™ : Complete Daily SEO, CRO & Off-Page Authority Report")
            self.drawRightString(558, 755, "Monday, Nov 16, 2026")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(54, 747, 558, 747)

        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawString(54, 35, "CONFIDENTIAL & PROPRIETARY : QualifiedLeadsX™ (Ecom Expertz LLC)")
        self.drawRightString(558, 35, page_str)
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(54, 47, 558, 47)
        self.restoreState()


def build_pdf(filename="reports/QualifiedLeadsX_Daily_Work_Report_Nov_16_2026.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=17,
        leading=21,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#64748b'),
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=10,
        spaceAfter=6,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#334155'),
        spaceAfter=5
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=body_style,
        leftIndent=10,
        firstLineIndent=-7,
        spaceAfter=3
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9,
        textColor=colors.HexColor('#0f172a')
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=9.5,
        textColor=colors.HexColor('#334155')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9.5,
        textColor=colors.HexColor('#0f172a')
    )

    story = []

    story.append(Paragraph("QualifiedLeadsX™ : Complete Daily SEO & Authority Report", title_style))
    story.append(Paragraph(
        "<b>Date:</b> Monday, November 16, 2026 &nbsp;|&nbsp; <b>Domain:</b> qualifiedleadsx.com &nbsp;|&nbsp; <b>Git Status:</b> Pushed to origin/main (commit: 95cda7d)",
        subtitle_style
    ))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#0f172a'), spaceBefore=2, spaceAfter=8))

    # KPI Summary
    stat_data = [[
        Paragraph("<b>+123% Surge</b><br/><font color='#16a34a' size=6.5>7d Impressions (108 to 241)</font>", ParagraphStyle('S1', parent=table_cell_style, alignment=1)),
        Paragraph("<b>22+ Pages</b><br/><font color='#0284c7' size=6.5>Landing & Blog Upgrades</font>", ParagraphStyle('S2', parent=table_cell_style, alignment=1)),
        Paragraph("<b>4 Profiles Live</b><br/><font color='#16a34a' size=6.5>Clutch, DesignRush, CB, TP</font>", ParagraphStyle('S3', parent=table_cell_style, alignment=1)),
        Paragraph("<b>166 / 166</b><br/><font color='#0f172a' size=6.5>Static Pages Built (0 Errors)</font>", ParagraphStyle('S4', parent=table_cell_style, alignment=1)),
    ]]
    t_stat = Table(stat_data, colWidths=[126, 126, 126, 126])
    t_stat.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_stat)
    story.append(Spacer(1, 6))

    # Section 1: Off-Page Authority & Backlinks
    story.append(Paragraph("1. Off-Page Authority & Backlink Execution (Week 1 Plan)", h1_style))
    story.append(Paragraph(
        "Executed Phase 1 of the Backlink Plan, launching 4 high-authority profiles and linking them in Schema.org (<code>sameAs</code>), Footer, and About Page:",
        body_style
    ))

    offpage_data = [
        [
            Paragraph("Directory / Platform", table_header_style),
            Paragraph("Status", table_header_style),
            Paragraph("Live URL / Portfolio Details", table_header_style),
            Paragraph("Codebase Integration", table_header_style)
        ],
        [
            Paragraph("<b>1. Clutch.co</b>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>LIVE + 3 Cases</b></font>", table_cell_style),
            Paragraph("<code>https://clutch.co/profile/qualifiedleadsx</code><br/>Published 3 portfolio case studies ($846K B2B Agency, $639K Med Spa, $203K Coaching).", table_cell_style),
            Paragraph("Connected in <code>brand-facts.ts</code>, <code>schema.ts</code>, <code>JsonLd.tsx</code>, <code>Footer.tsx</code>, <code>about/page.tsx</code>.", table_cell_style)
        ],
        [
            Paragraph("<b>2. DesignRush</b>", table_cell_bold),
            Paragraph("<font color='#0284c7'><b>SUBMITTED</b></font>", table_cell_style),
            Paragraph("Submitted agency profile with custom 600x300 logo, 3 custom 1200x720 photos, Sheridan WY HQ, 8 featured clients, 10 services & 10 industries.", table_cell_style),
            Paragraph("Generated custom assets in <code>public/gbp/designrush-photo-1..3.jpg</code>.", table_cell_style)
        ],
        [
            Paragraph("<b>3. Crunchbase</b>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>LIVE</b></font>", table_cell_style),
            Paragraph("<code>https://www.crunchbase.com/organization/qualifiedleadsx</code><br/>Created organization profile under Ecom Expertz LLC, founded 2022, Sheridan WY.", table_cell_style),
            Paragraph("Connected in <code>sameAs</code> Knowledge Graph, Sitewide Footer & About Page.", table_cell_style)
        ],
        [
            Paragraph("<b>4. Trustpilot Business</b>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>LIVE</b></font>", table_cell_style),
            Paragraph("<code>https://www.trustpilot.com/review/qualifiedleadsx.com</code><br/>Claimed domain, published 245-word SEO bio, Marketing Agency categories & WY contact info.", table_cell_style),
            Paragraph("Connected in <code>sameAs</code> Knowledge Graph, Sitewide Footer & About Page.", table_cell_style)
        ]
    ]
    t_offpage = Table(offpage_data, colWidths=[85, 65, 224, 130])
    t_offpage.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_offpage)

    # Section 2: Landing Pages
    story.append(Paragraph("2. Core Landing Pages SEO, Content Depth & CTR Optimization", h1_style))
    landing_data = [
        [
            Paragraph("Landing Page", table_header_style),
            Paragraph("Target GSC Query", table_header_style),
            Paragraph("Applied Optimization & Value Upgrade", table_header_style)
        ],
        [
            Paragraph("<code>/</code> & <code>/lead-generation-agency</code>", table_cell_bold),
            Paragraph("<b>customer acquisition agency / agencies</b><br/><b>qualified lead gen services</b> (39 impr)", table_cell_style),
            Paragraph("Upgraded titles to <code>Customer Acquisition Agency: Qualified Lead Generation Services</code> + added 2 new commercial FAQs targeting singular & plural intent.", table_cell_style)
        ],
        [
            Paragraph("<code>/for/agencies</code>", table_cell_bold),
            Paragraph("<b>lead generation for agencies</b><br/>(47 impr - #1 Page Opportunity)", table_cell_style),
            Paragraph("Title upgraded to <code>Lead Generation for Agencies: Client Acquisition System ($5K–$25K Retainers)</code> + H1 overhaul + 3 agency unit-economics FAQs.", table_cell_style)
        ],
        [
            Paragraph("<code>/b2b-lead-generation</code>", table_cell_bold),
            Paragraph("<b>qualified b2b leads</b> (6 impr)", table_cell_style),
            Paragraph("<b>Expanded from 470 to 1,500+ words!</b> Integrated <code>b2bLeadGenDeepDive</code> (CFO/CEO buying committee, 4-tier fiscal matrix, $846K / $150K case citations).", table_cell_style)
        ],
        [
            Paragraph("<code>/appointment-setting</code>", table_cell_bold),
            Paragraph("<b>b2b appointment setting</b> (21 impr)", table_cell_style),
            Paragraph("Title upgraded to <code>B2B Appointment Setting Agency: 30–50 Qualified Sales Calls Monthly</code> + CPA ($120–$250) & SDR comparison FAQs.", table_cell_style)
        ],
        [
            Paragraph("<code>/meta-ads-agency</code>", table_cell_bold),
            Paragraph("<b>meta ads agency</b> (14 impr, 1 click)", table_cell_style),
            Paragraph("Title upgraded to <code>Meta Ads Agency for B2B & High-Ticket ($50M+ Managed Spend)</code> + LinkedIn vs Meta CPM comparison & Server-Side CAPI FAQs.", table_cell_style)
        ],
        [
            Paragraph("<code>/for/real-estate-investors</code>", table_cell_bold),
            Paragraph("<b>buy motivated seller leads</b> (100% CTR)", table_cell_style),
            Paragraph("Title upgraded to <code>Buy Motivated Seller Leads: Off-Market Real Estate Deals</code> + Shared Lists vs Proprietary Funnel comparison block.", table_cell_style)
        ],
        [
            Paragraph("<code>/meta-ads-for-coaches</code>", table_cell_bold),
            Paragraph("<b>best practices for facebook ads management for coaches</b> (5 impr)", table_cell_style),
            Paragraph("Title upgraded to <code>Facebook Ads for Coaches: Best Practices & Client Acquisition ($5K–$25K)</code> + exact-match Featured Snippet FAQ.", table_cell_style)
        ],
        [
            Paragraph("<code>/speed-to-lead</code> & <code>/about</code>", table_cell_bold),
            Paragraph("<b>speed to lead</b>, <b>quick lead acquisition</b> & Brand (29 impr)", table_cell_style),
            Paragraph("Upgraded <code>/speed-to-lead</code> for quick lead acquisition (391% boost FAQ) and injected full <code>FAQPage</code> JSON-LD schema into <code>/about</code>.", table_cell_style)
        ],
        [
            Paragraph("<code>/for/consultants</code>, <code>/for/coaches</code>, <code>/for/med-spas</code>, <code>/vsl-funnels</code>, <code>/mastermind</code>, <code>/benchmarks</code>", table_cell_bold),
            Paragraph("Industry & Benchmark Hubs (25+ impr)", table_cell_style),
            Paragraph("Upgraded titles & keywords across all 6 pages with price triggers (<code>$10K+ Retainers</code>, <code>$5K–$25K Offers</code>, <code>$3K–$10K Packages</code>, <code>$50M+ Data</code>).", table_cell_style)
        ]
    ]
    t_landing = Table(landing_data, colWidths=[125, 135, 244])
    t_landing.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_landing)

    story.append(PageBreak())

    # Section 3: Commercial Blog Pillars
    story.append(Paragraph("3. Commercial Blog Pillars Upgraded for High CTR", h1_style))
    story.append(Paragraph("• <code>/blog/speed-to-lead-statistics-response-time</code> ➔ <b>Speed to Lead Statistics 2026: The 5-Minute Rule That Boosts Bookings 391%</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/how-much-does-meta-ads-cost</code> ➔ <b>How Much Does Meta Ads Cost in 2026? Full Budget Guide & CPM Benchmarks</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/facebook-ads-agency-vs-in-house-media-buyer</code> ➔ <b>Facebook Ads Agency vs Hiring an In-House Media Buyer: 2026 Cost & ROI Comparison</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/b2b-appointment-setting-vs-in-house-sdr-teams</code> ➔ <b>B2B Appointment Setting vs In-House SDR Teams: 2026 Cost & ROI Comparison</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/high-ticket-sales-training-framework</code> ➔ <b>High Ticket Sales Training: The Closer & Qualification Framework (25–35% Win Rates)</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/high-ticket-lead-generation-strategies</code> ➔ <b>High-Ticket Lead Generation Strategies: 7 Models to Book $5K–$25K Clients</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/high-ticket-funnel-examples</code> ➔ <b>5 High-Ticket Funnel Examples: Blueprints Generating $150M+ Revenue</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/how-to-write-a-vsl-script-12-minute-structure</code> ➔ <b>How to Write a VSL Script: 12-Minute Structure That Pre-Sells $5K–$25K Deals</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/how-to-hire-an-appointment-setter</code> ➔ <b>How to Hire an Appointment Setter: Scorecard, Pay & Ramp-Up (2026)</b>", bullet_style))
    story.append(Paragraph("• <code>/blog/facebook-ads-for-hvac-companies</code> ➔ <b>Facebook Ads for HVAC Companies: Real Campaign Numbers & 12.7x ROAS</b>", bullet_style))
    story.append(Spacer(1, 6))

    # Section 4: Internal Linking Mesh & Build
    story.append(Paragraph("4. Sitewide Internal Linking Mesh & Production Verification", h1_style))
    story.append(Paragraph("• <b>Header Navigation Dropdown (<code>Nav.tsx</code>):</b> Added direct sitewide anchor links for <i>Customer Acquisition Agency</i>, <i>Qualified B2B Leads</i>, <i>Lead Gen for Agencies</i>, <i>B2B Appointment Setting</i>, <i>Meta Ads Agency for B2B</i>, and <i>Motivated Seller Leads</i>.", bullet_style))
    story.append(Paragraph("• <b>Sitewide Footer & Related Links (<code>Footer.tsx</code> & <code>related-links.ts</code>):</b> Aligned all core service, industry, calculator, and benchmark anchor texts with top ranking GSC queries + external authority proof links (Clutch, Trustpilot, Crunchbase).", bullet_style))
    story.append(Paragraph("• <b>TypeScript & Next.js Build:</b> <code>npx tsc --noEmit</code> passed with <b>0 errors</b>; <code>npm run build</code> compiled all <b>166 static pages</b> cleanly.", bullet_style))
    story.append(Paragraph("• <b>GitHub Repository:</b> All commits merged and pushed to <code>origin/main</code> (latest commit: <code>95cda7d</code>).", bullet_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully generated: {filename}")


if __name__ == '__main__':
    build_pdf()
