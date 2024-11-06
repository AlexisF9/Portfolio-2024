<template>
  <div class="c-card">
    <div>
      <div class="c-card__title">
        <h3 class="c-h-l">{{ title }}</h3>
      </div>
      <img :src="picture" alt=""/>
      <div class="c-card__footer">
        <img class="c-card__techno" :src="`/images/${getTechno(techno)}.png`" :alt="`Logo ${techno}`" />
        <p class="c-card__type c-text-s">{{ type === "perso" ? "Projet perso" : "Projet pro" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  type: string,
  techno: string,
  picture: string
}
defineProps<Props>()

const getTechno = (element: string) => {
  return "logo-" + element
}
</script>