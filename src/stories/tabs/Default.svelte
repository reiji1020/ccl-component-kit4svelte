<script lang="ts">
  import Tabs from '../../lib/Tabs.svelte';
  import TabPanel from '../../lib/TabPanel.svelte';
  import { CCLVividColor } from '../../lib/const/config';
</script>

<Tabs>
  <TabPanel label="はじめに" color={CCLVividColor.STRAWBERRY_PINK}>
    <div style="height: 150px;">
      <h2>はじめに</h2>
      <p>ここにはじめにのコンテンツが入ります。</p>
    </div>
  </TabPanel>
  <TabPanel label="使い方" color={CCLVividColor.PINEAPPLE_YELLOW}>
    <div style="height: 150px;">
      <h2>使い方</h2>
      <p>ここに使い方のコンテンツが入ります。</p>
    </div>
  </TabPanel>
  <TabPanel label="設定" color={CCLVividColor.SODA_BLUE}>
    <div style="height: 150px;">
      <h2>設定</h2>
      <p>ここに設定のコンテンツが入ります。</p>
    </div>
  </TabPanel>
</Tabs>
