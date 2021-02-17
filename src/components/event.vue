<template>
    <div class="bg-background-light py-6 px-8 my-4 text-label-highlight rounded-sm shadow-lg event">
        <span class="text-label-highlight text-sm ">
          {{parentData.startDate}} - {{parentData.endDate}}
        </span>
        <br>
        <span class="text-primary-light text-xl ">
          <b>{{parentData.name}}</b>
        </span>
        <br>
        <span class="text-label-subtitle text-base ">
          <b>{{parentData.role}}</b>
        </span>
        <p class="text-label-highlight text-lg ">
          {{parentData.description}}
        </p>
        <span class="text-label-subtitle text-sm ">
          <i>{{parentData.type}}</i>
        </span>
        <div v-for="item in parentData.roles" v-bind:key="item.name" class="m-1">
          <a :href="item.link" class="text-sm text-label-highlight">
            <span class="text-label-subtitle"> ➔ </span>
            <span>{{item.description}}</span>
          </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'event',
  props: {
    parentData: Object,
    index: Number,
  },
};
</script>

<style scoped>
</style>
