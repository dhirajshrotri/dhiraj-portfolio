<template>
  <div class="flex-col justify-center">
    <h1
      class="font-bold text-primary-main md:text-5xl text-4xl"
    >
      Experience
    </h1>
    <timeline></timeline>
  </div>
</template>

<script>

import Timeline from '@/components/timeline.vue';

export default {
  components: {
    Timeline,
  },
};
</script>
