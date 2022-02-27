<template>
  <div class="your-order-box">
    <div class="image" :class="{'max-img': large}">
      <img :src="require(`@/assets/${item.image}`)" :class="{'max-img': large}" alt="Pizza Picture">
    </div>
    <div class="content" :class="{'max-content': large}" >
      <div>
        <div class="product-name" :class="{'max-product-name': large}">{{  item.name }}</div>
        <div v-if="item.crust !== ''&& item.size !==0" class="product-size" :class="{'max-product-size': large}">
          {{ item.crust }} тесто, {{ item.size }} см
        </div>
      </div>
      <div class="footer-wrap" :class="{'max-footer-wrap': large}">
        <div class="add-remove-box">
          <Iconca name="Minus" color="#FF7010" :width="8" :height="8" class="icon" @click.prevent="decQuantity(item.id)" />
          <div class="quantity">{{ quantity }}</div>
          <Iconca name="Plus" color="#FF7010" :width="8" :height="8" class="icon" @click.prevent="incQuantity(item.id)"/>
        </div>
        <div class="product-price" :class="{'max-product-price': large}">{{ item.price }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default {
  components:{ Iconca },
  props:{
    item: {
      type: Object,
      default:()=>{}
    },
    large: {
      type: Boolean,
      default:()=>false
    }
  },
  data(){
    return {

    }
  },
  computed: {
    quantity(){
      return this.item.quantity
    },
  },
  methods: {
    incQuantity(val){
      this.$emit('increment',val)
    },
    decQuantity(val){
      this.$emit('decrement',val)
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
  display: flex
  flex-direction: column
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
  user-select: none

.footer-wrap
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 12px
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


//Max card style
.max-img
  width: 120px
  height: 120px
.max-product-name, .max-product-price
  font-size: 20px
  line-height: 28px
.max-product-size
  font-family: SF Pro Text
  font-size: 16px
  line-height: 22px
.max-content
  flex-direction: row
  justify-content: space-between
  align-items: center
.max-footer-wrap
  width: 191px
  margin-top: 0
</style>