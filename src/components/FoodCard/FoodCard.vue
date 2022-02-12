<template>
  <div class="card-container">
    <img :src="require(`@/assets/${items.image}`)" alt="Pizza Picture">
    <div class="red-sign" v-if="items.sign">{{items.sign}}</div>
    <div class="card-title">{{items.title}}</div>
    <div class="car-text">{{items.text}}</div>
    <div class="card-footer">
      <Button text="Выбрать" @click="addToBasket"/>
      <div class="price"><span v-if="items.startingPrice">от</span> {{ items.price }} ₽</div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  components: {
    Button
  },
  props: {
    items:{
      type: Object,
      default:()=>{}
    }
  },
  methods: {
    addToBasket(){
    this.$emit('fromBasket')
    }
  }
}
</script>

<style scoped lang="sass">
.card-container
  position: relative
  display: flex
  flex-direction: column
  justify-content: end
  width: 300px
  height: 482px
  box-sizing: border-box
  overflow: hidden
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 12px
  padding: 20px

img
  position: absolute
  top: 0
  left: 0

.card-title, .car-text, .price
  font-family: SF Pro Text
  color: #191919

.red-sign
  position: absolute
  top: 20px
  left: 0
  width: 65px
  height: 32px
  border-top-right-radius: 6px
  border-bottom-right-radius: 6px
  background: #E23535
  display: flex
  justify-content: center
  align-items: center
  color: #FFFFFF
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px

.card-title
  //height: 48px
  font-weight: 600
  font-size: 18px
  line-height: 24px
  white-space: pre-wrap

.car-text
  height: 44px
  margin-top: 12px
  font-weight: normal
  font-size: 16px
  line-height: 22px

.price
  font-weight: 600
  font-size: 18px
  line-height: 24px
  color: #FF7010

.card-footer
  display: flex
  align-items: center
  justify-content: space-between
  margin-top: 29px


</style>