from pathlib import Path
import math
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).parent
ASSETS = ROOT / 'assets'
W, H = A4
C = {
    'dark': HexColor('#061C13'),
    'forest': HexColor('#0B3926'),
    'mint': HexColor('#22E6A3'),
    'cyan': HexColor('#46D8E9'),
    'gold': HexColor('#E5BD77'),
    'ink': HexColor('#14291E'),
    'text': HexColor('#355046'),
    'muted': HexColor('#657A70'),
    'line': HexColor('#DCECE3'),
    'paper': HexColor('#F8FBF9'),
    'white': HexColor('#FFFFFF'),
}
# Uses fonts installed on the user's computer. No font files are bundled.
import os
fontroots = [Path(os.environ.get('CV_FONT_DIR', '')), Path('/usr/share/fonts/truetype/noto'), Path('/usr/share/fonts/truetype/dejavu'), Path('C:/Windows/Fonts'), Path('/System/Library/Fonts/Supplemental')]
font_sets = [
    ['NotoSans-Regular.ttf','NotoSans-Medium.ttf','NotoSans-Bold.ttf','NotoSans-SemiBold.ttf'],
    ['DejaVuSans.ttf','DejaVuSans.ttf','DejaVuSans-Bold.ttf','DejaVuSans-Bold.ttf'],
    ['arial.ttf','arial.ttf','arialbd.ttf','arialbd.ttf'],
]
installed_fonts = None
for root in fontroots:
    for candidate in font_sets:
        matches = [root / filename for filename in candidate]
        if all(f.exists() for f in matches):
            installed_fonts = matches
            break
    if installed_fonts: break
if not installed_fonts:
    raise RuntimeError('Please install Noto Sans, Arial or DejaVu Sans, or set CV_FONT_DIR to the folder containing one of these font families.')
for n,f in zip(['Noto','NotoMedium','NotoBold','NotoSemi'],installed_fonts):
    pdfmetrics.registerFont(TTFont(n,str(f)))
pdfmetrics.registerFontFamily('Noto', normal='Noto', bold='NotoBold', italic='Noto', boldItalic='NotoBold')

