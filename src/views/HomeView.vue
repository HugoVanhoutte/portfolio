<script setup lang="ts">

import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import SkillsComponent from '@/components/SkillsComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// TODO: change directory images (bg-home & profile-picture) to public
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
        <a href="#projects">{{ $t('header.projects') }}</a>
      </li>
      <li>
        <a href="#contact">{{ $t('header.contact') }}</a>
      </li>
    </ul>
  </nav>
  <HomeComponent id="home"/>
  <AboutComponent id="about"/>
  <SkillsComponent id="skills"/>
  <ExperienceComponent id="experience"/>
  <ProjectsComponent id="projects"/>
  <ContactComponent id="contact"/>
  <FooterComponent/>
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
  text-transform: capitalize;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: $body-font;
    color: $pink;
  }
};
</style>
