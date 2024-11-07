<template>
  <div class="c-single-rea" v-if="data">
    <div class="o-container o-container--md">
      <h1>{{ data.title }}</h1>
      <p>{{ data.shortDescription }}</p>
      <Swiper
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="{
          '640': {
            slidesPerView: 2
          }
        }"
      >
        <SwiperSlide v-for="(item, index) in data.pictures">
          <img :src="item" :alt="`picture-${data.title}-${index+1}`"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref, watchEffect} from "vue";
import rea from '../../public/realisations.json';
import {useRoute} from "vue-router";
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
const route = useRoute()

const data: Ref<{
  id: number,
  name: string,
  title: string,
  shortDescription: string,
  type: string,
  pictures: string[],
  technos: string[]
} | undefined> = ref(undefined)

watchEffect(() => {
  data.value = rea.find((el: any) => el.name === route.params.name)
})
</script>