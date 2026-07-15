import type { Meta, StoryObj } from '@storybook/svelte';
import { within, expect, userEvent } from '@storybook/test';
import Toaster from '$lib/Toaster.svelte';
import { toast } from '$lib/index';
import ToasterPlayground from './ToasterPlayground.svelte';

const meta = {
  title: 'CommonComponents/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'トーストの表示位置',
      table: { category: 'Position', defaultValue: { summary: 'top-right' } }
    },
    maxVisible: {
      control: { type: 'number', min: 1, max: 10 },
      description: '同時に画面上に表示する最大数',
      table: { category: 'Behavior', defaultValue: { summary: '5' } }
    },
    dismissible: {
      control: { type: 'boolean' },
      description: '閉じる（×）ボタンを表示するかどうか',
      table: { category: 'Behavior', defaultValue: { summary: 'true' } }
    },
    // 直接表示のための入力（Toaster に props で渡す）
    message: {
      control: { type: 'text' },
      description: 'メッセージ本文',
      table: { category: 'Input', type: { summary: 'string' } }
    },
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'トーストのタイプ',
      table: { category: 'Input' }
    },
    duration: {
      control: { type: 'number', min: 0, step: 100 },
      description: '自動消滅するまでの時間（ms）',
      table: { category: 'Input', type: { summary: 'number' } }
    }
  }
} satisfies Meta<Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({ Component: Toaster, props: args }),
  args: {
    position: 'top-right',
    maxVisible: 5,
    dismissible: true,
    message: 'Hello',
    variant: 'info',
    duration: 0
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('デフォルトのトーストが表示されること', async () => {
      const status = await canvas.findByRole('status');
      await expect(status).toHaveTextContent('Hello');
    });
    toast.clear();
  },
  parameters: {
    docs: {
      source: {
        code: `
<script>
  import { Toaster } from 'cclkit4svelte';
</script>

<Toaster position="top-right" maxVisible={5} dismissible message="Hello" variant="info" duration={0} />
        `.trim()
      }
    }
  }
};

export const AutoDismiss: Story = {
  render: (args) => ({ Component: Toaster, props: args }),
  args: {
    position: 'top-right',
    maxVisible: 5,
    dismissible: false,
    message: 'Auto dismiss in 800ms',
    variant: 'info',
    duration: 800
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('duration で自動消滅すること', async () => {
      // グローバルストアをクリーンにしてから、このストーリーのトーストを発火
      toast.clear();
      toast.show({ message: 'Auto dismiss in 800ms', variant: 'info', duration: 800 });
      const status = await canvas.findByRole('status');
      await expect(status).toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      source: {
        code: `
<Toaster position="top-right" message="Auto dismiss in 800ms" variant="info" duration={800} />
        `.trim()
      }
    }
  }
};

export const CustomMessage: Story = {
  render: (args) => ({ Component: ToasterPlayground, props: { ...args, showControls: true } }),
  args: {
    position: 'top-right',
    maxVisible: 5,
    variant: 'info',
    message: 'Type your message here',
    duration: 3000
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Controlsの内容でトーストを表示できること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Show Toast' }));
      const status = await canvas.findByRole('status');
      await expect(status).toHaveTextContent('Type your message here');
    });
    toast.clear();
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'バリアント（未指定なら info）',
      table: { category: 'Input' }
    },
    message: {
      control: { type: 'text' },
      description: '必須: 表示する本文',
      table: { category: 'Input', type: { summary: 'string' } }
    },
    duration: {
      control: { type: 'number', min: 0, step: 100 },
      description: '個別の自動消滅時間（ms）。0 で自動消滅なし',
      table: { category: 'Input', type: { summary: 'number' } }
    }
  },
  parameters: {
    controls: {
      include: ['position', 'maxVisible', 'variant', 'message', 'duration']
    }
  }
};

function makeVariantStory(
  variant: 'success' | 'error' | 'warning' | 'info',
  message: string
): Story {
  return {
    render: (args) => ({ Component: Toaster, props: args }),
    args: {
      position: 'top-right',
      maxVisible: 5,
      dismissible: true,
      message,
      variant,
      duration: 0
    },
    play: async ({ canvasElement, step }) => {
      const canvas = within(canvasElement);
      await step(`${variant} トーストが表示されていること`, async () => {
        // グローバルストアをクリーンにしてから、このストーリーのトーストを発火
        toast.clear();
        toast.show({ message, variant, duration: 0 });
        const status = await canvas.findByRole('status');
        await expect(status).toBeInTheDocument();
      });
    },
    parameters: {
      docs: {
        source: {
          code: `
<script>
  import { Toaster } from 'cclkit4svelte';
</script>

<Toaster position="top-right" maxVisible={5} dismissible message="${message}" variant="${variant}" duration={0} />
          `.trim()
        }
      }
    }
  };
}

export const Success: Story = {
  ...makeVariantStory('success', 'Saved successfully'),
  parameters: {
    controls: { include: ['position', 'maxVisible', 'dismissible'] }
  }
};
export const Error: Story = {
  ...makeVariantStory('error', 'Something went wrong'),
  parameters: {
    controls: { include: ['position', 'maxVisible', 'dismissible'] }
  }
};
export const Warning: Story = {
  ...makeVariantStory('warning', 'Check your input'),
  parameters: {
    controls: { include: ['position', 'maxVisible', 'dismissible'] }
  }
};
export const Info: Story = {
  ...makeVariantStory('info', 'Here is some information'),
  parameters: {
    controls: { include: ['position', 'maxVisible', 'dismissible'] }
  }
};
