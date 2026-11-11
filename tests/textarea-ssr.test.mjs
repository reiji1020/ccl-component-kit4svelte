import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'vite';

test('Textarea labels stay associated when rendered on the server', async () => {
  const server = await createServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'custom'
  });

  try {
    const { render } = await server.ssrLoadModule('svelte/server');
    const { default: Multiple } = await server.ssrLoadModule(
      '/src/stories/TextareaMultipleWrapper.svelte'
    );
    const { body } = render(Multiple);
    const implicitLabels = body.match(/<label\b[^>]*>[\s\S]*?<\/label>/g) ?? [];
    assert.match(implicitLabels[0] ?? '', /First note<\/span>[\s\S]*?<textarea\b[^>]*>first<\/textarea>/);
    assert.match(implicitLabels[1] ?? '', /Second note<\/span>[\s\S]*?<textarea\b[^>]*>second<\/textarea>/);
    assert.match(body, /<label\b[^>]*for="explicit-note"[^>]*>Explicit note<\/label>/);
    assert.match(body, /<textarea\b[^>]*id="explicit-note"/);
    assert.doesNotMatch(body, /id="ccl-textarea"/);
  } finally {
    await server.close();
  }
});
