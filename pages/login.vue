<template>
  <layout>
    <div class="container-fluid justify-content-center align-items-center py-5">
      <div class="row py-lg-5">
        <div class="m-auto col-md-10 col-lg-8 col-xl-5">
          <!-- Card -->
          <div class="card login-card p-4">
            <LoadingOverlay v-if="loading" />
            <!-- Card body -->
            <div class="card-body p-5">
              <div class="row justify-content-center px-4">
                <div
                  class="col-12 col-lg-4 text-center mobile-hide m-auto pl-0 pr-lg-5"
                >
                  <img
                    src="@/assets/img/login.png"
                    class="donate-image uns lazyload"
                  />
                </div>

                <div class="col-12 col-lg-8 bl-grey pl-lg-5">
                  <!-- Title -->
                  <h1
                    class="h3-responsive black-alpha-70 mb-5 text-center text-lg-left"
                  >
                    Iniciar sesión
                  </h1>

                  <p v-if="error" class="text-center text-lg-left text-danger">
                    {{ errorMessage }}
                  </p>

                  <form
                    autocomplete="off"
                    method="post"
                    @submit.prevent="login"
                  >
                    <div class="form-group mb-4">
                      <soft-input
                        v-model="username"
                        type="email"
                        placeholder="ej: nombre@gmail.com"
                        required
                        label="Email"
                      />
                    </div>

                    <div class="form-group mb-4">
                      <soft-input
                        v-model="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        required
                        label="Contraseña"
                      />
                    </div>

                    <div class="form-group row mb-0 justify-content-end mt-5">
                      <div class="col-12">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block m-0 px-5"
                        >
                          Entrar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /.Card body -->
          </div>
          <!-- /.Card -->
        </div>
        <!-- </v-col> -->
      </div>
    </div>
  </layout>
</template>

<script>
import assetMixin from '@/mixins/assetMixin'
import softInput from '@/components/forms/input'

export default {
  components: {
    softInput,
  },
  mixins: [assetMixin],
  layout: 'default',
  middleware: 'guest',
  data() {
    return {
      username: null,
      password: null,
      error: null,
      loading: false,
      loadedUser: false,
      errorMessage: 'Ingresaste mal tus datos',
      greetingMessage: {
        title: '¡Hola!',
        subtitle: 'Ingresa tu email y contraseña',
      },
      welcomeMessage: 'Bienvenido a',
    }
  },
  head() {
    return {
      title: 'Iniciar sesión',
    }
  },
  methods: {
    /**
     * Log in into application
     */
    login() {
      this.loading = true
      this.$store
        .dispatch('retrieveToken', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.loadUser()
        })
        .catch((error) => {
          this.error = error.message
          this.loading = false
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    /**
     * Loads user locally
     */
    async loadUser() {
      const AuthStr = localStorage.getItem('access_token_bearer').toString()
      const resData = await this.$axios.$get('user', {
        headers: {
          Accept: 'application/json',
          Authorization: AuthStr,
        },
      })
      this.storeUser(resData)
      this.redirect()
    },

    /**
     * Stores user
     */
    storeUser(data) {
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('routes', JSON.stringify(data.routes))
      localStorage.setItem('role', JSON.stringify(data.role))
      localStorage.setItem('user_settings', JSON.stringify(data.user_settings))
      this.loadedUser = true
    },

    /**
     * Redirection
     */
    redirect() {
      if (localStorage.routes && this.loadedUser) {
        const route = JSON.parse(localStorage.getItem('routes'))[0].url
        this.$router.push({ path: route })
      }
    },
  },
}
</script>

<style scoped>
.cont {
  align-content: center;
}
.cont-row {
  min-height: 90vh;
}
.donate-image {
  width: 100%;
  margin: auto;
}
@media (min-width: 992px) {
  .bl-grey {
    border-left: 1px solid #f1f3f5;
  }
}

.login-card {
  background: #fff;
  border-radius: 5px !important;
  box-shadow: none;
}
</style>
