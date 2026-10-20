import { defineConfig } from 'vite';

// Address of the Lennox Group website, e.g. https://www.example.com (no trailing slash).
// Set it here or as the GROUP_URL environment variable in Vercel. While it is empty,
// links to the Group site (marked data-group-link) are left out of the build.
const GROUP_URL = process.env.GROUP_URL ?? '';

function groupLinks() {
  return {
    name: 'group-links',
    transformIndexHtml(html) {
      if (GROUP_URL) {
        return html.replaceAll('%GROUP_URL%', GROUP_URL).replaceAll(' data-group-link', '');
      }
      return html
        .replace(/\s*<li data-group-link>[\s\S]*?<\/li>/g, '')
        .replace(/\s*<div data-group-link>[\s\S]*?<\/div>/g, '');
    },
  };
}

export default defineConfig({
  plugins: [groupLinks()],
});
