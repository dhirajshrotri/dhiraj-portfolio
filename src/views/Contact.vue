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
        <form class="w-full max-w-lg m-4">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-primary-light text-xl font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full text-primary-highlight
                  rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                  bg-transparent-primary border-2"
                id="grid-first-name"
                type="text" placeholder="Jane"
                v-model="firstName"
              >
              <p class="text-red-500 text-xs text-primary-highlight">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-primary-light text-xl font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full text-primary-highlight
                  rounded py-3 px-4 leading-tight
                  focus:outline-none bg-transparent-primary border-2"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                v-model="lastName"
              >
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-primary-light text-xl font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full text-primary-highlight
                  rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                  bg-transparent-primary border-2"
                id="email"
                type="email"
                v-model="email"
              >
              <p class="text-red-500 text-xs text-primary-highlight">Please fill out this field.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-primary-light text-xl font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class="no-resize appearance-none block w-full bg-gray-200 text-primary-highlight
                  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
                  focus:outline-none border-2 h-48 resize-none
                  bg-transparent-primary"
                id="message"
                v-model="message"
              >
              </textarea>
            </div>
            <button
              class="text-primary-highlight rounded-sm text-lg p-4
              border-2 hover:bg-transparent-primary m-2"
              onclick="">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
