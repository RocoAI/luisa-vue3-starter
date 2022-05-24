<script setup lang="ts">
import { NotionRenderer, getPageBlocks } from "vue3-notion"
import { ref, onMounted } from "vue"

const data = ref()

onMounted(async () => {
  data.value = await getPageBlocks("4b2dc28a5df74034a943f8c8e639066a")
})

</script>

<template>
  <NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>

<style>
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";
</style>