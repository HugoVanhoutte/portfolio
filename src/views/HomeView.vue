<script setup lang="ts">

import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import SkillsComponent from '@/components/SkillsComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="#home">{{ $t('header.home') }}</a>
      </li>
      <li>
        <a href="#about">{{ $t('header.about') }}</a>
      </li>
      <li>
        <a href="#skills">{{ $t('header.skills') }}</a>
      </li>
      <li>
        <a href="#experience">{{ $t('header.experience') }}</a>
      </li>
      <li>
        <a href="#project">{{ $t('header.projects') }}</a>
      </li>
      <li>
        <router-link :to="{ hash: '#contact' }">{{ $t('header.contact') }}</router-link>
      </li>
    </ul>
  </nav>
  <HomeComponent id="home"/>
  <AboutComponent id="about"/>
  <SkillsComponent id="skills"/>
  <ExperienceComponent id="experience"/>
  <ProjectsComponent id="projects"/>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
nav {
  width: 100%;
  height: 2rem;
  background-color: $dark-transparent;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  z-index: 9999;
  ul {
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: $body-font;
    color: $pink;
  }
};
</style>
