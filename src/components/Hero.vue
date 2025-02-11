<script setup lang="ts">
const me = ["développeur front JS", "intégrateur web", "junior"];

const logos = [
  {
    name: "react",
    label: "ReactJS",
  },
  {
    name: "next",
    label: "NextJS",
  },
  {
    name: "vue",
    label: "VueJS",
  },
  {
    name: "stimulus",
    label: "Stimulus",
  },
];
</script>

<template>
  <section class="c-hero">
    <Transition name="fade" appear>
      <img
        class="c-hero__me"
        :width="300"
        :height="300"
        src="/images/Alexis.jpg"
        alt=""
      />
    </Transition>
    <div>
      <Transition name="slide" appear>
        <h1 class="c-h-xl u-text-white u-mb-24">
          Bienvenue sur mon portfolio !
        </h1>
      </Transition>
      <Transition name="slide2" appear>
        <h2 class="c-text-l u-text-white">
          Moi c'est <span class="c-hero__name">Alexis Flacher</span>, je suis
          <span class="c-hero__jobs">
            <span v-for="item in me">{{ item }}</span>
          </span>
        </h2>
      </Transition>
    </div>
    <Transition name="slide3" appear>
      <div class="c-hero__logos">
        <div
          class="c-hero__logo"
          v-for="logo in logos"
          :data-tooltip="logo.label"
        >
          <img
            :height="40"
            :src="`/images/logo-${logo.name}.png`"
            :alt="`Logo ${logo.label}`"
          />
        </div>
      </div>
    </Transition>
  </section>
</template>
