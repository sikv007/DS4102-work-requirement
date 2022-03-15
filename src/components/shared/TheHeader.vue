<template>
  <header :class="isDarkMode.card" class="shadow-sm ">
    <base-container :padding="2">
      <div class="row">
        <div class="col-xs-10 col-md-9">
          <nav class="navbar navbar-expand-lg">
            <router-link to="/" class="navbar-brand"
              ><img src="../../assets/logo.svg"
            /></router-link>
            <button
              class="navbar-toggler text-color-white"
              type="button"
              @click="toggleNavbar"
            >
              <i
                v-if="!navBarVisible"
                class="bi bi-list"
                style="font-size: 32px"
                :class="isDarkMode.icon"
              ></i>
              <i
                v-else
                class="bi bi-x-lg"
                style="font-size: 32px"
                :class="isDarkMode.icon"
              ></i>
            </button>
            <div class="collapse navbar-collapse" :class="navBar">
              <ul class="navbar-nav nav-pills">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/discover"
                    >Discover</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/pokedex"
                    >Pokédex</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/create-pokemon"
                    >Create Pokémon</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          class="col-xs-12 col-md-3 col-lg-2 d-flex align-items-center justify-content-center"
        >
          <base-button outline @event="setDarkMode"
            ><i class="bi" :class="isDarkMode.button.class"></i>
            {{ isDarkMode.button.text }}</base-button
          >
        </div>
      </div>
    </base-container>
  </header>
</template>

<script>
import { ref, computed } from "vue";
// import { useServices } from "../../services/services";
import { useState } from '../../services/stateServices';
export default {
  setup() {
    const state = useState();
    const navBarVisible = ref(false);
    const navBar = computed(() =>
      navBarVisible.value ? { show: true } : { show: false }
    );
    const toggleNavbar = () => {
      navBarVisible.value = !navBarVisible.value;
    };
    return {
      isDarkMode: state.isDarkMode,
      navBarVisible,
      toggleNavbar,
      navBar,
      setDarkMode: state.setDarkMode,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
</style>
