<template>
  <mdb-navbar class="navigation py-2 uns" color="none" light>
    <nuxt-link class="ls-brand" to="/">
      <img src="@/assets/img/logo.jpg" class="uns lazyload" />
    </nuxt-link>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <!-- Links -->
        <mdb-dropdown v-if="!auth" tag="li" class="nav-item">
          <mdb-dropdown-toggle
            slot="toggle"
            class="nav-link"
            tag="a"
            nav-link
            waves-fixed
            >Asociate</mdb-dropdown-toggle
          >
          <mdb-dropdown-menu>
            <nuxt-link
              v-for="r in registers"
              :key="r.id"
              class="dropdown-item"
              :to="r.route"
            >
              {{ r.name }}
            </nuxt-link>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <a
          v-for="link in links"
          :key="link.name"
          :to="link.url"
          class="nav-item"
        >
          <span class="nav-link">{{ link.name }}</span>
        </a>
        <!-- Account button -->
        <account-button :auth="auth" />
        <!-- /.Account button -->
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
} from 'mdbvue'
import accountButton from './account-button'

export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    accountButton,
  },
  props: {
    auth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        {
          name: 'Quienes somos',
          url: '/',
        },
        {
          name: 'Destinatarios',
          url: '/',
        },
        {
          name: 'Donantes',
          url: '/',
        },
        {
          name: 'Asociate',
          url: '/',
        },
        {
          name: 'Contácto',
          url: '/contact',
        },
      ],
      registers: [
        {
          id: 1,
          route: '/register/giver',
          name: 'Como donante',
        },
        {
          id: 2,
          route: '/register/volunteer',
          name: 'Como voluntario',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Navbar */
.navigation {
  background: #fff;
}
@media (min-width: 992px) {
  .navigation {
    box-shadow: none !important;
    border-bottom: 1px solid #f7f7f7;
  }
}
@media (max-width: 992px) {
  .navigation {
    box-shadow: 0 1px 0.125em 0 rgba(0, 0, 0, 0.15) !important;
  }
}

.navigation,
.navigation * {
  transition: 0s all !important;
}
/* Brand */
.ls-brand img {
  height: 60px;
}
.ls-brand:hover {
  opacity: 0.8 !important;
}

.nav-item {
  color: var(--black-a);
  font-weight: 400;
  text-decoration: none !important;
}
.nav-item:hover .nav-link {
  color: var(--black-c) !important;
}
@media (min-width: 992px) {
  .navigation {
    padding-left: 40px;
    padding-right: 40px;
  }
  .nav-item {
    margin-right: 20px;
  }
  .nav-item:last-child {
    margin-right: 0;
  }
}
</style>