DATA = {
'vi': {
  'role':'MARKETING  /  BRAND COMMUNICATIONS  /  REAL ESTATE',
  'place':'ĐÀ NẴNG, VIỆT NAM',
  'heading1':'HỒ SƠ CHUYÊN MÔN',
  'tagline':'TƯ DUY KINH DOANH  ×  HÌNH ẢNH THƯƠNG HIỆU  ×  THỰC THI',
  'objective_h':'MỤC TIÊU NGHỀ NGHIỆP',
  'objective':'Phát triển sự nghiệp trong lĩnh vực Marketing và truyền thông thương hiệu, kết nối chiến lược kinh doanh, hình ảnh sáng tạo và trải nghiệm khách hàng; tập trung vào bất động sản, thương mại và dịch vụ. Phát huy tư duy thẩm mỹ, sự tỉ mỉ và kinh nghiệm phối hợp liên phòng ban để thực hiện những hoạt động truyền thông có định hướng rõ ràng và giá trị lâu dài.',
  'skills_h':'NĂNG LỰC CHUYÊN MÔN',
  'skills':[
    ('01','Marketing & Kế hoạch','Phối hợp kế hoạch truyền thông theo hoạt động kinh doanh.'),
    ('02','Thiết kế & Media','Hình ảnh thương hiệu, chụp ảnh, hậu kỳ và nội dung số.'),
    ('03','Concept & Sự kiện','Ý tưởng trang trí và hình ảnh cho hoạt động sự kiện.'),
    ('04','Vận hành Kinh doanh','Hồ sơ, hợp đồng, chính sách, đối chiếu và phối hợp.'),
  ],
  'experience_h':'KINH NGHIỆM LÀM VIỆC',
  'career':[
    ('09/2024 - HIỆN TẠI','Công ty Cổ phần Đức Mạnh','Chuyên viên Marketing','Quản lý kênh truyền thông, thiết kế nhận diện hình ảnh, xây dựng concept sự kiện, chụp ảnh, hậu kỳ và phối hợp hoạt động marketing với bộ phận kinh doanh.'),
    ('12/2023 - 08/2024','L.U.X Property Danang','Trợ lý Ban Giám đốc','Quản lý hồ sơ hợp đồng, hỗ trợ chính sách bán hàng, đối chiếu số liệu và phối hợp triển khai marketing tới phòng kinh doanh.'),
    ('02/2023 - 11/2023','Minh Trần Holdings','Trợ lý Kinh doanh','Hỗ trợ thiết lập văn phòng, tuyển dụng, lập kế hoạch hoạt động kinh doanh, chăm sóc khách hàng và marketing online.'),
    ('2019 - 01/2023','DKRV Đà Nẵng & BĐS Tâm Phát','Sales Admin / Trợ lý tổng hợp','Hợp đồng đại lý và khách hàng, quản trị hồ sơ, chính sách kinh doanh, đối chiếu dữ liệu và hỗ trợ triển khai marketing.'),
    ('2018 - 2019','Polaris Việt Nam','Sales & Marketing','Tìm kiếm khách hàng, hỗ trợ hướng dẫn sử dụng phần mềm và triển khai hoạt động marketing tổng hợp.'),
    ('2017 - 2018','Bà Nà Hills Golf Club','Marshall','Giám sát hoạt động sân, xử lý tình huống phát sinh, hỗ trợ nhân sự và báo cáo hằng ngày.'),
  ],
  'education_h':'HỌC VẤN & ĐÀO TẠO',
  'education':'2014 - 2017  |  Cao đẳng Thương mại\nQuản trị Kinh doanh Dịch vụ & Lữ hành (hệ chính quy)\n2016 - 2017  |  Đào tạo kỹ năng mềm',
  'tools_h':'CÔNG CỤ HỖ TRỢ CÔNG VIỆC',
  'tools':'Thiết kế: Adobe Photoshop, Canva\nVăn phòng: Microsoft Office, Excel, PowerPoint, WPS, Google Workspace\nAI hỗ trợ sáng tạo: ChatGPT, Gemini, Suno, Stable Diffusion / ComfyUI',
  'traits_h':'PHONG CÁCH LÀM VIỆC',
  'traits':'Chú trọng chi tiết  /  Thích nghi nhanh  /  Tinh thần phối hợp  /  Hướng đến thực thi',
  'footer':'Hồ sơ cá nhân  •  Chỉ bao gồm thông tin liên hệ công khai phù hợp',
  'p1title':'01  /  ĐỊNH HƯỚNG & NĂNG LỰC',
  'p2title':'02  /  KINH NGHIỆM & NỀN TẢNG',
},
'en': {
  'role':'MARKETING  /  BRAND COMMUNICATIONS  /  REAL ESTATE',
  'place':'DA NANG, VIET NAM',
  'heading1':'PROFESSIONAL PROFILE',
  'tagline':'BUSINESS THINKING  ×  BRAND VISUALS  ×  EXECUTION',
  'objective_h':'CAREER OBJECTIVE',
  'objective':'To develop my career in marketing and brand communications by connecting business strategy, creative visuals and customer experience, with a focus on real estate, commerce and services. I bring a detail-oriented mindset, visual sensibility and experience coordinating across functions to deliver purposeful, well-executed brand communications with lasting value.',
  'skills_h':'CORE CAPABILITIES',
  'skills':[
    ('01','Marketing & Planning','Coordinate communications with business activities.'),
    ('02','Design & Media','Brand visuals, photography, retouching and digital content.'),
    ('03','Concepts & Events','Decoration concepts and event brand imagery.'),
    ('04','Business Operations','Documents, contracts, policies and data reconciliation.'),
  ],
  'experience_h':'WORK EXPERIENCE',
  'career':[
    ('09/2024 - PRESENT','Duc Manh Joint Stock Company','Marketing Specialist','Managing media channels, creating brand visuals, developing event concepts, photography and retouching, and coordinating marketing with the sales team.'),
    ('12/2023 - 08/2024','L.U.X Property Danang','Executive Assistant','Managing contract records, supporting sales policies and reconciliations, and coordinating marketing with sales operations.'),
    ('02/2023 - 11/2023','Minh Tran Holdings','Sales Assistant','Supporting office setup, recruitment, sales planning, customer care and online marketing.'),
    ('2019 - 01/2023','DKRV Danang & Tam Phat Real Estate','Sales Admin / General Assistant','Handling agency and client contracts, records, sales policies, data reconciliation and marketing implementation support.'),
    ('2018 - 2019','Polaris Vietnam','Sales & Marketing','Acquiring customers, supporting software-user training and implementing integrated marketing activities.'),
    ('2017 - 2018','Ba Na Hills Golf Club','Marshall','Supervising golf course operations, resolving on-site issues, coordinating staff and preparing daily reports.'),
  ],
  'education_h':'EDUCATION & TRAINING',
  'education':'2014 - 2017  |  College of Commerce\nBusiness Administration, Service & Tourism (full-time program)\n2016 - 2017  |  Soft Skills Training',
  'tools_h':'SOFTWARE & TOOLS',
  'tools':'Design: Adobe Photoshop, Canva\nOffice: Microsoft Office, Excel, PowerPoint, WPS, Google Workspace\nCreative AI: ChatGPT, Gemini, Suno, Stable Diffusion / ComfyUI',
  'traits_h':'WORKING STYLE',
  'traits':'Attention to detail  /  Quick adaptability  /  Cross-team collaboration  /  Execution-focused',
  'footer':'Personal profile  •  Only professional and public-facing contact details included',
  'p1title':'01  /  DIRECTION & CAPABILITIES',
  'p2title':'02  /  EXPERIENCE & FOUNDATION',
}}

