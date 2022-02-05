<template>
  <v-app>
    <NavBar />
    <v-main style="background-color: #ffebc1;"> <router-view /> </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/App/NavBar'

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #fdb42a;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: transparent;
}
</style>
