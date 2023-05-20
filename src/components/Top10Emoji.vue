<template>
    <div>
        <BarEmoji />
    </div>

    <div>
        <EmojiCloud />
    </div>
</template>
  
<script>
  import BarEmoji from './graph/BarEmoji.vue';
  import EmojiCloud from './graph/EmojiCloud.vue';

  export default {
    name: "Top10Emoji",
    components: {
        BarEmoji,
        EmojiCloud,
    },
  };
</script>