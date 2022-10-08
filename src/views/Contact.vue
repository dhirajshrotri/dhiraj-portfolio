<template>
    <div
      class="flex-col justify-center mt-32 mb-16 md:mb-0"
    >
      <h1
        class="font-bold text-primary-main md:text-5xl text-4xl mb-12"
      >
        Contact
      </h1>
      <div
        class="flex bg-background-light align-center justify-center"
      >
        <socials></socials>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import socials from '../components/socials.vue';

export default {
  components: { socials },
  computed: {
    ...mapGetters(['socials']),
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      message: '',
      email: '',
    };
  },
};
</script>
