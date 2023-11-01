<script lang="ts" setup>
import { FloatieBasic as Basic } from '@floatie/widget-vue'
import type { BasicWidgetConfig } from '@floatie/widget-core'
import { useRuntimeConfig } from '#imports'

const props = defineProps<{ config?: BasicWidgetConfig }>()

const {
  public: { floatie },
} = useRuntimeConfig()
</script>

<template>
  <Basic
    :config="props.config"
    :client-key="floatie.clientKey"
  />
</template>
