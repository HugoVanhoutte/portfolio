<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

const experienceRef = ref<HTMLElement | null>(null);
const timeBarRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (experienceRef.value && timeBarRef.value) {
    // Get the height of the .experience element
    const experienceHeight = experienceRef.value.offsetHeight;
    // Set the height of the .time-bar dynamically
    timeBarRef.value.style.height = `${experienceHeight}px`;
  }
});

const props = defineProps(['experience']);

// color used to change scss variable to css variable, ready to be used
const color = `var(--${props.experience.color})`.replace('$', '');
</script>

<template>
<article class="experience" ref="experienceRef">
  <div class="dates">
    <p>{{ props.experience.startDate }}</p>
    <p>{{ $t('experiences.to') }}</p>
    <p>{{ props.experience.endDate }}</p>
  </div>
  <div class="time-bar" ref="timeBarRef">
    <div class="circle">
    </div>
  </div>
  <div class="description">
    <div class="title">
      <i :class="props.experience.icon"></i>
      <h1>{{ props.experience.jobTitle }}</h1>
    </div>
    <h2>
      {{ props.experience.company }},
      {{ props.experience.place }},
      {{ props.experience.contractType }}
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
    align-items: stretch;
    .dates {
      display: flex;
      width: 10rem;
      flex-direction: column;
      align-items: end;
      align-self: center;
      font-family: $body-font;
    }
    .time-bar {
      width: .25rem;
      background-color: $lighter;
      align-self: center;
      position: relative;
      display: flex;
      align-items: center;
      .circle {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 9999px;
        background-color: $lighter;
        position: absolute;
        right: calc(50% - .75rem);
        display: flex;
        align-items: center;
      }
    }
    .description {
      width: 70%;
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
</style>
