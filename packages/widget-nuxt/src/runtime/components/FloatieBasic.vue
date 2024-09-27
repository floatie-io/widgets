<script lang="ts" setup>
import { FloatieBasic as Basic } from '@floatie/widget-vue'
import type { BasicWidgetUiConfig } from '@floatie/widget-core'
import { useRuntimeConfig } from '#imports'

const { ui } = defineProps<{ ui?: BasicWidgetUiConfig }>()

const {
  public: { floatie },
} = useRuntimeConfig()
</script>

<template>
  <Basic :config="floatie" :ui="ui" />
</template>
