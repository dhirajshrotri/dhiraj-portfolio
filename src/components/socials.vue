<template>
  <div class="w-full">
    <h1
      class="py-6 px-8 my-4 text-primary-light text-xl"
    >
      Please reach out to me at my socials.
    </h1>
    <div
      class="flex  flex-col md:flex-row items-center justify-center gap-12"
    >
      <div
        v-for="(soc, index) in socials"
        :key="index"
        class="text-label-highlight text-sm"
      >
        <button
          class="bg-primary-light p-4 font-semibold text-label-highlight
          inline-flex items-center space-x-2 rounded-lg mb-4"
          @click="openSocialMediaLink(soc.link)"
        >
          {{soc.name}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'socials',
  computed: { ...mapGetters(['socials']) },
  created() {},
  methods: {
    openSocialMediaLink: (socLink) => window.open(`${socLink}`, '_blank'),
  },
};
</script>
