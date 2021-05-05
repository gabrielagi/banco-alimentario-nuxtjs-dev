<template>
  <nuxt-link
    v-if="!auth"
    to="/login"
    class="btn btn-sm btn-login ls-s-rounded m-0 px-2"
  >
    <i class="fas fa-sign-in-alt m-0"></i>
    <span class="ml-3 web-hide">Iniciar sesión</span>
  </nuxt-link>
  <mdb-dropdown v-else tag="li" class="nav-item mobile-hide uns" dropleft>
    <mdb-dropdown-toggle
      slot="toggle"
      tag="a"
      nav-link
      class="btn btn-dropdown"
      waves-fixed
    >
      <i class="fas fa-user-alt black-alpha-50 mr-2"></i>
      Cuenta
    </mdb-dropdown-toggle>
    <mdb-dropdown-menu>
      <h6 class="dropdown-header text-left pl-2 black-alpha-60">Cuenta</h6>
      <mdb-dropdown-item to="/profile">Perfil</mdb-dropdown-item>
      <mdb-dropdown-item to="/dashboard">Dashboard</mdb-dropdown-item>
      <div class="dropdown-divider m-0 p-0"></div>
      <mdb-dropdown-item>Cerrar sesión</mdb-dropdown-item>
    </mdb-dropdown-menu>
  </mdb-dropdown>
</template>

<script>
import {
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem,
} from 'mdbvue'
export default {
  components: {
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
  },
  props: {
    auth: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
/* Login button */
.btn-login {
  background-color: #313131;
  color: #fff !important;
}
@media (min-width: 992px) {
  .btn-login i {
    font-size: 22px;
  }
}
@media (max-width: 992px) {
  .btn-login i {
    font-size: 12px;
  }
}

.btn-dropdown {
  background: rgba(0, 0, 0, 0.06);
  border-radius: 8px !important;
  box-shadow: none !important;
  color: rgba(0, 0, 0, 0.4);
}
</style>
