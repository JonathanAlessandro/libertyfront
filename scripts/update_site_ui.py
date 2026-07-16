from pathlib import Path
import re
root = Path(__file__).resolve().parent.parent
html_files = list(root.glob('*.html')) + list(root.joinpath('pages').glob('*.html'))
for path in html_files:
    text = path.read_text(encoding='utf-8')
    header_pattern = re.compile(r'<header class="site-header">.*?</header>\s*', re.S)
    footer_pattern = re.compile(r'<footer class="site-footer">.*?</footer>\s*', re.S)
    text, header_count = header_pattern.subn('<header id="site-header" class="site-header"></header>\n', text)
    text, footer_count = footer_pattern.subn('<footer id="site-footer" class="site-footer"></footer>\n', text)
    text = re.sub(r'<script>\s*document\.querySelectorAll\(\s*\'\[data-year\]\'\s*\)\.forEach\(.*?</script>\s*', '', text, flags=re.S)
    if 'js/site-ui.js' not in text:
        text = text.replace('<script src="js/config.js"></script>\n<script src="js/main.js"></script>', '<script src="js/site-ui.js"></script>\n<script src="js/config.js"></script>\n<script src="js/main.js"></script>')
        text = text.replace('<script src="../js/config.js"></script>\n<script src="../js/main.js"></script>', '<script src="../js/site-ui.js"></script>\n<script src="../js/config.js"></script>\n<script src="../js/main.js"></script>')
    path.write_text(text, encoding='utf-8')
    print(f'Updated {path.relative_to(root)} header={header_count} footer={footer_count}')
css_path = root.joinpath('css', 'style.css')
css_text = css_path.read_text(encoding='utf-8')
if '.brand-logo{height:44px;width:auto;display:block}' not in css_text:
    css_text = css_text.replace('.brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700}', '.brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700}.brand-logo{height:44px;width:auto;display:block}')
    css_path.write_text(css_text, encoding='utf-8')
    print('Updated css/style.css with .brand-logo rule')
