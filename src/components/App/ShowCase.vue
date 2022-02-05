<template>
  <div class="mt-12 pt-12">
    <v-row class="mt-12 pt-12 mx-12 px-12">
      <v-col v-for="(product, num) in products" :key="num" cols="4">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from '@/components/App/ProductCard'
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          name: 'Bidharr Tank Gown - Black',
          image: require('@/assets/tanktopblack.png'),
          color: '#ff6b01',
          price: '£ 200.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidhaar Tank Gown - White',
          image: require('@/assets/tanktopwhite.png'),
          color: '#ff6b01',
          price: '£ 200.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Sweat Shirt - Gold',
          image: require('@/assets/sweatshirtgold.png'),
          color: '#ff6b01',
          price: '£ 200.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Sweat Shirt - Brown',
          image: require('@/assets/sweatshirtbrown.png'),
          color: '#ff6b01',
          price: '£ 200.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Sweat Shirt - Black',
          image: require('@/assets/sweatshirtblack.png'),
          color: '#fff',
          price: '£ 200.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Tank Gown',
          image: require('@/assets/tanktopwhite.png'),
          color: '#ff6b01',
          price: '£ 200.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Hoodie - Blue',
          image: require('@/assets/hoodieblue.png'),
          color: '#ff6b01',
          price: '£ 100.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Hoodie - Black',
          image: require('@/assets/hoodieblack.png'),
          color: 'blue',
          price: '£ 100.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Hoodie - White',
          image: require('@/assets/hoodiewhite.png'),
          color: '#ff6b01',
          price: '£ 100.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Mask - Black',
          image: require('@/assets/facemaskblack.png'),
          color: '#fff',
          price: '£ 50.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Mask - Blue',
          image: require('@/assets/facemaskblue.png'),
          color: 'blue',
          price: '£ 50.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Mask - Red',
          image: require('@/assets/facemaskred.png'),
          color: '#fff',
          price: '£ 50.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Lotion',
          image: require('@/assets/makeupyellow.png'),
          color: '#fff',
          price: '£ 500.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Body Cream',
          image: require('@/assets/creamblack.png'),
          color: '#ff6b01',
          price: '£ 500.00',
          size: '12',
          category: 'Beauty',
        },
        {
          name: 'Bidharr Hoodie - Gold',
          image: require('@/assets/hoodieyellow.png'),
          color: '#fff',
          price: '£ 100.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Hoodie - Red',
          image: require('@/assets/hoodiered.png'),
          color: '#01af67',
          price: '£ 100.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Mask - White',
          image: require('@/assets/facemaskwhite.png'),
          color: '#ff6b01',
          price: '£ 50.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Mask - Gold',
          image: require('@/assets/facemaskyellow.png'),
          color: 'black',
          price: '£ 50.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Face Mask - Black',
          image: require('@/assets/facemaskblack2.png'),
          color: '#fff',
          price: '£ 50.00',
          size: '12',
          category: 'Apparel',
        },
        {
          name: 'Bidharr Pillow - Black',
          image: require('@/assets/pillowblack.png'),
          color: '#fff',
          price: '£ 200.00',
          size: '12',
          category: 'Other',
        },
        {
          name: 'Bidharr Pillow - Gold',
          image: require('@/assets/pillowyellow.png'),
          color: '#fff',
          price: '£ 200.00',
          size: '12',
          category: 'Other',
        },
      ],
    }
  },
}
</script>

<style></style>
