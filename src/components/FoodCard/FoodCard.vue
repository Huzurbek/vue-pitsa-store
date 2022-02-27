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
        <Button text="Выбрать" @click="chooseProduct"/>
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
    chooseProduct(){
    this.$emit('chooseProduct')
    }
  }
}
</script>
<style src="./FoodCard.sass" lang="sass" scoped/>
