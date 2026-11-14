import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import DesignTokensWrapper from './DesignTokensWrapper.svelte';

const meta = {
  title: 'CommonComponents/DesignTokens',
  component: DesignTokensWrapper
} satisfies Meta<DesignTokensWrapper>;
export default meta;

export const FieldDimensions: StoryObj<typeof meta> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    for (const { name, padding, radius, fontSize } of [
      { name: '既定', padding: '10px', radius: '8px', fontSize: '16px' },
      { name: '上書き', padding: '6px', radius: '4px', fontSize: '14px' }
    ]) {
      await step(`${name}の寸法がInputとSelectに反映されること`, async () => {
        const group = within(canvas.getByRole('group', { name }));
        for (const field of [group.getByRole('textbox'), group.getByRole('combobox')]) {
          const style = getComputedStyle(field);
          await expect(style.paddingTop).toBe(padding);
          await expect(style.paddingLeft).toBe('15px');
          await expect(style.borderTopLeftRadius).toBe(radius);
          await expect(style.fontSize).toBe(fontSize);
        }

        const button = getComputedStyle(group.getByRole('button'));
        await expect(button.paddingTop).toBe('15px');
        await expect(button.paddingLeft).toBe('45px');
        await expect(button.borderTopLeftRadius).toBe('50px');
        await expect(getComputedStyle(group.getByText('ボタン')).fontSize).toBe('18px');
      });
    }
  }
};
