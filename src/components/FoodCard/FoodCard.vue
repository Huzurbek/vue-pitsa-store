<template>
  <div class="card-container">
    <div class="image">
      <img :src="require(`@/assets/${items.image}`)" alt="Pizza Picture">
    </div>

    <div class="card-content">
      <div  class="card-content-ins">
        <div class="red-sign" v-if="items.status">{{items.status}}</div>
        <div class="card-title">{{items.name}}</div>
        <div class="card-text">{{items.description}}</div>
      </div>
      <div class="card-footer" >
        <Button
            :text="windowWidth > 540 ? 'Выбрать' : 'от ' + items.price + ' ₽' "
            fit
            @click="chooseProduct"
        />
        <div v-if="windowWidth > 540" class="price"><span v-if="items.startingPrice">от</span> {{ items.price }} ₽</div>
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
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
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
