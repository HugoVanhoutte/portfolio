<script setup lang="ts">
const age = 24;
</script>

<template>
  <section id="about">
    <main class="description">
      <aside class="info">
        <div class="photo">
<!--          TODO ADD PHOTO-->
          <img src="https://placehold.co/400x600" :alt="$t('about.photo.alt')">
        </div>
        <div class="details">
          <ul>
            <li><strong>{{ $t('about.name') }}: </strong>{{ $t('globals.fullName') }}</li>
            <li><strong>{{ $t('about.age') }}: </strong>{{ age }}</li>
            <li><strong>{{ $t('about.currentCity') }}: </strong>{{ $t('globals.currentCity') }}</li>
            <li><strong>{{ $t('about.hobbies') }}: </strong>{{ $t('globals.hobbies') }}</li>
          </ul>
        </div>
      </aside>
      <div class="text">
        <h1 class="section-title">
          {{ $t('about.title') }}
        </h1>
        <p>
<!--          TODO DESCRIPTION-->
          {{ $t('about.description') }}
        </p>
      </div>
    </main>
    <aside class="buttons">
      <button class="blue">{{ $t('about.downloadResume') }}</button>
      <button class="green">{{ $t('about.contactMe') }}</button>
    </aside>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#about {
  height: calc(100dvh - 3rem);
  padding: 3rem 0;
  font-family: $body-font;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .description {
    width: 80%;
    display: flex;
    flex-direction: row;
    .info {
      width: 33%;
      .details {
        ul {
          li {
            padding: .25rem 0;
            line-height: 1.25rem;
            strong {
              font-weight: normal;
            }
            font-weight: 250;
          }
        }
      }
      .photo {
        width: 100%;
      }
    }
    .text {
      width: 66%;
      margin: 0 4rem;
      p {
        text-align: justify;
        line-height: 1.25rem;
        font-weight: 250;
      }
    }
  };
  .buttons {
    width: 80%;
    text-transform: uppercase;
    font-family: $body-font;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 3rem;
  }
}
</style>
