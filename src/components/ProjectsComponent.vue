<script setup lang="ts">
import ProjectSingle from '@/components/ProjectSingle.vue';
import { project } from '../../config';

const projects: project[] = [
  {
    name: 'RE7',
    stack: ['Bootstrap', 'PHP', 'MySQL'],
    description: 'TODO',
    image: '../src/assets/RE7.png',
    link: '#',
  },
  {
    name: 'memory game',
    stack: ['jQuery'],
    description: 'TODO',
    image: '@/assets/memory.png',
    link: '#',
  },
  {
    name: 'application météo',
    stack: ['jQuery', 'REST API'],
    description: 'TODO',
    image: '@/assets/weather.png',
    link: '#',
  },
  {
    name: 'quiz drapeaux',
    stack: ['jQuery', 'REST API'],
    description: 'TODO',
    image: '@/assets/flags.png',
    link: '#',
  },
  {
    name: 'Shi-Fu-mi',
    stack: ['JavaScript'],
    description: 'TODO',
    image: '@/assets/shi-fu-mi.png',
    link: '#',
  },
];
</script>

<template>
<section id="projects">
  <h1 class="section-title">{{ $t('projects.title') }}</h1>
  <main class="projects-list">
    <ProjectSingle v-for="project in projects" :key="project.name" :project="project"/>
  </main>
</section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#projects {
  background-color: $lighter;
  h1 {
    text-align: center;
    text-transform: capitalize;
  }
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
}
</style>
