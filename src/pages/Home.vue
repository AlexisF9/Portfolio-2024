<template>
  <div class="c-home">
    <div class="o-container o-container--md">
      <div class="c-home__content">
        <Hero />
        <div class="c-home__realisations-container">
          <Transition name="realisations-buttons" appear
            ><div class="c-home__realisations-buttons">
              <p class="c-h-l u-text-white">Réalisations</p>
              <div>
                <button
                  :class="`${
                    filter === item.value ? 'c-text-m is-active' : 'c-text-m'
                  }`"
                  v-for="item in filters"
                  @click="filter = item.value"
                >
                  {{ item.label }}
                </button>
              </div>
            </div></Transition
          >

          <div class="c-home__realisations">
            <Transition name="home-slider" appear>
              <div class="c-home__swiper">
                <Swiper
                  @swiper="captureSwiperInstance"
                  slides-per-view="auto"
                  :mousewheel="true"
                  :modules="[Mousewheel]"
                  :breakpoints="{
                    '320': {
                      direction: 'horizontal',
                      spaceBetween: 20,
                    },
                    '1024': {
                      direction: 'vertical',
                      spaceBetween: 40,
                    },
                  }"
                >
                  <SwiperSlide v-for="item in data" :key="item.id">
                    <Card
                      :name="item.name"
                      :title="item.title"
                      :type="item.type"
                      :technos="item.technos"
                      :desc="item.shortDescription"
                      :date="item.date"
                      :img="item.pictures[0]"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
    <Transition name="home-footer" appear>
      <div class="c-home__footer">
        <a
          href="https://github.com/AlexisF9"
          target="_blank"
          class="c-text-m u-text-white"
          >GitHub</a
        >
        <a
          href="https://www.linkedin.com/in/alexis-flacher-772ba7197/"
          target="_blank"
          class="c-text-m u-text-white"
          >LinkedIn</a
        >
        <a
          href="mailto:alexis.flacher38@gmail.com"
          class="c-text-m u-text-white"
          >Me contacter</a
        >
        <a
          href="/alexis-flacher-cv.pdf"
          target="_blank"
          class="c-text-m u-text-white"
          >Mon CV</a
        >
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import rea from "../../public/realisations.json";
import "swiper/swiper-bundle.css";
import { Mousewheel } from "swiper/modules";

import { ref, watch } from "vue";
const data = ref(rea);
const filter = ref("tous");
const mySwiper: any = ref(null);

const filters: { label: string; value: string }[] = [
  {
    label: "Tous",
    value: "tous",
  },
  {
    label: "Pro",
    value: "pro",
  },
  {
    label: "Perso",
    value: "perso",
  },
];

const captureSwiperInstance = (swiper: any) => {
  mySwiper.value = swiper;
};

watch(filter, () => {
  mySwiper.value.slideTo(0);
  if (rea.length > 0) {
    data.value =
      filter.value === "pro"
        ? rea.filter((el) => el.type === "pro")
        : filter.value === "perso"
        ? rea.filter((el) => el.type === "perso")
        : (data.value = rea);
  }
});
</script>
