<template>
  <div class="about">
    <AboutComponents />
  </div>
</template>

<script>
import AboutComponents from '@/components/AboutComponents.vue'
export default {
  components: {
    AboutComponents,
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.about {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
</style>
