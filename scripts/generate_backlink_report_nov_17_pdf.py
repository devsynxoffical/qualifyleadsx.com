from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
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
            self.drawString(54, 755, "QualifiedLeadsX™ : Off-Page Authority & Backlink Execution Report")
            self.drawRightString(558, 755, "Tuesday, Nov 17, 2026")
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


def build_pdf(filename="reports/QualifiedLeadsX_Backlink_Work_Report_Nov_17_2026.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=48,
        rightMargin=48,
        topMargin=48,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=16.5,
        leading=20,
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
        spaceAfter=8
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=10,
        spaceAfter=5,
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
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor('#0f172a')
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.2,
        leading=10,
        textColor=colors.HexColor('#334155')
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=colors.HexColor('#0f172a')
    )

    story = []

    story.append(Paragraph("QualifiedLeadsX™ : Off-Page Authority & Backlink Work Report", title_style))
    story.append(Paragraph(
        '<b>Date:</b> Tuesday, November 17, 2026 &nbsp;|&nbsp; <b>Client:</b> Gaurav Kapoor (Ecom Expertz LLC) &nbsp;|&nbsp; <b>Site:</b> <link href="https://www.qualifiedleadsx.com" color="#0284c7"><u>qualifiedleadsx.com</u></link>',
        subtitle_style
    ))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#0f172a'), spaceBefore=2, spaceAfter=8))

    # KPI Boxes
    stat_data = [[
        Paragraph("<b>5 / 5 Done</b><br/><font color='#16a34a' size=6.5>Week 1 Target Completed</font>", ParagraphStyle('S1', parent=table_cell_style, alignment=1)),
        Paragraph("<b>3 Live + Schema</b><br/><font color='#0284c7' size=6.5>Clutch, Crunchbase, Trustpilot</font>", ParagraphStyle('S2', parent=table_cell_style, alignment=1)),
        Paragraph("<b>3 Case Studies</b><br/><font color='#16a34a' size=6.5>Published on Clutch Portfolio</font>", ParagraphStyle('S3', parent=table_cell_style, alignment=1)),
        Paragraph("<b>2 Under Review</b><br/><font color='#b45309' size=6.5>GoodFirms & DesignRush</font>", ParagraphStyle('S4', parent=table_cell_style, alignment=1)),
    ]]
    t_stat = Table(stat_data, colWidths=[129, 129, 129, 129])
    t_stat.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t_stat)
    story.append(Spacer(1, 6))

    # Section 1: Clickable Backlink Table
    story.append(Paragraph("1. Completed Authority Profiles & Direct Clickable Verification Links", h1_style))
    story.append(Paragraph(
        "All 5 Week-1 priority profiles have been created and submitted with consistent Ecom Expertz LLC / Sheridan, WY entity data. Click any link below to verify directly:",
        body_style
    ))

    backlink_data = [
        [
            Paragraph("Platform", table_header_style),
            Paragraph("Status", table_header_style),
            Paragraph("Direct Clickable Verification URL", table_header_style),
            Paragraph("Work Completed & Assets Added", table_header_style)
        ],
        [
            Paragraph("<b>1. Clutch.co</b><br/><font size=6.5 color='#64748b'>Tier-1 B2B Directory</font>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>LIVE +<br/>SCHEMA</b></font>", table_cell_style),
            Paragraph('<link href="https://clutch.co/profile/qualifiedleadsx" color="#0284c7"><u>https://clutch.co/profile/qualifiedleadsx</u></link>', table_cell_style),
            Paragraph("Updated Sheridan WY address, website &amp; booking backlinks. Published <b>3 Case Studies</b> ($846K B2B Agency, $639K Med Spa, $203K Coaching). Connected to site Schema &amp; Footer.", table_cell_style)
        ],
        [
            Paragraph("<b>2. Crunchbase</b><br/><font size=6.5 color='#64748b'>Entity &amp; AI Graph</font>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>LIVE +<br/>SCHEMA</b></font>", table_cell_style),
            Paragraph('<link href="https://www.crunchbase.com/organization/qualifiedleadsx" color="#0284c7"><u>https://www.crunchbase.com/organization/qualifiedleadsx</u></link>', table_cell_style),
            Paragraph("Created organization profile under Ecom Expertz LLC (Founded 2022, Sheridan, WY). Added logo, descriptions, and website backlink. Connected to site Schema &amp; Footer.", table_cell_style)
        ],
        [
            Paragraph("<b>3. Trustpilot</b><br/><font size=6.5 color='#64748b'>Review Authority</font>", table_cell_bold),
            Paragraph("<font color='#16a34a'><b>LIVE +<br/>SCHEMA</b></font>", table_cell_style),
            Paragraph('<link href="https://www.trustpilot.com/review/qualifiedleadsx.com" color="#0284c7"><u>https://www.trustpilot.com/review/qualifiedleadsx.com</u></link>', table_cell_style),
            Paragraph("Claimed &amp; activated official domain account. Published 245-word SEO bio, Marketing/Advertising categories &amp; WY contact details. Connected to site Schema &amp; Footer.", table_cell_style)
        ],
        [
            Paragraph("<b>4. GoodFirms</b><br/><font size=6.5 color='#64748b'>Agency Directory</font>", table_cell_bold),
            Paragraph("<font color='#b45309'><b>SUBMITTED<br/>(24h Review)</b></font>", table_cell_style),
            Paragraph('<link href="https://myaccount.goodfirms.co/users/dashboard" color="#0284c7"><u>https://myaccount.goodfirms.co/users/dashboard</u></link>', table_cell_style),
            Paragraph("Completed all 4 steps: General Info, WY HQ Location, Service Focus (100% Demand Gen, ABM, Facebook &amp; Instagram), Client/Industry focus, 3 Why-Choose-You pillars &amp; AI tools.", table_cell_style)
        ],
        [
            Paragraph("<b>5. DesignRush</b><br/><font size=6.5 color='#64748b'>Category Authority</font>", table_cell_bold),
            Paragraph("<font color='#b45309'><b>SUBMITTED<br/>(Moderation)</b></font>", table_cell_style),
            Paragraph('<link href="https://www.designrush.com/" color="#0284c7"><u>https://www.designrush.com/</u></link>', table_cell_style),
            Paragraph("Submitted agency profile with custom 600x300 logo, 3 custom 1200x720 showcase photos, Sheridan WY HQ, 8 featured clients, 10 top services, and 10 industries.", table_cell_style)
        ],
    ]
    t_backlink = Table(backlink_data, colWidths=[82, 62, 162, 210])
    t_backlink.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t_backlink)
    story.append(Spacer(1, 6))

    # Section 2: Website Schema & Footer Integration
    story.append(Paragraph("2. Website Knowledge Graph &amp; Schema Verification Links", h1_style))
    story.append(Paragraph(
        '• <b>About Page Official Channels:</b> <link href="https://www.qualifiedleadsx.com/about" color="#0284c7"><u>https://www.qualifiedleadsx.com/about</u></link> (Displays direct links to Clutch, Crunchbase, Trustpilot, YouTube, and Facebook).',
        bullet_style
    ))
    story.append(Paragraph(
        '• <b>Sitewide Footer (All 166 Pages):</b> <link href="https://www.qualifiedleadsx.com/" color="#0284c7"><u>https://www.qualifiedleadsx.com/</u></link> (Proof &amp; Comparisons column displays Verified on Clutch.co, Trustpilot Reviews, and Crunchbase Organization).',
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Organization Schema (<code>sameAs</code>):</b> Connected inside <code>lib/brand-facts.ts</code>, <code>lib/schema.ts</code>, and <code>components/seo/JsonLd.tsx</code> so Googlebot merges all external profiles into one trusted brand entity.",
        bullet_style
    ))
    story.append(Spacer(1, 6))

    # Section 3: Next Steps (Tomorrow)
    story.append(Paragraph("3. Next Scheduled Tasks (Tomorrow — Nov 18, 2026)", h1_style))
    story.append(Paragraph("• <b>Remaining Global Directories:</b> TechBehemoths, Sortlist, UpCity, Agency Spotter, and G2 Services Marketplace.", bullet_style))
    story.append(Paragraph("• <b>Local Map Listings (Delhi Office):</b> Bing Places and Apple Business Connect.", bullet_style))
    story.append(Paragraph("• <b>Verified Reviews Outreach:</b> Send Clutch &amp; Trustpilot review invitations to 5 past clients.", bullet_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully generated: {filename}")


if __name__ == '__main__':
    build_pdf()
