<script setup lang="ts">
import type { RatingWidgetConfig } from '@floatie/widget-core'

const props = defineProps<{ config?: RatingWidgetConfig; clientKey: string }>()
</script>

<template>
  <div>Rating widget</div>
</template>
