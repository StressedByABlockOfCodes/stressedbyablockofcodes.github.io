<template>
  <footer
    class="
      container
      mx-auto
      max-w-screen-lg
      relative
      pt-22
      px-3
      text-gray-600
      body-font
    "
  >
    <div class="w-full h-px bg-gray-800"></div>
    <div
      class="
        container
        px-5
        py-8
        mx-auto
        max-w-screen-lg
        flex
        items-center
        sm:flex-row
        flex-col
      "
    >
      <button
        class="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-gray-900
        "
        @click="scrollTo()"
      >
        <svg
          viewBox="0 0 163 156"
          class="w-10 h-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.7273 125V55.1818H72.1818V67.5H73C74.4545 63.4091 76.8788 60.1818 80.2727 57.8182C83.6667 55.4545 87.7273 54.2727 92.4545 54.2727C97.2424 54.2727 101.318 55.4697 104.682 57.8636C108.045 60.2273 110.288 63.4394 111.409 67.5H112.136C113.561 63.5 116.136 60.303 119.864 57.9091C123.621 55.4848 128.061 54.2727 133.182 54.2727C139.697 54.2727 144.985 56.3485 149.045 60.5C153.136 64.6212 155.182 70.4697 155.182 78.0455V125H135.864V81.8636C135.864 77.9848 134.833 75.0758 132.773 73.1364C130.712 71.197 128.136 70.2273 125.045 70.2273C121.53 70.2273 118.788 71.3485 116.818 73.5909C114.848 75.803 113.864 78.7273 113.864 82.3636V125H95.0909V81.4545C95.0909 78.0303 94.1061 75.303 92.1364 73.2727C90.197 71.2424 87.6364 70.2273 84.4545 70.2273C82.303 70.2273 80.3636 70.7727 78.6364 71.8636C76.9394 72.9242 75.5909 74.4242 74.5909 76.3636C73.5909 78.2727 73.0909 80.5152 73.0909 83.0909V125H53.7273Z"
            fill="#34D399"
          />
          <path
            d="M7.72727 125V55.1818H26.5V67.3636H27.2273C28.5 63.0303 30.6364 59.7576 33.6364 57.5455C36.6364 55.303 40.0909 54.1818 44 54.1818C44.9697 54.1818 46.0152 54.2424 47.1364 54.3636C48.2576 54.4848 49.2424 54.6515 50.0909 54.8636V72.0455C49.1818 71.7727 47.9242 71.5303 46.3182 71.3182C44.7121 71.1061 43.2424 71 41.9091 71C39.0606 71 36.5152 71.6212 34.2727 72.8636C32.0606 74.0758 30.303 75.7727 29 77.9545C27.7273 80.1364 27.0909 82.6515 27.0909 85.5V125H7.72727Z"
            fill="#34D399"
          />
          <path
            d="M47.096 149.856C44.024 149.856 41.08 149.515 38.264 148.832C35.448 148.235 33.0587 147.296 31.096 146.016L36.472 131.552C38.776 133.173 41.592 133.984 44.92 133.984C47.3947 133.984 49.3573 133.131 50.808 131.424C52.344 129.803 53.112 127.328 53.112 124V55.136H73.08V123.872C73.08 131.808 70.8187 138.123 66.296 142.816C61.7733 147.509 55.3733 149.856 47.096 149.856ZM63.096 45.536C59.4267 45.536 56.44 44.4693 54.136 42.336C51.832 40.2027 50.68 37.5573 50.68 34.4C50.68 31.2427 51.832 28.5973 54.136 26.464C56.44 24.3307 59.4267 23.264 63.096 23.264C66.7653 23.264 69.752 24.288 72.056 26.336C74.36 28.2987 75.512 30.8587 75.512 34.016C75.512 37.344 74.36 40.1173 72.056 42.336C69.8373 44.4693 66.8507 45.536 63.096 45.536Z"
            fill="#34D399"
          />
        </svg>
      </button>
      <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 align-bottom">
        © 2022 Renier Jay Mangaoang
      </p>
      <span
        class="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-4
          justify-center
          sm:justify-start
        "
      >
        <!-- <a class="text-gray-500">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            ></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            ></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <span class="sr-only">GitHub</span>
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a> -->
        <a href="https://www.facebook.com/renierjay.mangaoang/" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-facebook-f"
            class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-lg"
          />
        </a>
        <!-- <a href="/" class="pl-6" target="_blank">
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-md"
          />
        </a> -->
        <a
          href="https://github.com/StressedByABlockOfCodes"
          class="pl-6"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
            class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-lg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/renierjay-mangaoang/"
          class="pl-6"
          target="_blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-linkedin-in"
            class="text-gray-500 hover:text-emerald-200 fa-spin-hover fa-lg"
          />
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTo() {
      this.$emit("scrollToElement", "#top");
    },
  },
}
</script>