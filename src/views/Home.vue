 <template>
    <div class="my-8 flex flex-col md:justify-center">
        <div class="self-end">
            <img src="../assets/img/Doggie.png" alt="">
        </div>
        <div>
            <h3 class="text-secondary-main text-lg font-bold">
                ➔ Hey There, I&rsquo;m
            </h3>
            <h1 class="text-primary-main font-bold sm:text-5xl text-4xl">
                {{profile.firstName}} {{profile.lastName}}.
            </h1>
        </div>
        <div class="w-full my-2">
            <div class="text-label-highlight text-xl" v-html="profile.description">
            </div>
            <button
                class="text-primary-main rounded-sm text-lg p-4
                border-2 hover:bg-transparent-primary my-4"
                onclick="location.href='#Contact'">
                Get In Touch
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['profile', 'projects', 'age']),
  },
};
</script>
<style></style>
