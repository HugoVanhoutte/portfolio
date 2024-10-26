<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ExperienceSingle from '@/components/ExperienceSingle.vue';
import { experience } from '../../config';

const { t } = useI18n();

const experiences: experience[] = [
  {
    icon: 'fa-solid fa-graduation-cap',
    jobTitle: t('experiences.Adapeco.jobTitle'),
    contractType: t('experiences.contractTypes.training'),
    place: 'Roubaix',
    company: 'ADAPECO',
    description: t('experiences.Adapeco.description'),
    startDate: t('experiences.Adapeco.startDate'),
    endDate: t('experiences.Adapeco.endDate'),
    color: '$orange',
  },
  {
    icon: 'fa-solid fa-briefcase',
    jobTitle: t('experiences.Bonduelle.jobTitle'),
    contractType: t('experiences.contractTypes.fixedTerm'),
    place: 'Villeneuve d\'Ascq (59)',
    company: 'Bonduelle Europe Long Life',
    description: t('experiences.Bonduelle.description'),
    startDate: t('experiences.Bonduelle.startDate'),
    endDate: t('experiences.Bonduelle.endDate'),
    color: '$blue',
  },
  {
    icon: 'fa-solid fa-code',
    jobTitle: t('experiences.Upytek.jobTitle'),
    contractType: t('experiences.contractTypes.internship'),
    place: t('experiences.places.remote'),
    company: 'Upytek',
    description: t('experiences.Upytek.description'),
    startDate: t('experiences.Upytek.startDate'),
    endDate: t('experiences.Upytek.endDate'),
    color: '$purple',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    jobTitle: t('experiences.UpTo.jobTitle'),
    contractType: t('experiences.contractTypes.training'),
    place: 'Fourmies',
    company: 'UpTo',
    description: t('experiences.UpTo.description'),
    startDate: t('experiences.UpTo.startDate'),
    endDate: t('experiences.UpTo.endDate'),
    color: '$pink',
  },
  {
    icon: 'fa-solid fa-earth-europe',
    jobTitle: t('experiences.Dublin.jobTitle'),
    contractType: t('experiences.Dublin.jobTitle'),
    place: 'Tallaght',
    company: 'TU Dublin',
    description: t('experiences.Dublin.description'),
    startDate: t('experiences.Dublin.startDate'),
    endDate: t('experiences.Dublin.endDate'),
    color: '$grey',
  },
  {
    icon: 'fa-solid fa-briefcase',
    jobTitle: t('experiences.Altereos.jobTitle'),
    contractType: t('experiences.contractTypes.fixedTerm'),
    place: 'Tourcoing (59)',
    company: 'Altereos',
    description: t('experiences.Altereos.description'),
    startDate: t('experiences.Altereos.startDate'),
    endDate: t('experiences.Altereos.endDate'),
    color: '$orange',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    jobTitle: t('experiences.LLCE.jobTitle'),
    contractType: t('experiences.LLCE.contractType'),
    place: 'Villeneuve d\'Ascq',
    company: 'Université de Lille',
    description: t('experiences.LLCE.description'),
    startDate: t('experiences.LLCE.startDate'),
    endDate: t('experiences.LLCE.endDate'),
    color: '$green',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    jobTitle: t('experiences.bac.jobTitle'),
    contractType: t('experiences.bac.contractType'),
    place: 'Marcq-en-Baroeul',
    company: 'Lycée Yves Kernanec',
    description: t('experiences.bac.description'),
    startDate: t('experiences.bac.startDate'),
    endDate: t('experiences.bac.endDate'),
    color: '$blue',
  },
];
</script>

<template>
  <section id="experience">
    <h1 class="section-title">{{ $t('header.experience') }}</h1>
    <ExperienceSingle
      v-for="experience in experiences"
      :key="experience.company"
      :experience="experience"
    />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#experience {
  padding: 3rem 0;
  position: relative;
  h1 {
    text-align: center;
    text-transform: capitalize;
  }
}
</style>
