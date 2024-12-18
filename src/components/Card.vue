<template>
  <div class="c-card">
    <div class="c-card__content">
      <div>
        <div class="c-card__title">
          <h3 class="c-h-l">{{ title }}</h3>
          <div class="c-card__infos">
            <p>{{ date }}</p>
            <p class="c-card__type c-text-s">
              {{ type === "perso" ? "Projet perso" : "Projet pro" }}
            </p>
          </div>
        </div>
        <p>{{ desc }}</p>
      </div>
      <div class="c-card__footer">
        <div>
          <img
            v-for="techno in technos"
            class="c-card__techno"
            :src="`/images/${getTechno(techno.name)}.png`"
            :alt="`Logo ${techno.label}`"
          />
        </div>
        <RouterLink
          :to="{ name: 'single-rea', params: { name: name } }"
          class="c-card__link"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M12 20L8 16M12 20L16 16"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  title: string;
  type: string;
  technos: { name: string; label: string }[];
  desc: string;
  date: string;
}
defineProps<Props>();

const getTechno = (element: string) => {
  return "logo-" + element;
};
</script>