name = 'NGUYỄN ĐỨC TUYẾN'

def ptext(c, html, x, top, width, font_size=9.2, leading=15, color=None, font='Noto'):
    style=ParagraphStyle('s',fontName=font,fontSize=font_size,leading=leading,textColor=color or C['text'],alignment=TA_LEFT,spaceBefore=0,spaceAfter=0,allowWidows=0,allowOrphans=0)
    p=Paragraph(html,style)
    _,h=p.wrap(width,850)
    p.drawOn(c,x,top-h)
    return top-h

def line(c, x1, y1, x2, y2, color, width=1):
    c.setStrokeColor(color);c.setLineWidth(width);c.line(x1,y1,x2,y2)

def cover_top(c, data, num):
    c.setFillColor(C['paper']);c.rect(0,0,W,H,stroke=0,fill=1)
    c.setFillColor(C['dark']);c.rect(0,H-166,W,166,stroke=0,fill=1)
    c.setFillColor(C['forest']);c.rect(0,H-166, W,5, stroke=0,fill=1)
    c.setFillColor(C['mint']);c.rect(42,H-166,92,4,stroke=0,fill=1)
    c.setFillColor(C['cyan']);c.rect(134,H-166,37,4,stroke=0,fill=1)
    c.setFillColor(C['gold']);c.rect(171,H-166,25,4,stroke=0,fill=1)
    # Architectural line art / facade in header
    c.setStrokeColor(Color(.28,.8,.62,alpha=.2));c.setLineWidth(.6)
    for k in range(14):
        x=325+k*25
        c.line(x,H-135,x,H-18)
    for k in range(5):
        y=H-138+k*25
        c.line(340,y,W-19,y)
    c.setStrokeColor(Color(.2,.8,.9,alpha=.35));c.line(407,H-147,454,H-40);c.line(454,H-40,498,H-147)
    c.setStrokeColor(Color(.95,.7,.43,alpha=.5));c.line(500,H-149,546,H-75);c.line(546,H-75,585,H-143)
    c.setFillColor(C['mint']);c.setFont('NotoSemi',8.3);c.drawString(43,H-35,data['role'])
    c.setFillColor(C['white']);c.setFont('NotoBold',23.7 if num==1 else 21.8);c.drawString(41,H-78,name)
    c.setFillColor(HexColor('#B0CFC0'));c.setFont('Noto',8.4);c.drawString(43,H-103,data['tagline'])
    c.setFillColor(C['gold']);c.setFont('NotoSemi',8);c.drawString(43,H-134,data['place'])
    c.setFillColor(HexColor('#D4EBDE'));c.setFont('Noto',8);c.drawRightString(W-42,H-134,'GING.SILVER@GMAIL.COM  |  +84 983 449 411')


