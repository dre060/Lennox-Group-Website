import { renameSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// SITE=labs builds www.lennoxdigitallabs.com: the Labs page becomes the site root
// and the Group page moves to /group/. The default build keeps Group at the root.
const site = process.env.SITE === 'labs' ? 'labs' : 'group';

// Page links are written relative for the default build; the labs build rewrites them.
const labsLinks = {
  'labs/index.html': [
    ['href="../#companies"', 'href="/group/#companies"'],
    ['href="../"', 'href="/group/"'],
    ['href="./"', 'href="/"'],
  ],
  'index.html': [
    ['href="labs/"', 'href="/"'],
    ['href="./"', 'href="/group/"'],
  ],
};

function labsSite() {
  let outDir;
  return {
    name: 'labs-site',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    transformIndexHtml(html, ctx) {
      const rules = labsLinks[ctx.path.replace(/^\//, '')] ?? [];
      return rules.reduce((out, [from, to]) => out.replaceAll(from, to), html);
    },
    closeBundle() {
      mkdirSync(resolve(outDir, 'group'), { recursive: true });
      renameSync(resolve(outDir, 'index.html'), resolve(outDir, 'group/index.html'));
      renameSync(resolve(outDir, 'labs/index.html'), resolve(outDir, 'index.html'));
    },
  };
}

export default defineConfig({
  // The labs build moves pages between folders, so it needs root-absolute asset URLs.
  base: site === 'labs' ? '/' : './',
  plugins: site === 'labs' ? [labsSite()] : [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        labs: resolve(import.meta.dirname, 'labs/index.html'),
      },
    },
  },
});
