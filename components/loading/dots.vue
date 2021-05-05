<template>
  <div class="loader uns text-center">
    <div
      v-if="title"
      class="h1-responsive fw-400 mb-4 animated fadeInUp black-alpha-50"
    >
      {{ title }}
    </div>
    <div
      v-if="message"
      class="h6-responsive fw-400 animated fadeIn black-alpha-40"
    >
      {{ message }}
    </div>
    <div class="wrapper">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Obeteniendo información',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
/* Loader */
.loader {
  /* background: #eee; */
  /* box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.015); */
  padding: 15px 0;
}

/* Wrapper */
.loader .wrapper span {
  animation: loading 2000ms ease-in-out infinite;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  display: inline-block;
  height: 10px;
  margin: 0 3px;
  opacity: 0;
  position: relative;
  width: 10px;
}

/* Animation delay */
.loader .wrapper span:nth-child(5) {
  animation-delay: 100ms;
}
.loader .wrapper span:nth-child(4) {
  animation-delay: 200ms;
}
.loader .wrapper span:nth-child(3) {
  animation-delay: 300ms;
}
.loader .wrapper span:nth-child(2) {
  animation-delay: 400ms;
}
.loader .wrapper span:nth-child(1) {
  animation-delay: 500ms;
}

/* Animation */
@keyframes loading {
  0% {
    transform: translateX(-350px);
    opacity: 0;
  }
  40%,
  60% {
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(350px);
    opacity: 0;
  }
}
</style>
