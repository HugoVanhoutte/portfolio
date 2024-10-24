<script setup lang="ts">
/* eslint-disable max-len */
import { defineProps } from 'vue';

const props = defineProps(['experience']);

// color used to change scss variable to css variable, ready to be used
const color = `var(--${props.experience.color})`.replace('$', '');
</script>

<template>
<article class="experience">
  <div class="dates">
    <p>{{ props.experience.startDate }}</p>
    <p>{{ $t('experiences.to') }}</p>
    <p>{{ props.experience.endDate }}</p>
  </div>
  <div class="circle"></div>
  <div class="time-bar"></div>
  <div class="description">
    <div class="title">
      <i :class="props.experience.icon"></i>
      <h1>{{ props.experience.jobTitle }}</h1>
    </div>
    <h2>
      {{ props.experience.company }}, {{ props.experience.place }}, {{ props.experience.contractType }}
    </h2>
    <p>{{ props.experience.description }}</p>
  </div>
</article>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
  .experience {
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-evenly;
    position: relative;
    .dates {
      display: flex;
      width: 10rem;
      flex-direction: column;
      align-items: end;
      align-self: center;
      font-family: $body-font;
    }
    .circle {
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      background-color: $lighter;
      align-self: center;
      position: relative;
    }
    .description {
      width: 60%;
      background-color: $lighter;
      padding: 1rem;
      margin: 2rem 0;
      border-radius: 1rem;
      .title {
        display: flex;
        flex-direction: row;
        i {
          color: v-bind('color');
          margin-right: 1rem;
        }
        h1 {
          color: v-bind('color');
          text-transform: uppercase;
          font-size: 1rem;
          font-family: $title-font;
        }
      }
      h2 {
        font-family: $body-font;
        font-weight: 350;
      }
      p {
        font-family: $body-font;
        font-weight: 300;
      }
    }
  }
.experience::before {
  content: '';
  width: .25rem;
  height: 100%;
  display: block;
  background-color: $lighter;
  position: absolute;
  right: 100px;
}
</style>
