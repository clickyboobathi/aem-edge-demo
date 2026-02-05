export default function decorate(block) {
  const rows = [...block.children];
  const bgImg = rows[0].querySelector('img');
  const title = rows[1]?.textContent;
  const desc = rows[2]?.textContent;
  const link = rows[3]?.querySelector('a');

  block.innerHTML = `
    <section class="cta-banner" style="background-image:url('${bgImg?.src}')">
      <div class="cta-content">
        <h1>${title || ''}</h1>
        <p>${desc || ''}</p>
        ${link ? `<a class="cta-btn" href="${link.href}">${link.textContent}</a>` : ''}
      </div>
    </section>
  `;
}
