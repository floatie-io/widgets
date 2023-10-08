<script setup lang="ts">
import Widget from '../components/Widget.vue'

</script>

<template>
  <div>
    Vue Widget playground
    <Widget
      :config="{
        title: 'Care for some feedback?',
        sendButtonLabel: 'Send message',
        placeholder: 'custom enter placeholder',
        confirmationMessage: 'Custom confirm',
      }"
      clientKey="v1W8f1-A0mqHMydo6-F7Y"
    />
  </div>
</template>
