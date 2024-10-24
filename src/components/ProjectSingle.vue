<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['project']);
</script>

<template>
  <article id="project">
    <div class="image"/>
    <div class="description">
      <h1>{{ props.project.name }}</h1>
      <div class="stack">
        <div class="tech" v-for="tech in props.project.stack" :key="project.name + '-' + tech ">
          {{ tech }}
        </div>
      </div>
      <p>{{ props.project.description }}</p>
      <button>
        voir le projet >
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
  #project {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    .image {
      background-image: v-bind('props.project.image');
      width: 100%;
      height: 100%;
    }
    .description {
      display: flex;
      flex-direction: column;
      .stack {
        display: flex;
        flex-direction: row;

        .tech {
          background-color: $blue;
          border-radius: .5rem;
          color: $light;
          padding: 0.25rem;
        }
      }
      button {
        background-color: $pink;
        box-shadow: 0 3px 2px 1px $darker-pink;
        font-size: 1rem;
        padding: 0.25rem;
      }
      button:hover {
        box-shadow: none;
      }
    }
  }
</style>
