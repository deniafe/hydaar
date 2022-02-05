<template>
  <div>
    <v-card class="rounded-xl" height="400" width="300">
      <div id="inner" class="pt-8">
        <div style="position: absolute; top: 50px; width: 100%;">
          <v-card
            height="100"
            width="200"
            :color="product.color"
            class="mx-auto rounded-xl"
          >
            <div
              style="width: 50%; height: 100%; border-width: 2px; border-color: #ffebc1;"
              class="mx-auto rounded-circle primary text-center blue--text"
            >
              <v-img
                alt="Vuetify Name"
                class="shrink"
                contain
                min-width="100"
                src="@/assets/Bidhaar.png"
                width="150"
                height="100"
              />
            </div>
          </v-card>
        </div>
        <div class="pl-12 pt-12">
          <v-img
            height="250"
            width="200"
            aspect-ratio="1.7"
            contain
            :src="product.image"
          ></v-img>
          <!-- <img
            :src="product.image"
            alt="Girl in a jacket"
            width="200"
            height="250"
          /> -->
        </div>
        <div class="blue--text font-weight-bold text-center">
          {{ product.name }}
        </div>
        <div class="blue--text font-weight-bold text-center">
          {{ product.price }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
#inner {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgb(254, 202, 168);
  background: radial-gradient(
    circle,
    rgba(254, 202, 168, 1) 0%,
    rgba(255, 251, 248, 1) 100%
  );
}
</style>
