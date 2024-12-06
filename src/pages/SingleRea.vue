<template>
  <Transition name="opacity" appear>
    <div class="c-single-rea" v-if="data">
      <div class="o-container o-container--md">
        <RouterLink class="c-single-rea__back u-text-white" to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M12 20L8 16M12 20L16 16"
              stroke="#60d9f8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Retour à la home
        </RouterLink>
        <div class="c-single-rea__infos">
          <div>
            <h1 class="c-h-xl u-text-white u-mb-12">
              {{ data.title }}
            </h1>
            <div class="c-single-rea__links">
              <span class="c-card__type c-text-s u-text-white">{{
                data.type === "perso" ? "Projet perso" : "Projet pro"
              }}</span>
              <a v-if="data.github" :href="data.github" target="_blank">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#fff"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <p class="c-text-l u-text-light">{{ data.description }}</p>
        </div>
        <div class="c-single-rea__technos">
          <div
            class="c-single-rea__techno"
            v-for="techno in data.technos"
            :data-tooltip="techno.label"
          >
            <img
              :src="`/images/${getTechno(techno.name)}.png`"
              :alt="`Logo ${techno}`"
            />
          </div>
        </div>
        <Swiper
          :slides-per-view="1"
          :loop="true"
          :pagination="true"
          :space-between="20"
          :modules="[Navigation, Pagination]"
          :navigation="{
            enabled: true,
            prevEl: '.c-single-rea__prev',
            nextEl: '.c-single-rea__next',
          }"
        >
          <SwiperSlide v-for="(item, index) in data.pictures">
            <img :src="item" :alt="`picture-${data.title}-${index + 1}`" />
          </SwiperSlide>
          <div class="c-single-rea__arrows">
            <button class="c-single-rea__prev">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="c-single-rea__next">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Swiper>
        <a class="c-button" v-if="data.link" :href="data.link" target="_blank">
          <span></span>
          <span></span>
          <span></span>
          Visiter le site
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
import { Ref, ref, watchEffect } from "vue";
import rea from "../../public/realisations.json";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
const route = useRoute();

const data: Ref<
  | {
      id: number;
      name: string;
      title: string;
      shortDescription: string;
      description: string;
      type: string;
      pictures: string[];
      technos: { name: string; label: string }[];
      link: string | null;
      github: string | null;
    }
  | undefined
> = ref(undefined);

watchEffect(() => {
  if (rea) {
    data.value = rea.find((el: any) => el.name === route.params.name);
  }
});

const getTechno = (element: string) => {
  return "logo-" + element;
};
</script>
