<script setup lang="ts">
import Basic from '../components/Basic.vue'
</script>

<template>
  <div>
    Vue Widget playground
    <Basic
      :config="{
        clientKey: 's9kVs9HjcEqpA-9_ac3zk',
        floatieInstance: 'https://floatie.dev:3000',
      }"
      :ui="{
        title: 'Care for some feedback?',
        sendButtonLabel: 'Send message',
        placeholder: 'custom enter placeholder',
        confirmationMessage: 'Custom confirm',
      }"
    />
  </div>
</template>
