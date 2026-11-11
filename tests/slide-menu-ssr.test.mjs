import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'vite';

test('SlideMenu renders on the server whether open or closed', async () => {
  const server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom'
  });

  try {
    const { render } = await server.ssrLoadModule('svelte/server');
    const { default: SlideMenu } = await server.ssrLoadModule('/src/lib/SlideMenu.svelte');
    for (const open of [false, true]) {
      const { body } = render(SlideMenu, { props: { open, title: 'SSR menu' } });
      assert.match(body, /SSR menu/);
      assert.match(body, new RegExp(`role="dialog"[^>]*aria-hidden="${!open}"`));
    }
  } finally {
    await server.close();
  }
});
