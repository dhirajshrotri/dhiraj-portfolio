<template class="overflow-hidden">
  <div id="app" class="w-full h-full min-w-screen min-h-screen bg-background-default">
    <div id="pages" class=" sm:w-10/12 lg:w-1/2 sm:m-auto mx-6">
        <home id="Home" class="md:min-h-screen" />
        <about id="About" class="md:min-h-screen" />
        <experience id="Experience" class="md:min-h-screen" />
        <contact id="Contact" class="md:min-h-screen" />
    </div>
    <footer id="bottom" class="w-full text-center p-8 bg-background-footer ">
      <div>
        <p class="text-label-subtitle">Made by Dhiraj Shrotri using Vue.js & tailwind.css</p>
        <span class="text-secondary-main">Doodle Art by : <a href="https://www.pablostanley.com/">Pablo Stanley</a></span>
      </div>
    </footer>
  </div>
</template>

<script>

import Home from '@/views/Home.vue';

import About from '@/views/About.vue';

import Experience from '@/views/Experience.vue';

import Contact from '@/views/Contact.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
    Experience,
    Contact,
  },
  data() {
    return {
      prevHeight: 0,
      appVersion: '1.0.0',
    };
  },
  mounted() {
    setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  methods: {
    scrollFix(hashbang) {
      window.location.hash = hashbang;
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.prevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
@import './assets/css/tailwind.scss'; /* todo: dosen't work*/
html {
  scroll-behavior: smooth;
} /* todo used to animate scroll on nav click */
#app {
  overflow: hidden;
}
#pages {
  overflow: hidden;
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
 }
.fade-enter,
.fade-leave-active {
  opacity: 0;
  translate: scale(1);
}
</style>
