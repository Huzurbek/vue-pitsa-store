<template>
  <div v-for="card in iconCardItems" :key="card.title" >
    <div class="card">
      <Iconca :name="card.icon" :color="card.iconColor" :width="card.iconWidth" :height="card.iconHeight" />
      <div class="text-style">
        {{ card.title }}
      </div>
    </div>
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default {
  name: 'IconCard',
  components:{
    Iconca
  },
  props:{
    items: Object
  },
  data(){
    return {
      iconCardItems:[
        {
          icon: "Sale",
          iconColor: "#E23535",
          iconWidth: 25,
          iconHeight: 32,
          title: "Акции"
        },
        {
          icon: "Pizza",
          iconColor: "#FF7010",
          iconWidth: 33,
          iconHeight: 32,
          title: "Пицца"
        },
        {
          icon: "Sushi",
          iconWidth: 33,
          iconHeight: 20,
          iconColor: "#FF7010",
          title: "Суши"
        },
        {
          icon: "Drinks",
          iconWidth: 19,
          iconHeight: 32,
          iconColor: "#FF7010",
          title: "Напитки"
        },
        {
          icon: "Firee",
          iconWidth: 27,
          iconHeight: 32,
          iconColor: "#FF7010",
          title: "Закуски"
        },
        {
          icon: "Combo",
          iconWidth: 23,
          iconHeight: 24,
          iconColor: "#FF7010",
          title: "Комбо"
        },
        {
          icon: "Desert",
          iconWidth: 27,
          iconHeight: 32,
          iconColor: "#FF7010",
          title: "Десерты"
        },
        {
          icon: "Sous",
          iconWidth: 33,
          iconHeight: 20,
          iconColor: "#FF7010",
          title: "Соусы"
        }
      ],
    }
  }
}
</script>
<style src="./IconCard.sass" lang="sass" scoped/>
