<template>
  <div class="">
    <span class="text-sm text-label-highlight">
      {{parentData.name + ` (`+parentData.level/10 +`/10 )`}}
    </span>
    <div class="bg-black rounded-full">
      <div class="bg-primary-highlight rounded-full h-1" :style="getStyle()"></div>
    </div><br>
  </div>
</template>

<script>

export default {
  name: 'technology',
  props: {
    parentData: Object,
  },
  methods: {
    getStyle() {
      return (`width: ${this.parentData.level}%`);
    },
  },
};
</script>

<style>
</style>
