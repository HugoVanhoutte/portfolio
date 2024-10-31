<script setup lang="ts">
/* eslint-disable import/no-unresolved */
</script>

<template>
  <section id="home">
    <main>
      <h2>{{ $t('home.presentation') }}</h2>
      <h1>{{ $t('home.title') }}</h1>
      <p>{{ $t('home.jobResearch') }}</p>
    </main>
    <nav>
      <div class="icon-wrapper green-hover">
        <i class="icon fa-solid fa-code"></i>
        <p>{{ $t('home.frontEnd') }}</p>
      </div>
      <div class="icon-wrapper pink-hover">
        <i class="icon fa-solid fa-server"></i>
        <p>{{ $t('home.backEnd') }}</p>
      </div>
      <div class="icon-wrapper purple-hover">
        <i class="icon fa-solid fa-pen-ruler"></i>
        <p>{{ $t('home.webDesign') }}</p>
      </div>
      <div class="icon-wrapper orange-hover">
        <i class="icon fa-solid fa-mobile"></i>
        <p>{{ $t('home.mobile') }}</p>
      </div>
      <div class="icon-wrapper blue-hover">
        <i class="icon fa-solid fa-earth-americas"></i>
        <p>{{ $t('home.english') }}</p>
      </div>
    </nav>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#home {
  height: 100dvh;
  background-image: url('../assets/bg-home.jpg');
  background-size: cover;
  box-shadow: inset 0 0 0 1000px #00000055;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $light;
  main {
    width: 75%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 2rem;
      font-family: $title-font;
      font-weight: 350;
      font-style: italic;
    }
    h1 {
      font-size: 3rem;
      font-family: $title-font;
      margin: 1rem 0;
    }
    p {
      font-size: 1.25rem;
      font-family: $body-font;
      font-weight: 300;
    }
  }
  nav {
    width: 75%;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .icon-wrapper {
      height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      transition: color .4s ease;
      .icon {
        font-size: 3rem;
      }
      p {
        font-family: $body-font;
      }
    }
  }
}

@media screen and (max-width: 769px) {
  #home {
    main {
      width: 95%;
      h1, h2 {
        text-align: center;
      }
      p {
        text-align: justify;
      }
    }
    nav {
      width: 95%;
      flex-wrap: wrap;
    }
  }
}
</style>
