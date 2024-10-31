<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectSingle from '@/components/ProjectSingle.vue';
import { project } from '../../config';

const { t } = useI18n();

const projects: project[] = [
  {
    name: t('projects.RE7.name'),
    stack: ['Bootstrap', 'PHP', 'MySQL'],
    description: t('projects.RE7.description'),
    image: 'RE7.png',
    link: '#',
  },
  {
    name: 'Graduate',
    stack: ['Vue.js', 'Node.js', 'Express', 'MySQL'],
    description: t('projects.graduate.description'),
    image: 'graduate.png',
    link: '#',
  },
  {
    name: t('projects.ticTacToe.name'),
    stack: ['Vue.js', 'TypeScript'],
    description: t('projects.ticTacToe.description'),
    image: 'tic-tac-toe.png',
    link: '#',
  },
  {
    name: t('projects.memory.name'),
    stack: ['jQuery'],
    description: t('projects.memory.description'),
    image: 'memory.png',
    link: '#',
  },
  {
    name: t('projects.weatherApp.name'),
    stack: ['jQuery', 'REST API'],
    description: t('projects.weatherApp.description'),
    image: 'weatherApp.png',
    link: '#',
  },
  {
    name: t('projects.flagQuiz.name'),
    stack: ['jQuery', 'REST API'],
    description: t('projects.flagQuiz.description'),
    image: 'flagQuiz.png',
    link: '#',
  },
  {
    name: t('projects.shiFuMi.name'),
    stack: ['JavaScript'],
    description: t('projects.shiFuMi.description'),
    image: 'shiFuMi.png',
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
  padding: 3rem 0;
  background-color: $lighter;
  display:  flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    text-transform: capitalize;
  }
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
  }
}
@media screen and (max-width: 769px) {
  #projects {
    .projects-list {
      width: 100%;
    }
  }
}
</style>
