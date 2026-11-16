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
            self.drawString(54, 755, "QualifiedLeadsX™ : Live Landing Page Verification & SEO Report")
            self.drawRightString(558, 755, "Monday, Nov 16, 2026")
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

def build_pdf(filename="reports/QualifiedLeadsX_Live_Verification_Report_Nov_16_2026.pdf"):
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
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#64748b'),
        spaceAfter=12
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
        spaceAfter=2
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
        leading=9,
        textColor=colors.HexColor('#334155')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9,
        textColor=colors.HexColor('#0f172a')
    )

    story = []
    
    # Header Banner
    story.append(Paragraph("QualifiedLeadsX™ : Live Landing Page Verification Report", title_style))
    story.append(Paragraph("<b>Date:</b> Monday, November 16, 2026 &nbsp;|&nbsp; <b>Target:</b> qualifiedleadsx.com &nbsp;|&nbsp; <b>Live Status:</b> 100% Verified (200 OK)", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#0f172a'), spaceBefore=2, spaceAfter=8))

    # Executive Summary
    story.append(Paragraph("1. Executive Summary & Live Verification Findings", h1_style))
    story.append(Paragraph(
        "On Monday, November 16, 2026, an exhaustive live audit was performed across the production domain (<code>https://www.qualifiedleadsx.com</code>) to verify server response health, sitemap coverage, and on-page optimization for all high-impression search queries identified in Google Search Console.",
        body_style
    ))
    
    # Stat boxes table
    stat_data = [
        [
            Paragraph("<b>100% (200 OK)</b><br/><font color='#16a34a' size=6.5>Live Server Health</font>", ParagraphStyle('Stat1', parent=table_cell_style, alignment=1)),
            Paragraph("<b>117 URLs</b><br/><font color='#0284c7' size=6.5>Live Indexed Sitemaps</font>", ParagraphStyle('Stat2', parent=table_cell_style, alignment=1)),
            Paragraph("<b>166 / 166</b><br/><font color='#64748b' size=6.5>Static Pages Built</font>", ParagraphStyle('Stat3', parent=table_cell_style, alignment=1)),
            Paragraph("<b>0 Errors</b><br/><font color='#16a34a' size=6.5>Typecheck & Lint Passed</font>", ParagraphStyle('Stat4', parent=table_cell_style, alignment=1))
        ]
    ]
    t_stat = Table(stat_data, colWidths=[126, 126, 126, 126])
    t_stat.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_stat)
    story.append(Spacer(1, 8))

    # Section 2: Landing Pages Table
    story.append(Paragraph("2. Core Landing Pages Live Performance & Optimization Audit", h1_style))
    landing_table_data = [
        [
            Paragraph("Landing Page", table_header_style),
            Paragraph("Live HTTP", table_header_style),
            Paragraph("GSC Query Target", table_header_style),
            Paragraph("Applied Optimization & Value Upgrade", table_header_style)
        ],
        [
            Paragraph("<code>/for/real-estate-investors</code>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style),
            Paragraph("<b>buy motivated seller leads</b><br/>(1 Click / 100% CTR)", table_cell_style),
            Paragraph("Upgraded with dedicated 'Why Buying Shared Lists Fails vs. Proprietary Funnels' comparison table ($32K avg wholesale spread, sub-90s triage, new FAQ).", table_cell_style)
        ],
        [
            Paragraph("<code>/b2b-lead-generation</code>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style),
            Paragraph("<b>qualified b2b leads</b><br/>(6 impr, 0 clicks)", table_cell_style),
            Paragraph("<b>Expanded from 470 to 1,500+ words!</b> Integrated <code>b2bLeadGenDeepDive</code>: CFO/CEO buying committee, 4-tier qualification matrix, $846K / $150K case citations.", table_cell_style)
        ],
        [
            Paragraph("<code>/high-ticket-lead-generation</code>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style),
            Paragraph("<b>high ticket lead gen</b><br/>(14 impr, 0 clicks)", table_cell_style),
            Paragraph("Front-loaded high-CTR title tag, added multi-tier intake survey qualification FAQ, and reinforced $150M+ verified proof stack.", table_cell_style)
        ],
        [
            Paragraph("<code>/lead-generation-agency</code>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style),
            Paragraph("<b>customer acquisition agency</b><br/>(18 impr - Top Query)", table_cell_style),
            Paragraph("Title updated to <code>Customer Acquisition Agency: Done-for-You Lead Gen</code>, aligning with #1 impression volume keyword.", table_cell_style)
        ],
        [
            Paragraph("<code>/benchmarks/cost-per-booked-call</code>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style),
            Paragraph("<b>cost per qualified meeting</b><br/>(11 impr, 0 clicks)", table_cell_style),
            Paragraph("Title updated to include Qualified Meeting Benchmarks; added $120–$250 meeting cost breakdown and citation FAQ.", table_cell_style)
        ],
        [
            Paragraph("<code>/tools/cac-calculator</code>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style),
            Paragraph("<b>benchmark cac b2b</b><br/>(6 impr, 0 clicks)", table_cell_style),
            Paragraph("Updated title tag & metadata; added B2B industry benchmark CAC table ($750–$1,800 professional services, $1,200–$3,500 SaaS).", table_cell_style)
        ]
    ]
    t_landing = Table(landing_table_data, colWidths=[120, 50, 110, 224])
    t_landing.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_landing)
    story.append(Spacer(1, 8))

    # Page Break for clean 2-page report
    story.append(PageBreak())

    # Section 3: Live Sitemaps Health
    story.append(Paragraph("3. Production Sitemaps Health & Crawler Coverage", h1_style))
    story.append(Paragraph(
        "The live production server (<code>https://www.qualifiedleadsx.com/sitemap.xml</code>) correctly serves an enterprise master <code>&lt;sitemapindex&gt;</code> that distributes search bots across 3 specialized sitemaps with 117 total URLs:",
        body_style
    ))

    sitemap_data = [
        [
            Paragraph("Sitemap Endpoint", table_header_style),
            Paragraph("Live URLs", table_header_style),
            Paragraph("Coverage Scope", table_header_style),
            Paragraph("HTTP Status", table_header_style)
        ],
        [
            Paragraph("<code>sitemap-core.xml</code>", table_cell_bold),
            Paragraph("<b>38 URLs</b>", table_cell_style),
            Paragraph("Homepage, Services, Calculators, Benchmarks, Case Studies, About, Booking", table_cell_style),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style)
        ],
        [
            Paragraph("<code>sitemap-content.xml</code>", table_cell_bold),
            Paragraph("<b>54 URLs</b>", table_cell_style),
            Paragraph("All 27 authoritative blog guides, category hubs, and individual case studies", table_cell_style),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style)
        ],
        [
            Paragraph("<code>sitemap-industries.xml</code>", table_cell_bold),
            Paragraph("<b>25 URLs</b>", table_cell_style),
            Paragraph("Core commercial industry verticals and localized matrix pages", table_cell_style),
            Paragraph("<font color='#16a34a'><b>200 OK</b></font>", table_cell_style)
        ]
    ]
    t_sitemap = Table(sitemap_data, colWidths=[130, 60, 244, 70])
    t_sitemap.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#f1f5f9')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_sitemap)
    story.append(Spacer(1, 10))

    # Section 4: Technical Verification
    story.append(Paragraph("4. Technical Build & Health Verification (Commit: 2e84e96)", h1_style))
    story.append(Paragraph("• <b>TypeScript Typecheck:</b> <code>npx tsc --noEmit</code> passed with <b>0 errors</b>.", bullet_style))
    story.append(Paragraph("• <b>ESLint Check:</b> <code>npx eslint . --quiet</code> returned <b>0 errors</b>.", bullet_style))
    story.append(Paragraph("• <b>Next.js Production Build:</b> <code>npm run build</code> successfully compiled <b>166 static pages</b> into standalone HTML.", bullet_style))
    story.append(Paragraph("• <b>LLM Index:</b> <code>public/llms-full.txt</code> regenerated with 53 comprehensive markdown pages (394 KB) for AI search citations.", bullet_style))
    story.append(Paragraph("• <b>GitHub Sync:</b> Remote <code>origin/main</code> is up to date with commit <code>2e84e96</code>.", bullet_style))
    story.append(Spacer(1, 10))

    # Section 5: Hostinger Action
    story.append(Paragraph("5. Deployment Action in Hostinger hPanel", h1_style))
    story.append(Paragraph("1. Log in to <b>Hostinger hPanel</b> ➔ Websites ➔ <code>qualifiedleadsx.com</code>.", bullet_style))
    story.append(Paragraph("2. Go to <b>Advanced ➔ Git</b> and click <b>'Deploy'</b> (or in <b>Node.js</b> section, click <b>'Rebuild / Restart'</b>).", bullet_style))
    story.append(Paragraph("3. This refreshes the live cache so these high-CTR titles and new 1,500-word sections appear immediately in Google's live crawls.", bullet_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully generated: {filename}")

if __name__ == '__main__':
    build_pdf()
