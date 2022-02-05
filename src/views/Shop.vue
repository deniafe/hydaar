<template>
  <div style="position: relative;">
    <Header />
    <ShowCase />
  </div>
</template>

<script>
import Header from '@/components/App/Header'
import ShowCase from '@/components/App/ShowCase'
export default {
  name: 'shop',
  components: {
    Header,
    ShowCase,
  },
}
</script>
