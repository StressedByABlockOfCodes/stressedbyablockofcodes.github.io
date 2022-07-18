<template>
  <div
    class="
      container
      mx-auto
      max-w-screen-lg
      flex
      px-5
      py-14
      md:flex-row
      flex-col
      items-center
    "
  >
    <!-- <div class="h-shape"></div> -->
    <div
      class="
        lg:max-w-lg lg:w-full
        md:w-1/2
        w-5/6
        mb-10
        md:mb-0
        transition
        duration-300
        ease-in-out
        delay-150
        transform
        bg-white
        shadow-2xl
        md:hover:translate-x-4 md:hover:-translate-y-8
      "
    >
      <img
        class="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      />
    </div>
    <div
      class="
        lg:flex-grow
        md:w-1/2
        lg:pl-24
        md:pl-16
        flex flex-col
        md:items-start md:text-left
        items-center
        text-center
      "
    >
      <h1
        class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-100"
      >
        Hi, I'm
        <span class="text-indigo-400 font-bold">Renier Jay Mangaoang.</span>
        <br />
        A Junior Web/Android Developer.
      </h1>
      <p class="mb-8 leading-relaxed">
        I have a passion to create useful and functional web &#38; mobile
        applications that impact the lives of other people.
      </p>
      <div class="flex flex-wrap justify-center">
        <button
          class="
            inline-flex
            text-white
            bg-indigo-500
            border-0
            py-2
            px-6
            focus:outline-none
            hover:bg-indigo-600
            rounded
            text-lg
            mb-4
          "
        >
          Download CV
          <DocumentDownloadIcon class="h-6 w-6 ml-2" />
        </button>
        <a
          class="
            ml-4
            inline-flex
            text-gray-700
            bg-gray-100
            border-0
            py-2
            px-6
            focus:outline-none
            hover:bg-gray-200
            rounded
            text-lg
            mb-4
          "
          href="https://mail.google.com/mail/u/0/?fs=1&amp;to=mangaoang.renierjay@gmail.com&amp;su=&amp;body=&amp;tf=cm"
          target="_blank"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { DocumentDownloadIcon } from "@heroicons/vue/outline";

export default {
  components: {
    DocumentDownloadIcon,
  },
};
</script>

<style scoped>
.h-shape {
  transition: all 0.4s ease-in-out;
  width: 35%;
  height: 100%;
  background-color: theme("colors.indigo.500");
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);
}
</style>
