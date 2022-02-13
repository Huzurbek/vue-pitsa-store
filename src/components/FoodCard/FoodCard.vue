<template>
  <div class="card-container">
    <div class="image">
      <img :src="require(`@/assets/${items.image}`)" alt="Pizza Picture">
    </div>

    <div class="card-content">
      <div  style="flex: 1">
        <div class="red-sign" v-if="items.status">{{items.status}}</div>
        <div class="card-title">{{items.name}}</div>
        <div class="car-text">{{items.description}}</div>
      </div>
      <div class="card-footer" >
        <Button text="Выбрать" @click="addToBasket"/>
        <div class="price"><span v-if="items.startingPrice">от</span> {{ items.price }} ₽</div>
      </div>
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
  //align-self: auto
  flex-direction: column
  width: 302px
  //height: 482px
  box-sizing: border-box
  overflow: hidden
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 12px

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
.image
  width: 300px
  height: 300px
  box-sizing: border-box

.card-content
  padding: 16px 20px 20px 20px
  display: flex
  flex-direction: column
  flex: 1
  box-sizing: border-box
  text-align: left

.card-title, .car-text, .price
  font-family: SF Pro Text
  color: #191919

.card-title
  display: flex
  align-items: center
  font-weight: 600
  font-size: 18px
  line-height: 24px
  white-space: pre-wrap
  margin-bottom: 12px

.car-text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  margin-bottom: 16px

.price
  font-weight: 600
  font-size: 18px
  line-height: 24px
  color: #FF7010

.card-footer
  display: flex
  justify-content: space-between
  align-items: center
  //width: 100%




</style>