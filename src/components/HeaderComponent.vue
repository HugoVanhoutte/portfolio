<script setup lang="ts">
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ hash: '#home' }">{{ $t('header.home') }}</router-link>
      </li>
      <li>
        <router-link :to="{ hash: '#about' }">{{ $t('header.about') }}</router-link>
      </li>
      <li>
        <router-link :to="{ hash: '#skills' }">{{ $t('header.skills') }}</router-link>
      </li>
      <li>
        <router-link :to="{ hash: '#experience' }">{{ $t('header.experience') }}</router-link>
      </li>
      <li>
        <router-link :to="{ hash: '#project' }">{{ $t('header.projects') }}</router-link>
      </li>
      <li>
        <router-link :to="{ hash: '#contact' }">{{ $t('header.contact') }}</router-link>
      </li>
    </ul>
  </nav>
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
