import type { Meta, StoryObj } from '@storybook/svelte';
import { userEvent, within, expect } from '@storybook/test';
import Accordion from '../lib/Accordion.svelte';
import AccordionItem from '../lib/AccordionItem.svelte';

// Import story wrappers
import DefaultWrapper from './accordion/Default.svelte';
import MultipleWrapper from './accordion/Multiple.svelte';
import InitiallyOpenWrapper from './accordion/InitiallyOpen.svelte';
import CustomColorsWrapper from './accordion/CustomColors.svelte';
import RepeatedLabelsWrapper from './accordion/RepeatedLabels.svelte';

const meta = {
  title: 'CommonComponents/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
  tags: ['autodocs']
} satisfies Meta<Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RepeatedLabels: Story = {
  render: () => ({ Component: RepeatedLabelsWrapper }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const [first, second] = await canvas.findAllByRole('button', { name: '詳細' });

    await step('同じ見出しでも各パネルが対応するボタンを参照すること', async () => {
      await userEvent.click(second);
      const [firstPanel, secondPanel] = await canvas.findAllByRole('region', { name: '詳細' });
      await expect(firstPanel).toHaveTextContent('最初のパネル');
      await expect(secondPanel).toHaveTextContent('2番目のパネル');
      await expect(first.id).not.toBe(second.id);
      await expect(firstPanel.id).not.toBe(secondPanel.id);
      await expect(firstPanel).toHaveAttribute('aria-labelledby', first.id);
      await expect(secondPanel).toHaveAttribute('aria-labelledby', second.id);
      await expect(first).toHaveAttribute('aria-controls', firstPanel.id);
      await expect(second).toHaveAttribute('aria-controls', secondPanel.id);
    });

    await step('片方を閉じてももう片方のパネルが開いたままであること', async () => {
      await userEvent.click(second);
      await expect(second).toHaveAttribute('aria-expanded', 'false');
      await expect(second).not.toHaveAttribute('aria-controls');
      await expect(canvas.getByRole('region', { name: '詳細' })).toHaveTextContent('最初のパネル');
    });
  }
};

export const Default: Story = {
  render: () => ({ Component: DefaultWrapper }),
  parameters: {
    docs: {
      source: {
        code: `
<script>
    import { Accordion, AccordionItem } from 'cclkit4svelte';
</script>

<Accordion>
    <AccordionItem label="質問1：これは何ですか？">
        <p>これはアコーディオンコンポーネントです。</p>
    </AccordionItem>
    <AccordionItem label="質問2：どうやって使いますか？">
        <p>AccordionItemコンポーネントをAccordionコンポーネントの中に入れて使います。</p>
    </AccordionItem>
</Accordion>
`
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const q1Button = canvas.getByRole('button', { name: '質問1：これは何ですか？' });
    const q2Button = canvas.getByRole('button', { name: '質問2：どうやって使いますか？' });
    const q1Answer = 'これはアコーディオンコンポーネントです。';

    await step('項目1をクリックすると開くこと', async () => {
      await userEvent.click(q1Button);
      await expect(canvas.getByText(q1Answer)).toBeInTheDocument();
    });

    await step('項目2をクリックすると項目1が閉じ、項目2が開くこと', async () => {
      await userEvent.click(q2Button);
      await expect(canvas.queryByText(q1Answer)).not.toBeInTheDocument();
    });
  }
};

export const Multiple: Story = {
  render: () => ({ Component: MultipleWrapper }),
  parameters: {
    docs: {
      source: {
        code: `
<script>
    import { Accordion, AccordionItem } from 'cclkit4svelte';
</script>

<Accordion multiple={true}>
    <AccordionItem label="質問1：これは何ですか？">
        <p>これはアコーディオンコンポーネントです。</p>
    </AccordionItem>
    <AccordionItem label="質問2：どうやって使いますか？">
        <p>AccordionItemコンポーネントをAccordionコンポーネントの中に入れて使います。</p>
    </AccordionItem>
</Accordion>
`
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const q1Button = canvas.getByRole('button', { name: '質問1：これは何ですか？' });
    const q2Button = canvas.getByRole('button', { name: '質問2：どうやって使いますか？' });

    await step('質問1をクリックすると開くこと', async () => {
      await userEvent.click(q1Button);
      await expect(
        canvas.getByText('これはアコーディオンコンポーネントです。')
      ).toBeInTheDocument();
    });

    await step('質問2をクリックすると、質問1も開いたままであること', async () => {
      await userEvent.click(q2Button);
      await expect(
        canvas.getByText('これはアコーディオンコンポーネントです。')
      ).toBeInTheDocument();
      await expect(
        canvas.getByText(
          'AccordionItemコンポーネントをAccordionコンポーネントの中に入れて使います。'
        )
      ).toBeInTheDocument();
    });
  }
};

export const InitiallyOpen: Story = {
  render: () => ({ Component: InitiallyOpenWrapper }),
  parameters: {
    docs: {
      source: {
        code: `
<script>
    import { Accordion, AccordionItem } from 'cclkit4svelte';
</script>

<Accordion>
    <AccordionItem label="最初からオープン" isOpen={true}>
        <p>この項目は最初から開いています。</p>
    </AccordionItem>
    <AccordionItem label="こちらはクローズ">
        <p>この項目は閉じています。</p>
    </AccordionItem>
</Accordion>
`
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('指定された項目が最初から開いていること', async () => {
      await expect(canvas.getByText('この項目は最初から開いています。')).toBeInTheDocument();
    });
  }
};

export const CustomColors: Story = {
  render: () => ({ Component: CustomColorsWrapper }),
  parameters: {
    docs: {
      source: {
        code: `
<script>
    import { Accordion, AccordionItem } from 'cclkit4svelte';
    import { CCLPastelColor } from 'cclkit4svelte';
</script>

<Accordion>
    <AccordionItem
        label="カスタムカラー"
        headerColor={CCLPastelColor.SUGAR_BLUE}
        contentColor={CCLPastelColor.CLOUD_GREY}
    >
        <p>この項目はヘッダーとコンテンツの背景色が指定されています。</p>
    </AccordionItem>
</Accordion>
`
      }
    }
  }
};
