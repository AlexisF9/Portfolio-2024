<script setup lang="ts">
const me = ["dev front-end", "intégrateur", "grand fan de café"]
</script>

<template>
  <section class="c-hero">
    <Transition name="fade" appear>
      <img class="c-hero__me" :width="300" :height="300" src="/images/Alexis.jpg" alt=""/>
    </Transition>
    <div>
      <Transition name="slide" appear>
        <h1 class="c-h-2xl u-text-white u-mb-24">Bienvenue sur mon portfolio !</h1>
      </Transition>
      <Transition name="slide2" appear>
        <h2 class="c-text-xl u-text-white">Moi c'est <span class="c-hero__name">Alexis Flacher</span>, je suis
          <span class="c-hero__jobs">
                    <span v-for="item in me">{{ item }}</span>
                  </span>
        </h2>
      </Transition>
    </div>
    <Transition name="slide3" appear>
      <div class="c-hero__logos">
        <img class="c-hero__logo" :height="40" src="/images/logo-react.png" alt="Logo React" />
        <img class="c-hero__logo" :height="40" src="/images/logo-next.png" alt="Logo Next" />
        <img class="c-hero__logo" :height="40" src="/images/logo-vue.png" alt="Logo Vue" />
        <img class="c-hero__logo" :height="40" src="/images/logo-stimulus.png" alt="Logo Stimulus" />
      </div>
    </Transition>
  </section>
</template>


