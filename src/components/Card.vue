<template>
  <div class="c-card">
    <div>
      <div class="c-card__title">
        <h3 class="c-h-l">{{ title }}</h3>
        <p class="c-card__type c-text-s">{{ type === "perso" ? "Projet perso" : "Projet pro" }}</p>
      </div>
      <p>{{ desc }}</p>
      <div class="c-card__footer">
        <img v-for="techno in technos" class="c-card__techno" :src="`/images/${getTechno(techno)}.png`" :alt="`Logo ${techno}`" />
      </div>
      <RouterLink :to="{name: 'single-rea', params: {name: name}}">Voir plus</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  title: string,
  type: string,
  technos: string[],
  desc: string
}
defineProps<Props>()

const getTechno = (element: string) => {
  return "logo-" + element
}
</script>