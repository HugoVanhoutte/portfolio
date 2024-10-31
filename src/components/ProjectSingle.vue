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
        <div class="buttons">
          <button>
            Github >
          </button>
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
          font-size: 1.5rem;
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
          margin: 1rem 0;
        }
      }
      .text {
        height: 45%;
        overflow-y: auto;
        text-align: justify;
        padding: 1rem;
        font-weight: 250;
        line-height: 1.5rem;
      }
      .buttons {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        button {
          background-color: $pink;
          box-shadow: 0 3px 2px 1px $darker-pink;
          font-size: 1rem;
          padding: 0.25rem;
          width: 45%;
          height: 90%;
          margin-bottom: 1rem;
        }
        button:nth-child(1) {
          background-color: $blue;
          box-shadow: 0 3px 2px 1px $darker-blue;
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
@media screen and (max-width: 769px) {
  #project {
    width: 95%;
    height: 400px;
    .description {
      .stack {
        flex-wrap: wrap;
      }
      .buttons {
        flex-direction: column;
        align-items: center;
        height: 30%;
        margin-bottom: .5rem;
        button {
          margin: .25rem;
          width: 95%;
        }
      }
    }
  }
}
</style>
