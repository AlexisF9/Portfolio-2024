<template>
  <div class="c-home">
    <div class="o-container o-container--sm">
      <div class="c-home__content">
        <Hero/>
        <div class="c-home__realisations">
          <Transition name="home-test" appear>
            <div class="c-home__swiper">
              <Swiper
                  slides-per-view="auto"
                  :breakpoints="{
                    '320': {
                      direction: 'horizontal',
                      spaceBetween: 20
                    },
                    '1024': {
                      direction: 'vertical',
                      spaceBetween: 40
                    }
                  }"
              >
                <SwiperSlide v-for="item in data" :key="item.id">
                  <Card
                      :name="item.name"
                      :title="item.title"
                      :type="item.type"
                      :technos="item.technos"
                      :desc="item.shortDescription"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </Transition>
        </div>
      </div>
    </div>
    <div class="c-home__footer">
      <a href="https://github.com/AlexisF9" target="_blank" class="c-text-m u-text-white">Visiter mon GitHub</a>
      <a href="mailto:alexis.flacher38@gmail.com" class="c-text-m u-text-white">Me contacter</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import rea from '../../public/realisations.json';
import 'swiper/swiper-bundle.css';

import {ref} from "vue";
const data = ref(rea)
</script>