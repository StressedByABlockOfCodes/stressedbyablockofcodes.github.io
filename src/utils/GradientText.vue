<template>
  <span
    class="
      bg-gradient-to-br
      from-green-500
      to-emerald-400
      bg-clip-text
      text-transparent
      font-bold
    "
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "GradientText",
};
</script>