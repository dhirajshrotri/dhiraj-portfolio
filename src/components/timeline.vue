<template>
  <div>
    <event
      class="p-6 my-4"
      v-for="(item, index) in companies"
      :key="index"
      :index="index"
      :parentData="item"/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import event from './event.vue';

export default {
  name: 'timeline',
  components: { event },
  computed: { ...mapGetters(['companies']) },
  created() {},
  methods: {},
};
</script>
<style></style>
