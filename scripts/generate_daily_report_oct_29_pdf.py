import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable, ListFlowable, ListItem
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
            self.drawRightString(558, 755, "October 29, 2026")
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

def build_pdf(filename="reports/QualifiedLeadsX_Daily_Work_Report_Oct_29_2026.pdf"):
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
    
    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=c_primary,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=c_muted,
        spaceAfter=12
    )
    
    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=c_primary,
        spaceBefore=14,
        spaceAfter=6,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=c_text
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=c_text,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )
    
    badge_style = ParagraphStyle(
        'Badge',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#ffffff"),
        alignment=1
    )
    
    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=c_text
    )
    
    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
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
    
    story = []
    
    # Header Banner Block
    meta_info = [
        [
            Paragraph("<b>Client / Website:</b> QualifiedLeadsX™ (qualifiedleadsx.com)", body_style),
            Paragraph("<b>Date of Execution:</b> October 29, 2026", body_style)
        ],
        [
            Paragraph("<b>Operating Entity:</b> Ecom Expertz LLC (Sheridan, WY)", body_style),
            Paragraph("<b>Status:</b> 100% Completed, Verified & Pushed", body_style)
        ],
        [
            Paragraph("<b>Branch:</b> origin/main (Commit 13b79d2)", body_style),
            Paragraph("<b>Build Quality:</b> 0 TypeScript Errors, 200 OK Crawl", body_style)
        ]
    ]
    meta_table = Table(meta_info, colWidths=[260, 244])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), c_bg_light),
        ('BOX', (0, 0), (-1, -1), 1, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ]))
    
    story.append(Paragraph("QualifiedLeadsX™ — Daily Technical SEO & Growth Report", title_style))
    story.append(Paragraph("Comprehensive documentation of technical QA crawl, internal linking mesh, commercial pillar publishing, and Search Console performance.", subtitle_style))
    story.append(meta_table)
    story.append(Spacer(1, 12))
    
    # Section 1: Executive KPI Summary
    story.append(Paragraph("1. Executive Daily Key Performance Indicators (KPIs)", h1_style))
    kpi_data = [
        [
            Paragraph("<b>Total Audited Routes</b>", table_header),
            Paragraph("<b>Crawl Status</b>", table_header),
            Paragraph("<b>Live GSC Impressions</b>", table_header),
            Paragraph("<b>Average GSC CTR</b>", table_header),
            Paragraph("<b>Total Pillar Guides</b>", table_header)
        ],
        [
            Paragraph("<b>30 URLs</b>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>30 / 30 (200 OK)</b></font>", table_cell),
            Paragraph("<b>30 Impressions</b>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>6.7% CTR</b></font>", table_cell),
            Paragraph("<b>11 Live Articles</b>", table_cell_bold)
        ]
    ]
    kpi_table = Table(kpi_data, colWidths=[100, 110, 105, 95, 94])
    kpi_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary),
        ('BACKGROUND', (0, 1), (-1, 1), colors.HexColor("#f0fdf4")),
        ('BOX', (0, 0), (-1, -1), 1, c_accent),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(kpi_table)
    story.append(Spacer(1, 10))
    
    # Section 2: Option A: Technical Crawl & Site QA
    story.append(Paragraph("2. Technical Site Crawl & Quality Assurance (Option A)", h1_style))
    story.append(Paragraph("• <b>Deep Route Crawl:</b> Automated crawler inspected all 30 routes (26 HTML pages + robots.txt + sitemap.xml + llms.txt). 100% of routes responded with HTTP 200 OK (0 broken links, 0 404s, 0 500 server errors).", bullet_style))
    story.append(Paragraph("• <b>Heading Hierarchy Check:</b> Verified that every single HTML page on the site enforces strictly one &lt;h1&gt; tag with semantic hierarchy across &lt;h2&gt; and &lt;h3&gt; tags.", bullet_style))
    story.append(Paragraph("• <b>Structured Data (Schema.org):</b> Verified active JSON-LD schemas across all routes (Organization, WebSite, Service, BreadcrumbList, FAQPage, Article, and CollectionPage).", bullet_style))
    story.append(Paragraph("• <b>Canonical URLs:</b> Validated strict canonical tags pointing to https://www.qualifiedleadsx.com/... across all production paths.", bullet_style))
    story.append(Spacer(1, 8))
    
    # Section 3: Critical On-Page Bug Fixes
    story.append(Paragraph("3. Critical On-Page Bug Fixes Implemented", h1_style))
    story.append(Paragraph("• <b>Title Double-Suffix Elimination:</b> Resolved duplicate branding issue where subpages rendered double brand suffixes (e.g., <i>'Client Acquisition Funnels | QualifiedLeadsX™ | QualifiedLeadsX™'</i>). Re-architected metadata titles to concise, clean 55–65 character tags.", bullet_style))
    story.append(Paragraph("• <b>Marquee Image Alt Text Fix:</b> Fixed 9 testimonial/client photo assets inside UFSquareMarquee.tsx that were rendering with empty alt attributes. All images now carry descriptive, keyword-rich alt tags.", bullet_style))
    story.append(Paragraph("• <b>Broken Internal Slug Resolution:</b> Identified and corrected internal slug mismatch in appointment setting links, ensuring 100% link integrity to the WhatsApp speed-to-lead blueprint.", bullet_style))
    story.append(Spacer(1, 8))
    
    # Section 4: Internal Linking Architecture Mesh
    story.append(Paragraph("4. Internal Linking Architecture Mesh (Option 2)", h1_style))
    story.append(Paragraph("• <b>Homepage Knowledge Vault Section:</b> Engineered and deployed FeaturedInsights.tsx on the homepage, creating a direct internal linking bridge from the high-authority homepage to the top 3 commercial pillar guides.", bullet_style))
    story.append(Paragraph("• <b>Meta Ads Agency Page Interlinks:</b> Installed a 3-card dedicated grid linking paid media decision-makers directly to agency pricing, in-house vs agency comparisons, and broad targeting guides.", bullet_style))
    story.append(Paragraph("• <b>Appointment Setting Page Interlinks:</b> Added a 3-card speed-to-lead architecture grid connecting visitors to automated qualification filters and closer frameworks.", bullet_style))
    story.append(Paragraph("• <b>Internal Link Discovery Boost:</b> Increased discovered unique internal link targets from 21 to 28+, systematically distributing PageRank authority across all core pages.", bullet_style))
    story.append(Spacer(1, 10))
    
    # Section 5: Option B: New Commercial Pillar Publishing
    story.append(Paragraph("5. New Commercial-Intent Pillar Publishing (Option B)", h1_style))
    story.append(Paragraph("• <b>Pillar Article Title:</b> <i>'B2B Appointment Setting vs In-House SDR Teams: The 2026 Cost, Performance & ROI Breakdown'</i>", bullet_style))
    story.append(Paragraph("• <b>URL Slug:</b> /blog/b2b-appointment-setting-vs-in-house-sdr-teams", bullet_style))
    story.append(Paragraph("• <b>Target Query Intent:</b> Commercial decision-makers comparing in-house SDR hiring costs against done-for-you appointment setting agencies.", bullet_style))
    story.append(Paragraph("• <b>Financial Breakdown:</b> Detailed analysis of fully loaded SDR costs ($114,000–$145,000/year including base salary, OTE, benefits, software stack, and turnover fees).", bullet_style))
    story.append(Paragraph("• <b>Velocity Benchmarks:</b> Documented 14-day agency deployment vs 96-day SDR recruiting & ramp-up curve.", bullet_style))
    story.append(Paragraph("• <b>AI Crawler Ingestion:</b> Added directly to public/llms.txt for ChatGPT, Perplexity, and Claude, and dynamically indexed in app/sitemap.ts.", bullet_style))
    story.append(Paragraph("• <b>Bespoke High-Res Graphic:</b> Generated unique 'Sales Velocity & Pipeline Dashboard' UI cover image (/images/blog/b2b-sdr-vs-appointment-setting.jpg) in QualifiedLeadsX signature dark/lime styling.", bullet_style))
    story.append(Spacer(1, 10))
    
    # Section 6: Google Search Console Performance Telemetry
    story.append(Paragraph("6. Google Search Console Live Telemetry & Query Verification", h1_style))
    gsc_queries = [
        [
            Paragraph("<b>Search Query / Keyword</b>", table_header),
            Paragraph("<b>Target Landing Page</b>", table_header),
            Paragraph("<b>Impressions</b>", table_header),
            Paragraph("<b>Organic Intent</b>", table_header)
        ],
        [
            Paragraph("benchmark cac b2b", table_cell_bold),
            Paragraph("/blog/b2b-client-acquisition-cost-cac-benchmarks-2026", table_cell),
            Paragraph("6", table_cell_bold),
            Paragraph("Informational / Benchmarking", table_cell)
        ],
        [
            Paragraph("qualified appointment", table_cell_bold),
            Paragraph("/appointment-setting", table_cell),
            Paragraph("3", table_cell_bold),
            Paragraph("High Commercial Buying Intent", table_cell)
        ],
        [
            Paragraph("qualified appointments", table_cell_bold),
            Paragraph("/appointment-setting", table_cell),
            Paragraph("2", table_cell_bold),
            Paragraph("High Commercial Buying Intent", table_cell)
        ],
        [
            Paragraph("a b2b targeted ads", table_cell_bold),
            Paragraph("/meta-ads-agency", table_cell),
            Paragraph("1", table_cell_bold),
            Paragraph("Agency Hiring Intent", table_cell)
        ],
        [
            Paragraph("buy coaching leads", table_cell_bold),
            Paragraph("/for/coaches", table_cell),
            Paragraph("1", table_cell_bold),
            Paragraph("Direct Purchase Intent", table_cell)
        ],
        [
            Paragraph("qualified appointment generation", table_cell_bold),
            Paragraph("/appointment-setting", table_cell),
            Paragraph("1", table_cell_bold),
            Paragraph("Core Service Search", table_cell)
        ]
    ]
    gsc_table = Table(gsc_queries, colWidths=[140, 184, 60, 120])
    gsc_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), c_primary),
        ('BOX', (0, 0), (-1, -1), 1, c_border),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, c_border),
        ('ALIGN', (2, 0), (2, -1), 'CENTER'),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(gsc_table)
    story.append(Spacer(1, 8))
    story.append(Paragraph("• <b>Performance Metrics:</b> 30 total impressions, 2 clicks, 6.7% CTR (substantially higher than 2–3% B2B agency benchmark).", bullet_style))
    story.append(Paragraph("• <b>Index Coverage Status:</b> 10 URLs indexed and serving live; 15 URLs in Google systems queue (7 discovered, 8 crawled prior to internal link mesh update).", bullet_style))
    story.append(Spacer(1, 10))
    
    # Section 7: Version Control & Git History
    story.append(Paragraph("7. Version Control, Safety & Remote Synchronization", h1_style))
    story.append(Paragraph("• <b>Remote Pull & Conflict Merge:</b> Pulled latest remote commits from origin/main, safely merged conflicts in about and blog slug pages without code regression.", bullet_style))
    story.append(Paragraph("• <b>TypeScript Build Pass:</b> Ran npx tsc --noEmit with 0 compilation errors across all components, pages, and metadata.", bullet_style))
    story.append(Paragraph("• <b>Git Commits Pushed to Remote:</b>", bullet_style))
    story.append(Paragraph("  - <b>Commit 54a3f0e:</b> fix(seo): remove duplicate title branding and add alt text to marquee images", bullet_style))
    story.append(Paragraph("  - <b>Commit e9745dd:</b> merge: resolve conflicts with origin/main (keep absolute titles)", bullet_style))
    story.append(Paragraph("  - <b>Commit 1583d94:</b> feat(seo): install internal linking mesh connecting homepage, service hubs, and blogs", bullet_style))
    story.append(Paragraph("  - <b>Commit 627991c:</b> feat(blog): publish commercial pillar 'b2b appointment setting vs in-house sdr teams'", bullet_style))
    story.append(Paragraph("  - <b>Commit 793d8d1:</b> docs: add Clutch and Trustpilot profile kit for AEO directories", bullet_style))
    story.append(Paragraph("  - <b>Commit 13b79d2:</b> feat(blog): add bespoke Sales Velocity & SDR analytics cover image", bullet_style))
    story.append(Paragraph("• <b>Remote Synchronization Status:</b> All commits successfully pushed to https://github.com/devsynxoffical/qualifyleadsx.com.git. Working tree is completely clean.", bullet_style))
    story.append(Spacer(1, 10))
    
    # Section 8: Work in Progress & Next Recommended Steps
    story.append(Paragraph("8. Work in Progress & Recommended Next Steps", h1_style))
    story.append(Paragraph("• <b>Hostinger hPanel Redeployment:</b> Trigger manual 'Deploy / Pull' inside Hostinger hPanel Node.js dashboard to serve latest commit (13b79d2) on production live site.", bullet_style))
    story.append(Paragraph("• <b>Search Console Fast-Track Indexing:</b> Request indexing for https://www.qualifiedleadsx.com/blog/b2b-appointment-setting-vs-in-house-sdr-teams once deployed.", bullet_style))
    story.append(Paragraph("• <b>Search Console Validation:</b> Click 'Validate Fix' on 'Crawled - currently not indexed' table in GSC to trigger immediate Google bot re-evaluation.", bullet_style))
    story.append(Paragraph("• <b>AEO Directory Submission:</b> Claim free basic profiles on Clutch.co and Trustpilot using copy-paste kit in reports/QualifiedLeadsX_Clutch_Trustpilot_Profile_Kit.md next week.", bullet_style))
    
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Report built successfully at: {filename}")

if __name__ == "__main__":
    build_pdf()
