<script lang="ts">
  import FormGroup from '../lib/FormGroup.svelte';
  import Input from '../lib/Input.svelte';

  export let username = '';
  export let email = '';
  export let password = '';
</script>

<div style="max-width: 400px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
  <h2>新規登録</h2>
  <FormGroup label="ユーザー名" helpText="半角英数字で入力してください" forId="reg-username">
    <Input type="text" id="reg-username" bind:value={username} />
  </FormGroup>

  <FormGroup
    label="メールアドレス"
    helpText="有効なメールアドレスを入力してください"
    forId="reg-email"
  >
    <Input type="email" id="reg-email" bind:value={email} />
  </FormGroup>

  <FormGroup label="パスワード" helpText="8文字以上の半角英数字" forId="reg-password">
    <Input type="password" id="reg-password" bind:value={password} />
  </FormGroup>

  <p>入力値:</p>
  <ul>
    <li>ユーザー名: {username}</li>
    <li>メールアドレス: {email}</li>
    <li>パスワード: {password}</li>
  </ul>
</div>
