<template>
  <div v-for="card in iconCardItems" :key="card.title" >
    <div
      class="card"
      @click="selectPath(card.hashId)"
    >
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
          title: "Акции",
          hashId: "#promotion"
        },
        {
          icon: "Pizza",
          iconColor: "#FF7010",
          iconWidth: 33,
          iconHeight: 32,
          title: "Пицца",
          hashId: "#pizza"
        },
        {
          icon: "Sushi",
          iconWidth: 33,
          iconHeight: 20,
          iconColor: "#FF7010",
          title: "Суши",
          hashId: "#sushi"
        },
        {
          icon: "Drinks",
          iconWidth: 19,
          iconHeight: 32,
          iconColor: "#FF7010",
          title: "Напитки",
          hashId: "#drinks"
        },
        {
          icon: "Firee",
          iconWidth: 27,
          iconHeight: 32,
          iconColor: "#FF7010",
          title: "Закуски",
          hashId: "#snacks"
        },
        {
          icon: "Combo",
          iconWidth: 23,
          iconHeight: 24,
          iconColor: "#FF7010",
          title: "Комбо",
          hashId: "#combo"
        },
        {
          icon: "Desert",
          iconWidth: 27,
          iconHeight: 32,
          iconColor: "#FF7010",
          title: "Десерты",
          hashId: "#desserts"
        },
        {
          icon: "Sous",
          iconWidth: 33,
          iconHeight: 20,
          iconColor: "#FF7010",
          title: "Соусы",
          hashId: "#sauces"
        }
      ],
    }
  },
  methods:{
    selectPath(value){
      this.$router.push({ path: '/', hash: value })
    }
  }
}
</script>
<style src="./IconCard.sass" lang="sass" scoped/>
