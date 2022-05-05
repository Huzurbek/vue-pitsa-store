<template>
  <div class="topic" id="pizza">
    Пицца
  </div>
  <div class="pizza-container">
<!--    Component FoodCard-->
    <FoodCard
        v-for="(item, index) in products"
        :key="index"
        :items="products[index]"
        @chooseProduct="chooseProduct(item)"
        />
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
  display: grid
  grid-template-columns: repeat(4,1fr)
  grid-column-gap: 30px
  grid-row-gap: 30px

/*Mobile Version*/
@media screen and (max-width: 540px)
  .topic
    font-size: 28px
    line-height: 32px
    padding-bottom: 20px
  .pizza-container
    grid-template-columns: repeat(1,1fr)
    grid-row-gap: 12px
</style>