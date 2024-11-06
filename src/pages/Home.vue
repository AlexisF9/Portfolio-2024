<template>
  <div class="c-home">
    <div class="o-container o-container--md">
      <div class="c-home__content">
        <Hero/>
        <div class="c-home__realisations">
          <Transition name="home-test" appear>
            <div class="c-home__swiper">
              <Swiper
                  :breakpoints="{
                    '320': {
                      slidesPerView: 5,
                      direction: 'horizontal'
                    },
                    '1024': {
                      slidesPerView: 'auto',
                      direction: 'vertical',
                      spaceBetween: 40
                    }
                  }"
              >
                <SwiperSlide v-for="item in data" :key="item.id">
                  <Card :title="item.title" :type="item.type" :techno="item.techno" :picture="item.picture"/>
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
import rea from '../../public/realisations.json';

import {ref} from "vue";
import Card from "../components/Card.vue";
const data = ref(rea)
</script>

<!--
:breakpoints="{
                    '320': {
                      touchRatio: 0,
                      shortSwipes: false,
                      longSwipes: false
                    },
                    '1024': {
                      touchRatio: 1,
                      shortSwipes: true,
                      longSwipes: true
                    }
                  }"
-->