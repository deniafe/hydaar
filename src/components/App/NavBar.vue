<template>
  <v-app-bar flat app color="background" dark>
    <div class="d-flex align-center pl-4">
      <v-btn icon outlined>
        <v-icon small color="black">mdi-creation</v-icon>
      </v-btn>

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="@/assets/Bidhaar.png"
        width="150"
        height="200"
      />
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-btn small color="black" text>Home</v-btn>
      <v-btn small color="ptext" text>Shop</v-btn>
      <v-btn small color="black" text>Blog</v-btn>
      <v-btn small color="black" text>Contact</v-btn>
    </div>

    <v-spacer></v-spacer>
    <div class="caption font-weight-bold pr-2 black--text">£ 900.00</div>
    <v-badge dot class="mr-4" color="primary" content="2" overlap>
      <v-btn small icon outlined>
        <v-icon size="16" color="black">mdi-shopping</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style></style>
