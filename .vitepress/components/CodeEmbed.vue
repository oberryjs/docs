<script setup>
  import LiveCodes from 'livecodes/vue';
  const options = {
    "appUrl": "https://v49.livecodes.io/",
    "config": {
      "tools": {
        "enabled": [],
        "status": "none"
      },
      "editor": "codemirror"
    },
    "import": "id/dbeiframmnc"
  };
</script>

<template>
  <LiveCodes v-bind="options" />
</template>
