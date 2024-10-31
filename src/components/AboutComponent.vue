<script setup lang="ts">
const birthDate = new Date('1999-03-01');
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();
if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
  age -= 1;
}

</script>

<template>
  <section id="about">
    <main class="description">
      <aside class="info">
        <div class="photo">
          <img src="../assets/profile-picture.png" alt="Photo">
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
    height: 80%;
    .info {
      width: 25%;
      height: 60%;
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
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-image: url("@/assets/profile-picture.png");
        // background-position: center;
        // background-repeat: no-repeat;
        // background-size: cover;
        img {
          height: auto;
          width: 100%;
          border-radius: 1rem;
        }
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
  }
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
@media screen and (max-width: 769px) {
  #about {
    .description {
      flex-direction: column;
      width: 95%;
      .info {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: row;
        margin-bottom: 2rem;
        .photo {
          width: 50%;
          height: 100%;
        img {
          width: auto;
          height: 100%;
        }
        }
      }
      .text {
        width: 95%;
        margin: 0;
      }
    }
    .buttons {
      width: 100%;
      flex-direction: column;
      align-items: center;
      button {
        width: 95%;
        margin: 1rem 0;
      }
    }
  }
}
@media screen and (max-width: 481px) {
  #about {
    .description {
      .info {
        flex-direction: column;
        height: fit-content;
        .photo {
          width: 100%;
          justify-content: center;
          align-content: center;
          img {
            width: 95%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
