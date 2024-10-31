<script setup lang="ts">
import ContactSingle from '@/components/ContactSingle.vue';
import { contactInfo } from '../../config';

const contactList: contactInfo[] = [
  {
    icon: 'fa-solid fa-phone',
    text: '+33 6 21 32 24 25',
    color: '$purple',
    link: 'tel: +33621322425',
  },
  {
    icon: 'fa-solid fa-envelope',
    text: 'hugo.vanhoutte.pro@gmail.com',
    color: '$green',
    link: 'mailto: hugo.vanhoutte.pro',
  },
  {
    icon: 'fa-brands fa-linkedin',
    text: 'LinkedIn',
    color: '$blue',
    link: 'https://www.linkedin.com/in/hugo-vanhoutte-608417258/',
  },
  {
    icon: 'fa-brands fa-github',
    text: 'GitHub',
    color: '$pink',
    link: 'https://github.com/HugoVanhoutte',
  },
];
</script>

<template>
  <section id="contact">
    <h1 class="section-title">{{ $t('header.contact') }}</h1>
    <p>{{ $t('contact.contactMe') }}</p>
    <p>{{ $t('contact.text') }}</p>
    <p>{{ $t('contact.jobSearchList') }}</p>
    <div class="contact-list">
      <ContactSingle
        v-for="contactInfo in contactList"
        :key="contactInfo.text"
        :contactInfo="contactInfo"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
  #contact {
    padding: 3rem 0;
    text-align: center;
    h1 {
      text-transform: capitalize;
    }
    p {
      font-family: $body-font;
      font-weight: 300;
    }
    .contact-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-top: 2rem;
    }
  }

@media screen and (max-width: 769px) {
  #contact {
    p {
      width: 95%;
    }
  }
}
</style>
