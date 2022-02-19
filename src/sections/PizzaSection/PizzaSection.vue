<template>
  <div class="topic">Пицца</div>
  <div class="pizza-container">
<!--    Component FoodCard-->
    <FoodCard  v-for="(item, index) in products" :key="index" :items="products[index]" @chooseProduct="chooseProduct(item)" class="card-style"/>
  </div>
<!--  Modal Section-->
  <Modal v-if="modal" @close="modal = false" :selected-product="selectedProduct"/>
</template>

<script>
import FoodCard from "@/components/FoodCard/FoodCard";
import Modal from "@/sections/Modal";
import { mapState } from 'vuex'
export default {
  components:{
    FoodCard,
    Modal
  },
  data(){
    return {
      modal: false,
      selectedProduct:{},
    }
  },
  computed: {
    ...mapState({
      products: state => state.products,
    })
  },
  methods: {
    chooseProduct(val){
      this.selectedProduct = val
      this.modal = true
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