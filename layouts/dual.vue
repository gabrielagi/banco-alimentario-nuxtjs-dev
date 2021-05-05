<template>
  <!-- Row -->
  <div class="row justify-content-center">
    <div class="col-12">
      <!-- Banner -->
      <!-- <banner
        :icon="icon"
        :title="title"
        :subtitle="subtitle"
        :backlink="backlink"
      >
        <slot name="banner"></slot>
      </banner> -->
      <!-- /.Banner -->
    </div>

    <!-- Col -->
    <div class="col-12">
      <!-- Container -->
      <div class="container-fluid p-3">
        <!-- Slot -->
        <slot name="default"></slot>
        <!-- /.Slot -->
      </div>
      <!-- /.Container -->
    </div>
    <!-- /.Col -->
  </div>
  <!-- /.Row -->
</template>

<script>
// import banner from '@/components/dashboard/banner/index.vue'

export default {
  // components: {
  //   banner,
  // },
  props: {
    backlink: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