def section_title(c, txt, x, y, width, idx):
    c.setFillColor(C['forest']);c.setFont('NotoBold',10.5);c.drawString(x,y,txt)
    c.setFillColor(C['gold']);c.setFont('NotoSemi',7.8);c.drawRightString(x+width,y,f'{idx:02d}')
    line(c,x,y-8,x+width,y-8,C['line'],.9)
    return y-21


def item(c, y, dates, company, position, description, compact=False):
    x=43; right=W-42; width=right-x
    c.setFillColor(C['dark']);c.setFont('NotoSemi',9.1);c.drawString(x,y,position)
    c.setFillColor(C['forest']);c.setFont('NotoMedium',8.3);c.drawRightString(right,y,dates)
    y-=14
    c.setFillColor(C['muted']);c.setFont('NotoMedium',8.5);c.drawString(x,y,company)
    y-=9
    y=ptext(c,description,x,y,width,8.8 if compact else 9.1,13.6,C['text'])
    y-=10 if compact else 14
    line(c,x,y+4,right,y+4,C['line'],.6)
    return y-4


def footer(c, data, page):
    line(c,43,42,W-42,42,C['line'])
    c.setFont('Noto',7.4);c.setFillColor(C['muted']);c.drawString(43,28,data['footer'])
    c.setFont('NotoSemi',8);c.setFillColor(C['forest']);c.drawRightString(W-42,28, f'{page:02d} / 02')


def build(lang):
    data=DATA[lang]
    path=ASSETS / ('Nguyen_Duc_Tuyen_CV_VI.pdf' if lang=='vi' else 'Nguyen_Duc_Tuyen_CV_EN.pdf')
    c=Canvas(str(path),pagesize=A4,pageCompression=1)
    c.setTitle(f'Nguyen Duc Tuyen - Professional CV ({lang.upper()})')
    c.setAuthor('Nguyen Duc Tuyen')
    c.setSubject('Marketing / Brand Communications / Real Estate')
    cover_top(c,data,1)
    x=43;width=W-85
    y=H-190
    y=section_title(c,data['objective_h'],x,y,width,1)
    y=ptext(c,data['objective'],x,y,width,9.25,16,C['text'])-20
    y=section_title(c,data['skills_h'],x,y,width,2)
    skillbase=y
    colw=(width-17)/2
    for n,(index,title,description) in enumerate(data['skills']):
        row=n//2;col=n%2
        sx=x+col*(colw+17);top=skillbase-row*66
        c.setFillColor(C['mint']);c.rect(sx,top-39,2,37,stroke=0,fill=1)
        c.setFillColor(C['muted']);c.setFont('NotoSemi',7.4);c.drawString(sx+12,top-2,index)
        c.setFillColor(C['ink']);c.setFont('NotoSemi',9.25);c.drawString(sx+30,top-2,title)
        ptext(c,description,sx+12,top-11,colw-20,8.2,12,C['text'])
    y=skillbase-140
    y=section_title(c,data['experience_h'],x,y,width,3)
    for entry in data['career'][:2]:
        y=item(c,y,*entry,compact=False)
    print(lang,'page1 bottom y:',y)
    footer(c,data,1);c.showPage()
    cover_top(c,data,2)
    y=H-189
    y=section_title(c,data['p2title'],x,y,width,1)
    for entry in data['career'][2:]:
        y=item(c,y,*entry,compact=True)
    print(lang,'page2 career bottom y:',y)
    y-=8
    y=section_title(c,data['education_h'],x,y,width,2)
    for i,line_text in enumerate(data['education'].splitlines()):
        c.setFillColor(C['ink'] if i==0 else C['text']);c.setFont('NotoSemi' if i==0 else 'Noto',8.7)
        c.drawString(x,y,line_text);y-=16
    y-=11
    y=section_title(c,data['tools_h'],x,y,width,3)
    for t in data['tools'].splitlines():
        y=ptext(c,t.replace('&','&amp;'),x,y,width,8.5,13.8,C['text'])-2
    y-=12
    y=section_title(c,data['traits_h'],x,y,width,4)
    y=ptext(c,data['traits'],x,y,width,8.4,14,C['text'])
    print(lang,'page2 bottom y:',y)
    footer(c,data,2);c.save()
    return path

if __name__=='__main__':
    for lang in ('vi','en'):
        print(build(lang))
