<script setup lang="ts">

import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import SkillsComponent from '@/components/SkillsComponent.vue';
import ExperienceComponent from '@/components/ExperienceComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// TODO: change directory images (bg-home & profile-picture) to public

const toggleMenu = () => {
  const navBar: HTMLElement = document.querySelector('nav') as HTMLElement;
  const button: HTMLElement = document.querySelector('i') as HTMLElement;
  const header: HTMLElement = document.querySelector('header') as HTMLElement;
  navBar.classList.toggle('show');
  button.classList.toggle('fa-bars');
  button.classList.toggle('fa-xmark');
  header.classList.toggle('show');
};
</script>

<template>
  <header>
    <i class="fa-solid fa-bars menu" @click="toggleMenu()" @keydown.space="toggleMenu"/>
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
  </header>
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

header {
  width: 100%;
  height: 2rem;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: end;
  align-items: center;
  color: $pink;
  font-family: $body-font;
  flex-direction: row-reverse;
  background-color: $dark-transparent;
  transition: .5s;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    text-transform: capitalize;
    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
  i.menu {
    display: none;
    font-size: 2.3rem;
    margin-right: 2rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
}
@media screen and (max-width: 769px) {
  header {
    height: 2.5rem;
    flex-direction: column;
    align-items: flex-end;
    nav {
      display: none;
      ul {
        height: 100%;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        li {
          margin: 1rem;
        }
      }
    }
    nav.show {
      display: flex;
    }
    i.menu {
      display: flex;
      z-index: 9999;
    }
    i.menu.show {
      display: none;
    }
  }
  header.show {
    height: 40dvh;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
