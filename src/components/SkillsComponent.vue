<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import SkillSingle from '@/components/SkillSingle.vue';
import { skill } from '../../config';

const { t } = useI18n();

const skills: skill[] = [
  {
    name: t('skills.frontEnd.name'),
    description: t('skills.frontEnd.description'),
    icon: 'fa-solid fa-code',
    color: '$purple',
    subSkills: [
      { name: 'HTML5', stars: 10 },
      { name: 'CSS3', stars: 10 },
      { name: 'JavaScript(ES6)', stars: 9 },
      { name: 'SCSS', stars: 7 },
      { name: 'Vue.js', stars: 6 },
      { name: 'Bootstrap', stars: 8 },
      { name: 'Tailwind', stars: 6 },
      { name: 'TypeScript', stars: 7 },
    ],
  },
  {
    name: t('skills.backEnd.name'),
    description: t('skills.backEnd.description'),
    icon: 'fa-solid fa-server',
    color: '$blue',
    subSkills: [
      { name: 'PHP 7 & 8', stars: 9 },
      { name: 'Symfony', stars: 7 },
      { name: 'MySQL', stars: 8 },
      { name: 'Node.js', stars: 7 },
      { name: 'Express', stars: 7 },
    ],
  },
  {
    name: t('skills.otherTools.name'),
    description: t('skills.otherTools.description'),
    icon: 'fa-solid fa-screwdriver-wrench',
    color: '$orange',
    subSkills: [
      { name: 'Figma', stars: 8 },
      { name: 'Jira', stars: 6 },
      { name: 'Postman', stars: 9 },
      { name: 'Git& GitHub', stars: 7 },
      { name: 'Docker', stars: 4 },
      { name: 'i18n', stars: 8 },
      { name: t('skills.languages.english'), stars: 9 },
      { name: t('skills.languages.spanish'), stars: 4 },
      { name: t('skills.languages.russian'), stars: 1 },
    ],
  },
];
</script>

<template>
  <section id="skills">
    <h1 class="section-title">{{ $t('header.skills') }}</h1>
    <SkillSingle v-for="(skill, index) in skills" :key="skill.name" :skill="skill" :index="index" />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
  #skills {
    background-color: $lighter;
    h1 {
      text-align: center;
      text-transform: capitalize;
      padding: 3rem;
    }
  }
</style>
