<template>
  <div class="logout-container">
    <LoadingDots :message="message" />
  </div>
</template>

<script>
// import loadingDots from '@/components/loading/dots'

export default {
  name: 'Logout',
  // components: {
  //   loadingDots,
  // },
  data() {
    return {
      message: 'Saliendo del sistema...',
    }
  },
  head() {
    return {
      title: 'Saliendo',
    }
  },
  mounted() {
    this.logout()
  },
  methods: {
    logout() {
      this.$store
        .dispatch('destroyToken')
        .then(() => {
          this.closeSession()
        })
        .catch(() => {
          this.closeSession()
        })
    },
    closeSession() {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style scoped>
.logout-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
