<template>
  <div class="main">
    <div class="card-container">
<!--      FoodCard with Icon component-->
      <IconCard/>
    </div>
    <div class="card-container">
      <PictureCard v-for="(card,index) in pictureCardItems" :key="card.text" :items="pictureCardItems[index]"/>
    </div>

    <div class="box">
      <div class="title">Проверить адрес доставки</div>
      <!--    input-->
      <Input placeholder="Адрес" left-icon="Location" :style="{marginRight:'20px'}"/>
      <!--    Button Component-->
      <Button text="Проверить" />
    </div>
  </div>
</template>

<script>
import IconCard from "@/components/IconCard/IconCard";
import PictureCard from "@/components/PictureCard/PictureCard";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
export default {
  name: 'HeaderSection',
  components:{
    IconCard,
    PictureCard,
    Input,
    Button,

  },
  data(){
    return {

    pictureCardItems:[
      {
        image: "picture-card-pitsa-plate.png",
        text: "3 средние пиццы от 999 рублей"
      },
      {
        image: "picture-card-pitsa-box.png",
        text: "Кэшбек 10% на самовывоз (доставка)"
      },
      {
        image: "picture-card-pitsa-plate.png",
        text: "3 средние пиццы от 999 рублей"
      },
      {
        image: "picture-card-pitsa-box.png",
        text: "Кэшбек 10% на самовывоз (доставка)"
      }
    ],
    }
  }
}
</script>
<style src="./HeaderSection.sass" lang="sass" scoped />
