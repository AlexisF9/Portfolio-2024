<template>
  <div class="c-home">
    <div class="o-container o-container--md">
      <div class="c-home__content">
        <Hero/>
        <div class="c-home__realisations">
          <Transition name="home-test" appear>
            <div class="c-home__swiper">
              <Swiper
                  :slides-per-view="'auto'"
                  :space-between="40"
                  :direction="'vertical'"
                  :modules="[Navigation]"
              >
                <SwiperSlide v-for="item in data" :key="item.id">
                  <div class="c-home__card">
                    <div>
                      {{ item.title }}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from "../components/Hero.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import rea from '../../public/realisations.json';

import {ref} from "vue";
const data = ref(rea)
</script>