<template>
  <!-- Main -->
  <main class="main-bg">
    <!-- Navigation -->
    <DashboardNavigation nav-bar side-bar bottom-bar />
    <!-- Dashboard layout -->
    <div class="container-fluid">
      <!-- Row -->
      <div class="row justify-content-center">
        <!-- Panel content -->
        <div class="panel-container col px-0 pb-5 pt-0 pt-lg-3 px-lg-3">
          <!-- Rotative content -->
          <section>
            <!-- Container -->
            <div class="p-0">
              <!-- Router view -->
              <Nuxt />
              <!-- /.Router view -->
            </div>
            <!-- /.Container -->
          </section>
          <!-- /.Rotative content -->
        </div>
        <!-- /.Panel content -->
      </div>
      <!-- /.Row -->
    </div>
    <!-- /.Dashboard layout -->
  </main>
  <!-- /.Main -->
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style scoped>
.main-bg {
  background: var(--theme-light-2);
}
@media (min-width: 992px) {
  .panel-container {
    margin-left: 260px !important;
  }
}
@media (max-width: 991.98px) {
  .container-fluid {
    padding-bottom: 5vh !important;
  }
}
</style>
