<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['contactInfo']);
const color = `var(--${props.contactInfo.color})`.replace('$', '');
const brighterColor = color.replace('--', '--brighter-');
const darkerColor = color.replace('--', '--darker-');
</script>

<template>
  <a :href="props.contactInfo.link" target="_blank" id="contact-info">
    <div class="icon">
      <i :class="props.contactInfo.icon" />
    </div>
    <div class="title">
      <h3>{{ props.contactInfo.text }}</h3>
    </div>
  </a>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
  #contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 150px;
    background-color: v-bind('brighterColor');
    text-decoration: none;
    border-radius: 1rem;
    margin: 1rem;
    .icon {
      i {
        font-size: 3rem;
        color: v-bind('darkerColor');
      }
      padding: 1rem;
    }
    .title {
      h3 {
        font-family: $body-font;
        color: v-bind('darkerColor');
      }
    }
  }
#contact-info:hover {
  transform: scale(110%);
}

@media screen and (max-width: 769px) {
  #contact-info {
    width: 80%
  }
}
</style>
