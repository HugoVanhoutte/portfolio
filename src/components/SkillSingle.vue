<script setup lang="ts">
/* eslint-disable */
import { defineProps } from 'vue';

const props = defineProps(['skill', 'index']);
let direction: string

// color used to change scss variable to css variable, ready to be used
const color = `var(--${props.skill.color})`.replace('$', '');
// direction used to dynamically set flex-direction in CSS so that they are automatically alternated
Number(props.index) % 2 !== 0 ? direction = 'row-reverse' : direction = 'row'
</script>

<template>
  <section class="skill">
    <article class="text">
      <h1>{{ props.skill.name }}</h1>
      <p class="description">{{ props.skill.description }}</p>
      <div class="sub-skills">
        <div v-for="subSkill in props.skill.subSkills" :key="subSkill.name" class="sub-skill">
          <h2>{{ subSkill.name }}</h2>
          <p>
            <i class="fa-solid fa-star" v-for="star in Math.floor(Number(subSkill.stars) / 2)"/>
            <i class="fa-solid fa-star-half-stroke" v-if="Number(subSkill.stars) % 2 !== 0"/>
            <i class="fa-regular fa-star" v-for="emptyStar in Math.floor((10 - Number(subSkill.stars)) / 2)"/>
          </p>
        </div>
      </div>
    </article>
    <aside>
      <i :class="props.skill.icon"></i>
    </aside>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.skill {
  width: 80%;
  margin: auto;
  font-family: $body-font;
  display: flex;
  flex-direction: v-bind('direction');
  .text {
    width: 70%;
    background-color: $light;
    border-radius: 1rem;
    padding: 2rem;
    margin: 2rem;
    box-shadow: 2px 2px 4px $dark-transparent;
    h1 {
      color: v-bind('color');
      text-transform: capitalize;
      font-family: $title-font;
      font-size: 1.5rem;
      font-weight: 500;
    }
    p {
      line-height: 1.25rem;
      font-weight: 300;
      i {
        color: v-bind('color');
      }
    }
    .description {
      margin: 1rem 0;
    }
    .sub-skills {
      height: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      .sub-skill {
        width: 45%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p {
          overflow: hidden;
          line-break: strict;
        }
      }
    }
  }
  aside {
    width: 25%;
    color: v-bind('color');
    font-size: 10rem;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      transition: .3s
    }
    i:hover {
      transform: scale(120%);
      transition: .3s
    }
  }
}
@media screen and (max-width: 769px) {
  .skill {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    aside {
      display: none;
    }
    .text {
      width: 85%;
      margin: 1rem 0;
    }
  }
}
@media screen and (max-width: 481px) {
  .skill {
    width: 95%;
    .text {
      .sub-skills {
        flex-direction: column;
        flex-wrap: nowrap;
        .sub-skill {
          width: 100%;
        }
      }
    }
  }
}
</style>
