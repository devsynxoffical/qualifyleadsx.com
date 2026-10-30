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
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#475569"))
        
        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 755, "QualifiedLeadsX™ : Complete Daily Technical SEO, Visual Design & GSC Sprint Report")
            self.drawRightString(558, 755, "October 30, 2026")
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

def build_pdf(filename="reports/QualifiedLeadsX_Daily_Work_Report_Oct_30_2026.pdf"):
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
    c_accent = colors.HexColor("#15803d")     # Green 700
    c_blue = colors.HexColor("#2563eb")       # Blue 600
    c_text = colors.HexColor("#1e293b")       # Slate 800
    c_muted = colors.HexColor("#475569")      # Slate 600
    c_bg_light = colors.HexColor("#f8fafc")   # Slate 50
    c_border = colors.HexColor("#e2e8f0")     # Slate 200
    
    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
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
        fontSize=9,
        leading=13,
        textColor=c_muted,
        spaceAfter=12
    )
    
    section_h1 = ParagraphStyle(
        'SectionH1',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=c_primary,
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )
    
    body = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=c_text
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=c_text,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=3
    )
    
    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        textColor=c_text
    )
    
    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=c_primary
    )
    
    table_hdr = ParagraphStyle(
        'TableHdr',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=colors.white
    )
    
    story = []
    
    # Document Header
    story.append(Paragraph("QualifiedLeadsX™ : Master Daily Production & SEO Engineering Report", title_style))
    story.append(Paragraph("<b>Date:</b> October 30, 2026 &nbsp;|&nbsp; <b>Entity:</b> QualifiedLeadsX™ (Ecom Expertz LLC) &nbsp;|&nbsp; <b>Git Commits Today:</b> 8 Pushed &nbsp;|&nbsp; <b>Production Status:</b> 100% Verified Live", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_primary, spaceBefore=0, spaceAfter=10))
    
    # Executive Summary Card
    exec_summary_text = """
    <b>EXECUTIVE OVERVIEW : COMPLETE SPRINT DELIVERABLES (OCTOBER 30, 2026)</b><br/>
    Today's full-day execution resolved all user requirements across visual design, search engine indexing, interactive software engineering, and high-intent commercial content:
    <br/>
    <b>1. Total Visual Transformation:</b> Eliminated plain text density across four major landing pages (<code>/appointment-setting</code>, <code>/for/coaches</code>, <code>/for/consultants</code>, and <code>/about</code>) by generating and embedding 15+ custom UI telemetry dashboards, workflow step previews, command center visuals, and verified client proof snapshots.<br/>
    <b>2. Interactive ROI Software:</b> Engineered and launched a live B2B Pipeline ROI Calculator with dynamic sliders.<br/>
    <b>3. Trending Search Query Infusion:</b> Integrated Google Search Console trending keywords (<code>benchmark roas b2b</code>, <code>speed to lead</code>, <code>qualified appointment generation</code>, <code>broad targeting</code>) and semantic <code>FAQPage</code> schemas across top impression pages (<code>/</code>, <code>/meta-ads-agency</code>, <code>/about</code>, <code>/book-your-call</code>).<br/>
    <b>4. Commercial Pillar Blog:</b> Published 14-minute pillar targeting GSC top queries with custom 3D obsidian/lime cover image.<br/>
    <b>5. Production & Indexing:</b> Verified 29 total sitemap pages, bumped timestamps to 2026-10-30, verified zero build errors (<code>npx tsc --noEmit</code> pass), and deployed 8 commits to GitHub <code>origin/main</code>.
    """
    summary_table = Table([[Paragraph(exec_summary_text, body)]], colWidths=[504])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_light),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(summary_table)
    story.append(Spacer(1, 8))
    
    # Section 1: Detailed Bullet-Point Task Log
    story.append(Paragraph("1. Granular Accomplishment Breakdown (All Tasks Today)", section_h1))
    
    tasks = [
        "<b>Visual Overhaul on <code>/appointment-setting</code>:</b> Designed and deployed bespoke 16:9 Live Dispatch Telemetry Dashboard (<code>appointment-setting-hero.jpg</code>) inside a glassmorphic frame. Added concrete workflow preview cards to the 4-tier qualification gate (AI screener, kanban pipeline, CRM nodes, calendar booking). Embedded 4 verified client proof cards showcasing $148K revenue and 91.2% show-up rates.",
        "<b>Interactive Appointment ROI Calculator Deployed:</b> Created dynamic client component (<code>AppointmentRoiCalculator.tsx</code>) equipped with 3 live adjustment sliders (Monthly Ad Spend, Ticket Size, Target Calls/Mo) generating instant front-end revenue projections, Cost Per Qualified Call (CPQC), and ROI multiples.",
        "<b>Visual Design Transformation on <code>/for/coaches</code>:</b> Embedded a multi-device high-ticket enrollment funnel architecture mockup (<code>shot_08_multi_device.webp</code>) in hero. Added concrete step preview thumbnails (Brand System, 12-Min VSL Player, AI Filter Screener, Calendar Booked confirmation) to the 4-step installation workflow. Integrated 4 real coaching proof cards ($68.5K cohort MRR, 44 calls/mo, 89% show-up rate).",
        "<b>Visual Design Transformation on <code>/for/consultants</code>:</b> Deployed enterprise C-level decision-maker pipeline telemetry visual (<code>shot_09_ad_telemetry.webp</code>) in hero. Upgraded the corporate pipeline component section with authoritative previews (VSL whitepaper player, $50M turnover screener gate, CRM dossier briefs). Integrated 4 enterprise advisory proof cards ($180K annual retainers, 28 C-level meetings/mo).",
        "<b>Visual Design Overhaul on <code>/about</code>:</b> Embedded custom Digital War Room & Growth Command Center graphic (<code>about-command-center.jpg</code>) in the hero section. Embedded live software pipeline thumbnails into all 3 audience cards (Agency Kanban, Coaching Funnel, B2B CRM nodes). Upgraded leadership profiles with circular glowing avatar badges and specialized telemetry previews.",
        "<b>Targeted Commercial Pillar Blog Published:</b> Authored and deployed 14-minute commercial guide: <i>'B2B ROAS Benchmarks & Qualified Appointment Generation: How High-Ticket Offers Hit 4x–7x ROAS'</i> targeting exact queries from GSC (<code>benchmark roas b2b</code>, <code>qualified appointment generation</code>). Generated custom 3D telemetry cover image (<code>b2b-roas-benchmarks-appointment-generation.jpg</code>) and embedded AEO direct answer box, unit economics formula, and commercial internal links.",
        "<b>High-Intent Trending Keywords & FAQ Infusion:</b> Injected trending search queries and structured FAQ modules into top impression pages: Homepage (ROAS economics, speed-to-lead show-up stats, Andromeda broad targeting), <code>/meta-ads-agency</code> (CAC benchmarks, creative testing, 12-min VSL vs lead forms), <code>/about</code> (operational differences, 90-day guarantee terms), and <code>/book-your-call</code> (30-min zero-pressure audit details).",
        "<b>Google Search Console Diagnostic & 29-Page Sitemap Architecture:</b> Audited user GSC screenshots. Resolved user confusion regarding the 5-page 24-hour filter by analyzing full 29-page XML sitemap. Bumped <code>lastModified</code> timestamps to 2026-10-30 in <code>app/sitemap.ts</code> to signal fresh content for re-crawling.",
        "<b>Production Build & Git Remote Synchronization:</b> Validated entire codebase with <code>npx tsc --noEmit</code> (0 compilation errors). Verified local and remote routes return HTTP 200 OK. Committed and pushed 8 production commits to <code>origin/main</code> on GitHub."
    ]
    
    for t in tasks:
        story.append(Paragraph(f"• &nbsp;{t}", bullet_style))
    
    story.append(Spacer(1, 8))
    
    # Section 2: Complete Git Commit History Today
    story.append(Paragraph("2. Complete Production Git Commit History (Today)", section_h1))
    
    git_commits = [
        [
            Paragraph("Commit", table_hdr),
            Paragraph("Scope & Description", table_hdr),
            Paragraph("Key Files Modified", table_hdr),
            Paragraph("Status", table_hdr),
        ],
        [
            Paragraph("<code>baf3725</code>", table_cell_bold),
            Paragraph("docs: finalize October 30 work report with about page overhaul and git log updates", table_cell),
            Paragraph("<code>reports/..._Oct_30_2026.html</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>3e70acc</code>", table_cell_bold),
            Paragraph("feat(design): overhaul about page with command center hero visual, audience pipeline cards, and team badges", table_cell),
            Paragraph("<code>app/about/page.tsx</code><br/><code>public/images/about-command-center.jpg</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>39ec7ab</code>", table_cell_bold),
            Paragraph("feat(seo): inject high-intent trending FAQs, schema, and E-E-A-T trust signals across core top pages", table_cell),
            Paragraph("<code>lib/data.ts</code>, <code>meta-ads-agency</code>, <code>about</code>, <code>book-your-call</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>822247c</code>", table_cell_bold),
            Paragraph("docs: add October 30 daily work report in PDF and HTML formats", table_cell),
            Paragraph("<code>reports/..._Oct_30_2026.pdf</code>, <code>.html</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>7966bae</code>", table_cell_bold),
            Paragraph("feat(content): publish commercial pillar targeting benchmark roas b2b and qualified appointment generation", table_cell),
            Paragraph("<code>lib/blog-data.ts</code><br/><code>b2b-roas-benchmarks...jpg</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>64cc814</code>", table_cell_bold),
            Paragraph("chore(seo): bump sitemap lastModified dates to Oct 30 2026 to accelerate google re-crawling", table_cell),
            Paragraph("<code>app/sitemap.ts</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>faf9b6b</code>", table_cell_bold),
            Paragraph("feat(design): embed architecture diagrams, component preview shots, and proof galleries on coaches and consultants", table_cell),
            Paragraph("<code>app/for/coaches/page.tsx</code><br/><code>app/for/consultants/page.tsx</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
        [
            Paragraph("<code>bcda98c</code>", table_cell_bold),
            Paragraph("feat(design): embed live dispatch dashboard graphic, gate workflows, and proof cards on appointment setting", table_cell),
            Paragraph("<code>app/appointment-setting/page.tsx</code><br/><code>AppointmentRoiCalculator.tsx</code>", table_cell),
            Paragraph("<font color='#15803d'><b>Deployed</b></font>", table_cell),
        ],
    ]
    
    commit_table = Table(git_commits, colWidths=[60, 194, 170, 80])
    commit_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_primary),
        ('GRID', (0,0), (-1,-1), 0.5, c_border),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, c_bg_light]),
    ]))
    story.append(commit_table)
    story.append(Spacer(1, 8))
    
    # Section 3: Priority Indexing Action Plan
    story.append(Paragraph("3. Immediate Google Search Console Fast-Track Indexing Protocol", section_h1))
    
    gsc_plan = """
    <b>Priority Action Plan for GSC Submission:</b><br/>
    1. <b>Sitemap Submission (Covers All 29 Pages):</b> Re-submit <code>https://www.qualifiedleadsx.com/sitemap.xml</code> in GSC Sitemaps menu. This signals Googlebot to crawl the full directory with fresh 2026-10-30 timestamps.<br/>
    2. <b>Manual Live URL Inspections (Top 4 Priority URLs):</b><br/>
    &nbsp;&nbsp;• <code>https://www.qualifiedleadsx.com/</code> (Homepage with expanded FAQ schema)<br/>
    &nbsp;&nbsp;• <code>https://www.qualifiedleadsx.com/meta-ads-agency</code> (CAC benchmarks and Andromeda FAQs)<br/>
    &nbsp;&nbsp;• <code>https://www.qualifiedleadsx.com/about</code> (Command center visual & E-E-A-T trust FAQs)<br/>
    &nbsp;&nbsp;• <code>https://www.qualifiedleadsx.com/blog/b2b-roas-benchmarks-qualified-appointment-generation</code> (New commercial pillar)<br/>
    &nbsp;&nbsp;<i>Procedure:</i> Paste URL in top search bar &rarr; Click <b>'TEST LIVE URL'</b> &rarr; Click <b>'REQUEST INDEXING'</b>. Limit to 3–4 URLs daily to avoid quota errors.
    """
    gsc_table = Table([[Paragraph(gsc_plan, body)]], colWidths=[504])
    gsc_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_bg_light),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(gsc_table)
    
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Master PDF built successfully at: {filename}")

if __name__ == "__main__":
    build_pdf()
