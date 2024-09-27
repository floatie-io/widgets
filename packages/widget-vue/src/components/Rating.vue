<script setup lang="ts">
import { type Config, type RatingWidgetUiConfig } from '@floatie/widget-core'

const props = defineProps<{ config?: Config; ui?: RatingWidgetUiConfig }>()
</script>

<template>
  <div>Rating widget</div>
</template>
