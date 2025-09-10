import type { Meta, StoryObj } from '@storybook/svelte';
import FormGroup from '../lib/FormGroup.svelte';
import Input from '../lib/Input.svelte';
import Checkbox from '../lib/Checkbox.svelte';
import RegistrationFormWrapper from './RegistrationFormWrapper.svelte';
import TermsOfServiceFormWrapper from './TermsOfServiceFormWrapper.svelte';
import { expect, fn, userEvent, within } from '@storybook/test';

const meta = {
  title: 'Form/FormGroup',
  component: FormGroup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helpText: { control: 'text' },
    errorMessage: { control: 'text' },
    forId: { control: 'text' },
    // Inputコンポーネントの値を制御するためのargType
    value: { control: 'text' },
    // Checkboxコンポーネントのチェック状態を制御するためのargType
    checked: { control: 'boolean' }
  }
} satisfies Meta<FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'ユーザー名',
    helpText: '半角英数字で入力してください',
    forId: 'username-input',
    value: '' // 初期値を設定
  },
  render: (args) => ({
    Component: FormGroup,
    props: args,
    template: `<FormGroup label="${args.label}" helpText="${args.helpText}" errorMessage="${args.errorMessage}" forId="${args.forId}">
						<Input type="text" id="${args.forId}" bind:value={${JSON.stringify(args.value)}} />
					</FormGroup>`
  })
};

export const RegistrationFormExample: Story = {
  render: () => ({
    Component: RegistrationFormWrapper,
    props: {}
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const usernameInput = canvas.getByLabelText('ユーザー名');
    const emailInput = canvas.getByLabelText('メールアドレス');
    const passwordInput = canvas.getByLabelText('パスワード');

    await step('フォームの入力テスト', async () => {
      await userEvent.type(usernameInput, 'uniqueUser123');
      await userEvent.type(emailInput, 'unique.email@example.com');
      await userEvent.type(passwordInput, 'StrongP@ssw0rd!');

      await expect(usernameInput).toHaveValue('uniqueUser123');
      await expect(emailInput).toHaveValue('unique.email@example.com');
      await expect(passwordInput).toHaveValue('StrongP@ssw0rd!');
    });
  }
};

export const TermsOfServiceFormExample: Story = {
  render: () => ({
    Component: TermsOfServiceFormWrapper,
    props: {}
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole('checkbox', { hidden: true, name: '利用規約に同意する' });
    const button = await canvas.findByRole('button', { name: '登録する' });

    await step('初期状態でボタンが非活性であること', async () => {
      await expect(button).toBeDisabled();
    });

    await step('チェックボックスをクリックするとボタンが活性化すること', async () => {
      await userEvent.click(checkbox);
      await expect(checkbox).toBeChecked();
      await expect(button).toBeEnabled();
    });

    await step('再度チェックボックスをクリックするとボタンが非活性に戻ること', async () => {
      await userEvent.click(checkbox);
      await expect(checkbox).not.toBeChecked();
      await expect(button).toBeDisabled();
    });
  }
};
