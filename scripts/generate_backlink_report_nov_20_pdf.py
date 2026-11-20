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
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawString(45, 28, "QualifiedLeadsX™ (Ecom Expertz LLC) — Off-Page Authority & Backlink Report")
        self.drawRightString(567, 28, page_str)
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(45, 39, 567, 39)
        self.restoreState()


def build_pdf(filename="reports/QualifiedLeadsX_Backlink_Report_Nov_20_2026.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=45,
        rightMargin=45,
        topMargin=40,
        bottomMargin=48
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=20,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=3
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
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=8,
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
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=body_style,
        leftIndent=10,
        firstLineIndent=-7,
        spaceAfter=2.5
    )

    th_style = ParagraphStyle(
        'TH',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor('#0f172a')
    )

    td_style = ParagraphStyle(
        'TD',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.2,
        leading=9.5,
        textColor=colors.HexColor('#334155')
    )

    td_bold = ParagraphStyle(
        'TDBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.4,
        leading=9.5,
        textColor=colors.HexColor('#0f172a')
    )

    story = []

    # Header
    story.append(Paragraph("QualifiedLeadsX™ — Off-Page Backlink Work Report (9 Profiles)", title_style))
    story.append(Paragraph(
        '<b>Date:</b> Friday, November 20, 2026 &nbsp;|&nbsp; <b>Client:</b> Gaurav Kapoor (Ecom Expertz LLC) &nbsp;|&nbsp; <b>Website:</b> <link href="https://www.qualifiedleadsx.com" color="#0284c7"><u>www.qualifiedleadsx.com</u></link>',
        subtitle_style
    ))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#0f172a'), spaceBefore=1, spaceAfter=8))

    # Summary Stat Boxes
    stat_data = [[
        Paragraph("<b>9 Profiles Done</b><br/><font color='#16a34a' size=6.5>Phase 1 Backlinks Completed</font>", ParagraphStyle('S1', parent=td_style, alignment=1)),
        Paragraph("<b>5 Live + Schema</b><br/><font color='#0284c7' size=6.5>Connected in Footer &amp; JSON-LD</font>", ParagraphStyle('S2', parent=td_style, alignment=1)),
        Paragraph("<b>4 Portfolio Items</b><br/><font color='#16a34a' size=6.5>Case Studies Linked</font>", ParagraphStyle('S3', parent=td_style, alignment=1)),
        Paragraph("<b>4 Under Review</b><br/><font color='#b45309' size=6.5>G2, GoodFirms, TB, DesignRush</font>", ParagraphStyle('S4', parent=td_style, alignment=1)),
    ]]
    t_stat = Table(stat_data, colWidths=[130.5, 130.5, 130.5, 130.5])
    t_stat.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ]))
    story.append(t_stat)
    story.append(Spacer(1, 6))

    # Section 1: 9 Completed Profiles Table
    story.append(Paragraph("1. Completed Backlink Profiles &amp; Clickable Verification Links (9 / 9)", h1_style))
    story.append(Paragraph(
        "Click any link below to directly open and verify each live profile or submitted directory dashboard:",
        body_style
    ))

    rows = [
        [
            Paragraph("#", th_style),
            Paragraph("Platform", th_style),
            Paragraph("Status", th_style),
            Paragraph("Direct Clickable Link", th_style),
            Paragraph("Key Details &amp; Work Completed", th_style),
        ],
        [
            Paragraph("<b>1</b>", td_bold),
            Paragraph("<b>Clutch.co</b>", td_bold),
            Paragraph("<font color='#16a34a'><b>LIVE + SCHEMA</b></font>", td_style),
            Paragraph('<link href="https://clutch.co/profile/qualifiedleadsx" color="#0284c7"><u>https://clutch.co/profile/qualifiedleadsx</u></link>', td_style),
            Paragraph("Wyoming HQ, homepage &amp; booking links + <b>3 Case Studies</b> published ($846K, $639K, $203K). Linked in Footer &amp; Schema.", td_style),
        ],
        [
            Paragraph("<b>2</b>", td_bold),
            Paragraph("<b>Crunchbase</b>", td_bold),
            Paragraph("<font color='#16a34a'><b>LIVE + SCHEMA</b></font>", td_style),
            Paragraph('<link href="https://www.crunchbase.com/organization/qualifiedleadsx" color="#0284c7"><u>https://www.crunchbase.com/organization/qualifiedleadsx</u></link>', td_style),
            Paragraph("Verified Organization profile under Ecom Expertz LLC (Founded 2022, Sheridan WY). Linked in Footer &amp; Schema.", td_style),
        ],
        [
            Paragraph("<b>3</b>", td_bold),
            Paragraph("<b>Trustpilot</b>", td_bold),
            Paragraph("<font color='#16a34a'><b>LIVE + SCHEMA</b></font>", td_style),
            Paragraph('<link href="https://www.trustpilot.com/review/qualifiedleadsx.com" color="#0284c7"><u>https://www.trustpilot.com/review/qualifiedleadsx.com</u></link>', td_style),
            Paragraph("Claimed official domain profile, 245-word SEO bio, Marketing Agency categories &amp; WY details. Linked in Footer &amp; Schema.", td_style),
        ],
        [
            Paragraph("<b>4</b>", td_bold),
            Paragraph("<b>Agency Spotter</b>", td_bold),
            Paragraph("<font color='#16a34a'><b>LIVE &amp; VERIFIED</b></font>", td_style),
            Paragraph('<link href="https://www.agencyspotter.com/qualifiedleadsx" color="#0284c7"><u>https://www.agencyspotter.com/qualifiedleadsx</u></link>', td_style),
            Paragraph("Verified Agency badge active, US HQ location, website &amp; contact backlinks live. Linked in Footer &amp; Schema.", td_style),
        ],
        [
            Paragraph("<b>5</b>", td_bold),
            Paragraph("<b>Sortlist</b>", td_bold),
            Paragraph("<font color='#16a34a'><b>COMPLETED</b></font>", td_style),
            Paragraph('<link href="https://www.sortlist.com/agency/qualifiedleadsx" color="#0284c7"><u>https://www.sortlist.com/agency/qualifiedleadsx</u></link>', td_style),
            Paragraph("Added Social Media, Digital Strategy &amp; Online Advertising services, cover banner, bio &amp; WY address. Linked in Footer &amp; Schema.", td_style),
        ],
        [
            Paragraph("<b>6</b>", td_bold),
            Paragraph("<b>GoodFirms</b>", td_bold),
            Paragraph("<font color='#b45309'><b>SUBMITTED</b></font>", td_style),
            Paragraph('<link href="https://myaccount.goodfirms.co/users/dashboard" color="#0284c7"><u>https://myaccount.goodfirms.co/users/dashboard</u></link>', td_style),
            Paragraph("All 4 steps completed: WY HQ, Demand Gen/ABM/Meta services (100%), Client/Industry focus &amp; AI tools. Under review.", td_style),
        ],
        [
            Paragraph("<b>7</b>", td_bold),
            Paragraph("<b>TechBehemoths</b>", td_bold),
            Paragraph("<font color='#b45309'><b>SUBMITTED</b></font>", td_style),
            Paragraph('<link href="https://my.techbehemoths.com/dashboard/overview" color="#0284c7"><u>https://my.techbehemoths.com/dashboard/overview</u></link>', td_style),
            Paragraph("All 5 steps completed: Unique 1,700-char bio, Company FAQs, WY HQ, 7 services &amp; $846K Case Study portfolio item.", td_style),
        ],
        [
            Paragraph("<b>8</b>", td_bold),
            Paragraph("<b>DesignRush</b>", td_bold),
            Paragraph("<font color='#b45309'><b>SUBMITTED</b></font>", td_style),
            Paragraph('<link href="https://www.designrush.com/" color="#0284c7"><u>https://www.designrush.com/</u></link>', td_style),
            Paragraph("Submitted agency profile with custom 600x300 logo, 3 custom 1200x720 photos, 8 featured clients, 10 services &amp; 10 industries.", td_style),
        ],
        [
            Paragraph("<b>9</b>", td_bold),
            Paragraph("<b>G2</b>", td_bold),
            Paragraph("<font color='#b45309'><b>SUBMITTED</b></font>", td_style),
            Paragraph('<link href="https://www.g2.com/" color="#0284c7"><u>https://www.g2.com/</u></link>', td_style),
            Paragraph("Service Provider listing verified &amp; claimed for qualifiedleadsx.com. G2 moderation approval scheduled within 1–3 business days.", td_style),
        ],
    ]

    t = Table(rows, colWidths=[18, 72, 64, 178, 190])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#fafbfc')]),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0, 0), (-1, -1), 4.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    story.append(t)
    story.append(Spacer(1, 8))

    # Section 2: Website Schema & Footer Connection
    story.append(Paragraph("2. Website Integration &amp; Entity Verification (Pushed to GitHub main)", h1_style))
    story.append(Paragraph(
        '• <b>Sitewide Footer (All 166 Pages):</b> <link href="https://www.qualifiedleadsx.com/" color="#0284c7"><u>https://www.qualifiedleadsx.com/</u></link> — Displays direct verification links to Clutch.co, Trustpilot, Crunchbase, Sortlist, and Agency Spotter.',
        bullet_style
    ))
    story.append(Paragraph(
        '• <b>About Page Official Channels:</b> <link href="https://www.qualifiedleadsx.com/about" color="#0284c7"><u>https://www.qualifiedleadsx.com/about</u></link> — Displays all verified external directory profiles.',
        bullet_style
    ))
    story.append(Paragraph(
        "• <b>Organization Schema (<code>sameAs</code>):</b> Connected inside <code>lib/brand-facts.ts</code>, <code>lib/schema.ts</code>, and <code>components/seo/JsonLd.tsx</code> (Git commit: <code>5ed6cd2</code>) so Google connects every profile into one verified brand entity.",
        bullet_style
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully generated: {filename}")


if __name__ == '__main__':
    build_pdf()
