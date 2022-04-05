<template>
  <div class="order-card">
    <div class="image">
      <img :src="require(`@/assets/${item.image}`)" alt="Pizza Picture">
    </div>
    <div class="content">
      <div style="flex: 1;">
        <div class="card-text">{{item.name}}</div>
        <div class="portion" v-if="item.portion">Порция {{ item.portion }} г</div>
      </div>
      <!--    Component Button-->
      <Button :text="`${item.price} ₽`" class="btn" @click.prevent="addItem(item)" style="height: 40px;"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import IDGenerator from "@/helpers/uniqueId.js"
export default {
  components: {Button},
  props: {
   item: {
     type: Object,
     default: ()=>{}
   }
 },
  methods:{
    addItem(val) {
      const newProduct ={
        ...val,
        id: IDGenerator.uniqueId()
      }
      this.$store.commit("addToBasket",newProduct)
    }
  }
}
</script>

<style scoped lang="sass">
.order-card
  width: 190px
  background: #FFFFFF
  box-sizing: border-box
  border: 1px solid #F0F0F0
  border-radius: 12px
  overflow: hidden
  display: flex
  flex-direction: column
  align-self: auto

img
  width: 190px
  height: 190px
.image
  width: 190px
  height: 190px

.content
  display: flex
  flex-direction: column
  align-items: center
  flex: 1
  padding: 16px
  box-sizing: border-box


.card-text, .portion
  text-align: center
  color: #191919

.card-text
  font-weight: 600
  font-size: 18px
  line-height: 24px
  font-family: SF Pro Text
  white-space: pre-wrap

.portion
  margin-top: 8px
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px

.btn
  margin-top: 12px

</style>