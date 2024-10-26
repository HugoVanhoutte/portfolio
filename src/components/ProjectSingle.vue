<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps(['project']);
const image = `url('/assets/${props.project.image}')`;
const descriptionRef = ref<HTMLElement | undefined>();
const displayDescription = () => {
  (descriptionRef.value as HTMLElement).style.transform = 'translateY(0)';
};
const hideDescription = () => {
  (descriptionRef.value as HTMLElement).style.transform = 'translateY(85%)';
};

</script>

<template>
  <article
    id="project"
    :style="{ backgroundImage: image }"
    @mouseenter="displayDescription"
    @mouseleave="hideDescription"
    @focusin="console.log('tg')"
    @focusout="console.log('tg')"
  >
      <div class="description" ref="descriptionRef">
        <div class="title">
          <h1>{{ props.project.name }}</h1>
        </div>
          <div class="stack">
            <div class="tech" v-for="tech in props.project.stack" :key="project.name + '-' + tech ">
              {{ tech }}
            </div>
          </div>
        <div class="text">
          <p>{{ props.project.description }}</p>
        </div>
        <div class="button">
          <button>
            voir le projet >
          </button>
        </div>
        </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
  #project {
    width: 45%;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    font-family: $body-font;
    margin: 2rem 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    box-shadow: 2px 2px 4px $dark-transparent;
    .description {
      border-top: 1px $dark-transparent solid;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      transition: .3s ease-in-out;
      transform: translateY(85%);
      background-color: $light;
      .title {
        height: 15%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          text-align: center;
        }
      }
      .stack {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        .tech {
          background-color: $blue;
          border-radius: .5rem;
          color: $light;
          padding: 0.25rem;
        }
      }
      .text {
        flex-grow: 1;
        overflow-y: auto;
        text-align: justify;
        margin: 2rem 1rem;
        padding: 1rem;
        font-weight: 250;
        line-height: 1.5rem;
      }
      .button {
        height: 20%;
        display: flex;
        justify-content: center;
        button {
          background-color: $pink;
          box-shadow: 0 3px 2px 1px $darker-pink;
          font-size: 1rem;
          padding: 0.25rem;
          width: 80%;
          margin-bottom: 1rem;
        }
        button:hover {
          box-shadow: none;
        }
      }
    }
    .description:hover {
      border-radius: 1rem;
      border-top: none;
    }
  }
</style>
