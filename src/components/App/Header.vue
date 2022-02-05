<template>
  <div style="position: absolute; width: 100%;">
    <v-card height="400" color="primary" class="rounded-xl mx-12 mt-6 pt-6">
      <v-row>
        <v-col cols="4">
          <v-breadcrumbs :items="items"></v-breadcrumbs>
        </v-col>
        <v-col cols="4">
          <div class="text-center text-h4 black-text font-weight-black">
            Shop
          </div>
        </v-col>
        <v-col cols="4">
          <v-row class="mx-4">
            <v-col cols="6">
              <div class="caption font-weight-bold pt-3">
                Showing 1 - 12 of 100
              </div>
            </v-col>
            <v-col cols="6">
              <v-select
                background-color="accent"
                :items="items"
                label="Categories Sorting"
                height="20"
                flat
                dense
                solo
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Shop',
        disabled: false,
        href: '/shop',
      },
      {
        text: 'Product',
        disabled: false,
        href: 'product',
      },
    ],
  }),
}
</script>

<style></style>
