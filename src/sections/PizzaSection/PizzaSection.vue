<template>
  <div class="topic">Пицца</div>
  <div class="pizza-container">
<!--    Component FoodCard-->
    <FoodCard  v-for="(item, index) in products" :key="index" :items="products[index]" @click="chooseProduct(item)" class="card-style"/>
  </div>
</template>

<script>
import FoodCard from "@/components/FoodCard/FoodCard";
import { mapState } from 'vuex'
export default {
  components:{
    FoodCard
  },
  computed: {
    ...mapState({
      products: state => state.products,
    })
  },
  methods: {
    chooseProduct(val){
      console.log('bus ket is wroki',val.title)
      this.$emit('openModal', val)
      // this.$store.commit('addToBasket',val.price)

    }
  }
}
</script>

<style scoped lang="sass">
.topic
  padding: 30px 0 32px 0
  font-family: Inter
  font-weight: 600
  font-size: 40px
  line-height: 48px
  display: flex
  align-items: center
  color: #191919

.pizza-container
  display: flex
  justify-content: space-between
  flex-flow: row wrap

.card-style
  margin-bottom: 30px
</style>