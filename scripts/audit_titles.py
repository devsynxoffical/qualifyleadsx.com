import glob
import re

pages = glob.glob('app/**/page.tsx', recursive=True)
print(f"Total pages: {len(pages)}")

for p in sorted(pages):
    with open(p, 'r', encoding='utf-8') as f:
        c = f.read()
    
    # search title
    m = re.search(r'title:\s*(?:\{\s*absolute:\s*)?["\']([^"\']+)["\']', c)
    if m:
        t = m.group(1)
        r = p.replace('app', '').replace('\\page.tsx', '').replace('/page.tsx', '') or '/'
        if len(t) > 55:
            print(f"[{len(t)} chars] {r}: \"{t}\"")

# Parse blog-data.ts directly
with open('lib/blog-data.ts', 'r', encoding='utf-8') as f:
    blog_content = f.read()

# match slug, seoTitle, title, description
post_blocks = blog_content.split('slug: "')
print(f"\nTotal blog blocks: {len(post_blocks)-1}")
for block in post_blocks[1:]:
    slug = block.split('"')[0]
    
    # seoTitle or title
    m_seo = re.search(r'seoTitle:\s*["\']([^"\']+)["\']', block)
    m_title = re.search(r'title:\s*["\']([^"\']+)["\']', block)
    m_desc = re.search(r'description:\s*["\']([^"\']+)["\']', block)
    
    title = (m_seo.group(1) if m_seo else (m_title.group(1) if m_title else "N/A"))
    desc = m_desc.group(1) if m_desc else ""
    
    if len(title) > 55:
        print(f"[Blog Title {len(title)} chars] {slug}: \"{title}\"")
    if len(desc) > 155:
        print(f"[Blog Meta {len(desc)} chars] {slug}: ({len(desc)} chars)")

