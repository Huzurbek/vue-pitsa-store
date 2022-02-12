<template>
  <div class="your-order-box">
    <div style="display: flex; align-items: center">
      <img :src="require(`@/assets/${items.image}`)" alt="Pizza Picture">
      <div class="description">
        <div class="product-name">{{  items.name }}</div>
        <div class="product-size">{{ items.size }}</div>
      </div>
    </div>
    <div class="add-remove-box">
      <Iconca name="Minus" color="#FF7010" :width="8" :height="8" class="icon"/>
      <div class="cuantity">1</div>
      <Iconca name="Plus" color="#FF7010" :width="8" :height="8" class="icon"/>
    </div>
    <div class="product-price">{{ items.price }} ₽</div>
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default {
  components:{
    Iconca
  },
  props:{
    items: {
      type: Object,
      default:()=>{}
    }
  }
}
</script>

<style scoped lang="sass">

.your-order-box
  max-width: 850px
  height: 152px
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 12px
  padding: 16px 24px 16px 16px
  display: flex
  align-items: center
  justify-content: space-between

img
  width: 120px
  height: 120px
  margin-right: 16px
.description
  width: 269px
.product-name
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #191919
  margin-bottom: 8px


.product-size
  font-family: SF Pro Text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  color: #191919

.product-price
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  //display: flex
  //align-items: center
  //text-align: right
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
.cuantity
  font-family: Inter
  font-weight: 600
  font-size: 16px
  line-height: 20px
  color: #FF7010
  user-select: none

//display: flex;
//align-items: center;
//text-align: center;

</style>