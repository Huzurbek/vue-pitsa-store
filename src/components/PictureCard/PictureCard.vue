<template>
  <div v-for="(card, index) in pictureCardItems" :key="index" >
    <div class="card">
      <img :src="require(`@/assets/${card.image}`)" alt="Pizza Picture">
      <div class="text-style">
        {{ card.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PitsaPictureCard',
  // props: {
  //   items: Object
  // },
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

<style src="./PictureCard.sass" lang="sass" scoped />
