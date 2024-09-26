<script setup lang="ts">
import Basic from '../components/Basic.vue'
import Rating from '../components/Rating.vue'
</script>

<template>
  <div>
    Vue Widget playground
    <Basic
      :config="{
        title: 'Care for some feedback?',
        sendButtonLabel: 'Send message',
        placeholder: 'custom enter placeholder',
        confirmationMessage: 'Custom confirm',
        floatieInstance: 'http://localhost:3000',
      }"
      clientKey="s9kVs9HjcEqpA-9_ac3zk"
    />
  </div>
</template>
