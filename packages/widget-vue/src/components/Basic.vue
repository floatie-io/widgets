<script setup lang="ts">
import '@floatie/widget-core/dist/themes/basic.css'

import { Icon } from '@iconify/vue'
import { computed, reactive, ref } from 'vue'

import { WidgetType, type BasicWidgetConfig, type BasicWidgetData } from '@floatie/widget-core'
import { DataStatus, send } from '@floatie/widget-core'

const props = defineProps<{ config?: BasicWidgetConfig; clientKey: string }>()

const defaultConfig: BasicWidgetConfig = {
  offsetBottom: 30,
  offsetRight: 20,
  size: 'medium',
  placeholder: 'Enter a message...',
  sendButtonLabel: 'Send',
  title: 'Send Feedback',
  confirmationMessage: 'Thank you for your feedback!',
}

const config = computed(() => {
  return { ...defaultConfig, ...props.config }
})

const sizeVars = computed(() => {
  if (config.value.size === 'medium') {
    return {
      '--fl-trigger-icon-font-size': '1.8rem',
      '--fl-trigger-icon-font-size-md': '1.8rem',
      '--fl-wrapper-container-y-offset': '4rem',
      '--fl-wrapper-container-x-offset': '0rem',
    }
  }

  return {
    '--fl-trigger-icon-font-size': '2rem',
    '--fl-trigger-icon-font-size-md': '3rem',
    '--fl-wrapper-container-y-offset': '3.5rem',
    '--fl-wrapper-container-x-offset': '3.5rem',
  }
})
const themeVars = computed(() => {
  return {
    '--fl-margin-bottom': `${config.value.offsetBottom}px`,
    '--fl-margin-right': `${config.value.offsetRight}px`,
    ...sizeVars.value,
  }
})

const isEnteringMessage = ref(false)
const widgetData = reactive<BasicWidgetData>({
  message: '',
  type: 'BUG',
})

const isOpen = ref(false)
const sendStatus = ref(DataStatus.DEFAULT)

const reset = (e: MouseEvent) => {
  isOpen.value = false

  setTimeout(() => {
    isEnteringMessage.value = false
    widgetData.message = ''
    sendStatus.value = DataStatus.DEFAULT
  }, 500)
}

const messageTypes = ref([
  {
    type: 'BUG',
    icon: 'mingcute:alert-line',
    color: 'fl-text-red-500',
    label: 'Issue',
    placeholder: "I'm having issue with...",
  },
  {
    type: 'FEATURE',
    icon: 'mingcute:light-line',
    color: 'fl-text-yellow-500',
    label: 'Idea',
    placeholder: 'I have an idea...',
  },
  {
    type: 'COMMENT',
    icon: 'mingcute:comment-line',
    color: 'fl-text-gray-600',
    label: 'Other',
    placeholder: 'I want to say...',
  },
])

const setActiveMessageType = async (type: BasicWidgetData['type']) => {
  if (sendStatus.value === DataStatus.PENDING) return

  isEnteringMessage.value = true
  widgetData.type = type
}

const sendFeedback = async () => {
  sendStatus.value = DataStatus.PENDING

  await send<BasicWidgetData>(props.clientKey, WidgetType.Basic, widgetData, props.config)

  sendStatus.value = DataStatus.SUCCESS
}
</script>

<template>
  <div class="fl-container style-basic" :style="themeVars">
    <div class="fl-trigger" @click="isOpen = true">
      <Icon icon="ion:help" class="fl-trigger-icon" />
    </div>
    <div v-if="isOpen" class="fl-feedback-container-wrapper">
      <div class="fl-feedback-container">
        <div class="fl-feedback-container-header" v-if="sendStatus !== DataStatus.SUCCESS">
          <span>{{ config.title }}</span>
          <div class="fl-feedback-container-header-close" @click="reset">
            <Icon icon="uil:times" class="fl-close-icon" />
          </div>
        </div>

        <div class="fl-feedback-container-content" v-if="sendStatus !== DataStatus.SUCCESS">
          <div
            v-for="messageType in messageTypes"
            class="fl-feedback-container-content-message-type"
            :class="{
              'is-active': widgetData.type === messageType.type && isEnteringMessage,
              'is-not-enteringMessage': !isEnteringMessage,
              'is-enteringMessage': isEnteringMessage,
              'is-explicit-inactive': isEnteringMessage && widgetData.type !== messageType.type,
            }"
            @click="setActiveMessageType(messageType.type as BasicWidgetData['type'])"
          >
            <Icon
              :icon="messageType.icon"
              :class="[
                messageType.color,
                isEnteringMessage
                  ? 'fl-feedback-container-content-message-type-icon'
                  : 'fl-feedback-container-content-message-type-icon-large',
              ]"
            />
            <span class="fl-feedback-container-content-message-type-label">{{ messageType.label }}</span>
          </div>
        </div>
        <div v-else class="fl-feedback-container-confirmation">
          <span>Thank you for your feedback!</span>
        </div>
        <form
          class="fl-feedback-container-form"
          v-show="isEnteringMessage && sendStatus !== DataStatus.SUCCESS"
        >
          <textarea
            v-model="widgetData.message"
            ref="messageInput"
            :placeholder="config.placeholder"
            rows="3"
            :disabled="[DataStatus.PENDING, DataStatus.SUCCESS].includes(sendStatus)"
          ></textarea>
          <button
            class="fl-submit-button"
            type="button"
            @click="sendFeedback"
            :disabled="[DataStatus.PENDING, DataStatus.SUCCESS].includes(sendStatus)"
          >
            <Icon icon="svg-spinners:180-ring" class="fl-icon" v-if="sendStatus === DataStatus.PENDING" />
            <span v-else>
              {{ config.sendButtonLabel }}
            </span>
          </button>
        </form>
        <div class="arrow-down"></div>
      </div>
    </div>
  </div>
  <div class="fl-backdrop" :class="{ 'is-open': isOpen, 'is-closed': !isOpen }" @click="isOpen = false"></div>
</template>
