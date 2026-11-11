import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'vite';

test('Toaster does not share notifications between server renders', async () => {
  const server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom'
  });

  try {
    const { render } = await server.ssrLoadModule('svelte/server');
    const { default: Toaster } = await server.ssrLoadModule('/src/lib/Toaster.svelte');
    const { toast, toasts } = await server.ssrLoadModule('/src/lib/toast.ts');
    const { get } = await server.ssrLoadModule('svelte/store');

    const first = render(Toaster, { props: { message: 'First request', duration: 0 } }).body;
    assert.doesNotMatch(first, /First request/);
    assert.deepEqual(get(toasts), []);

    toast.show({ message: 'Server API notification', duration: 0 });
    assert.deepEqual(get(toasts), []);

    // The legacy writable export can still be set directly.
    toasts.set([
      { id: 'seed', message: 'Seeded notification', variant: 'info', duration: 0 }
    ]);
    const next = render(Toaster, { props: { message: '', duration: 0 } }).body;
    assert.doesNotMatch(next, /First request|Server API notification|Seeded notification/);
  } finally {
    await server.close();
  }
});
