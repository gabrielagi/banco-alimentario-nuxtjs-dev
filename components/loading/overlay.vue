<template>
  <div
    class="d-flex loading-container flex-column"
    :class="{ 'theme-light': light, rounded: rounded }"
  >
    <p v-if="message != ''" class="h6-responsive text-grey mb-3">
      {{ message }}
    </p>
    <div>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
    light: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.loading-container {
  align-items: center;
  bottom: 0;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1010;
  border-radius: 0;
}

.loading-container.rounded {
  border-radius: 8px !important;
}

.loading-container {
  background: rgba(255, 255, 255, 0.9);
}
</style>
