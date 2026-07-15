import type { Meta, StoryObj } from '@storybook/svelte';
import Input from '../lib/Input.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, userEvent, within } from '@storybook/test';
import AllColorsWrapper from './AllColors/AllColorsWrapper.svelte';

const meta = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number']
    },
    borderColor: {
      control: { type: 'select' },
      options: Object.values(CCLVividColor)
    }
  }
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (initialArgs: Story['args'], play?: Story['play']): Story => ({
  args: initialArgs,
  play
});

export const Default = createStory(
  {
    id: 'default-input',
    label: 'お名前',
    placeholder: '山田 太郎',
    borderColor: CCLVividColor.STRAWBERRY_PINK
  },
  async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('お名前');

    await step('ユーザーが入力フィールドにテキストを入力できること', async () => {
      await userEvent.type(input, 'テスト入力');
    });

    await step('入力フィールドの値が正しく更新されること', async () => {
      await expect(input).toHaveValue('テスト入力');
    });
  }
);

export const Password = createStory({
  id: 'password-input',
  label: 'パスワード',
  type: 'password',
  placeholder: 'パスワードを入力',
  borderColor: CCLVividColor.SODA_BLUE
});

export const Disabled = createStory(
  {
    id: 'disabled-input',
    label: '入力不可',
    placeholder: 'このフィールドは無効です',
    value: '編集できません',
    disabled: true,
    borderColor: CCLVividColor.WRAP_GREY
  },
  async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('入力不可');

    await step('入力フィールドが無効であること', async () => {
      await expect(input).toBeDisabled();
      await expect(input).toHaveValue('編集できません');
    });

    await step('無効な入力フィールドは操作後も値が変わらないこと', async () => {
      await userEvent.type(input, '変更後の値');
      await expect(input).toHaveValue('編集できません');
    });
  }
);

export const NoLabel = createStory(
  {
    id: 'no-label-input',
    placeholder: 'ラベルなしの入力フィールド',
    borderColor: CCLVividColor.PINEAPPLE_YELLOW
  },
  async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await step('ラベルがなくてもplaceholderで入力フィールドを識別できること', async () => {
      await expect(input).toHaveAttribute('placeholder', 'ラベルなしの入力フィールド');
    });

    await step('ラベルがない入力フィールドへ入力できること', async () => {
      await userEvent.type(input, 'ラベルなし入力');
      await expect(input).toHaveValue('ラベルなし入力');
    });
  }
);

export const Invalid = createStory(
  {
    id: 'invalid-input',
    label: 'メールアドレス',
    placeholder: 'メールアドレスを入力',
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    value: 'invalid-email',
    isValid: false,
    validationMessage: '有効なメールアドレスを入力してください。'
  },
  async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('メールアドレス');

    await step('バリデーションメッセージが正しく表示されること', async () => {
      const validationMessage = canvas.getByText(args.validationMessage);
      await expect(validationMessage).toBeInTheDocument();
    });

    await step('入力フィールドにinvalidクラスが付与されていること', async () => {
      await expect(input).toHaveClass('input-field invalid');
    });
  }
);

export const AllColors: Story = {
  render: () => ({ Component: AllColorsWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
};
