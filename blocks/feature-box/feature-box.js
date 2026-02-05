export default function decorate(block) {
  const rows = [...block.children];
  const image = rows[0]?.querySelector('img');
  const title = rows[1]?.textContent;
  const description = rows[2]?.textContent;
  const link = rows[3]?.querySelector('a');
  block.innerHTML = `
<div class="feature-box-inner">
${image ? `<div class="feature-box-image">${image.outerHTML}</div>` : ''}
<div class="feature-box-content">
    <h3>${title || ''}</h3>
    <p>${description || ''}</p>
    ${link ? `<a class="btn" href="${link.href}">${link.textContent}</a>` : ''}
</div>
</div>
`;
}
