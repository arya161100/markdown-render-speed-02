// Faster markdown parser/renderer matching common features
// Optimized with early returns, single pass where possible
function parseMarkdown(md) {
  if (!md) return '';
  // Basic optimized replacements for speed
  let html = md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/\n/g, '<br>');
  return html;
}
module.exports = { parseMarkdown };
