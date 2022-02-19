<template>
  <div class="your-order-box">
    <div class="image">
      <img :src="require(`@/assets/${item.image}`)" alt="Pizza Picture">
    </div>

    <div class="content">
      <div class="product-name">{{  item.name }}</div>
      <div class="product-size">{{ item.crust }} тесто, {{ item.size }} см</div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px">
        <div class="add-remove-box">
          <Iconca name="Minus" color="#FF7010" :width="8" :height="8" class="icon" @click.prevent="decQuantity(item.id)" />
          <div class="quantity">{{ quantity }}</div>
          <Iconca name="Plus" color="#FF7010" :width="8" :height="8" class="icon" @click.prevent="incQuantity(item.id)"/>
        </div>
        <div class="product-price">{{ productPrice }} ₽</div>
      </div>
    </div>


  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default {
  components:{
    Iconca
  },
  props:{
    item: {
      type: Object,
      default:()=>{}
    }
  },
  data(){
    return {
      demo: 1,
    }
  },
  computed: {
    quantity(){
      return this.$props.item.quantity
    },
    productPrice(){
      let props = this.$props.item
      return props.price * props.quantity
    }


  },
  methods: {
    incQuantity(val){
      this.$store.commit("incrementQuantity",val)
    },
    decQuantity(val){
      this.$store.commit("decrementQuantity",val)
    }
  }
}
</script>

<style scoped lang="sass">

.your-order-box
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 12px
  padding: 16px 16px 16px 16px
  display: flex

.image
  box-sizing: border-box
  overflow: hidden
  width: 94px
  height: 94px
  margin-right: 16px

img
  width: 94px
  height: 94px

.content
  box-sizing: border-box
  flex: 1

.product-name, .product-size, .product-price, .quantity
  font-family: Inter

.product-name, .product-price, .cuantity
  font-weight: 600
  font-size: 16px
  line-height: 20px

.product-name
  margin-bottom: 8px
  color: #191919

.product-size
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #191919

.product-price
  color: #FF7010

.add-remove-box
  width: 92px
  height: 36px
  background: #FFEEE2
  border-radius: 6px
  padding: 8px
  box-sizing: border-box
  display: flex
  justify-content: space-between
  align-items: center

.icon
  cursor: pointer
.quantity
  color: #FF7010
  user-select: none

</style>