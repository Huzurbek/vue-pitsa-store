<template>
  <div class="topic" id="drinks">
    Напитки
  </div>
  <div class="drinks-container">
    <!--  FoodCard Component-->
    <Card v-for="(item, index) in drinks" :key="index" :items="drinks[index]" />
  </div>
</template>

<script>
import Card from "@/components/FoodCard/FoodCard";
import { mapState } from 'vuex';
export default {
  name: 'DessertSection',
  components:{
    Card
  },
  computed: {
    ...mapState({
      drinks: state => state.drinks
    })
  }

}
</script>

<style scoped lang="sass">
.topic
  padding: 18px 0 30px 0
  font-family: Inter
  font-weight: 600
  font-size: 40px
  line-height: 48px
  display: flex
  align-items: center
  color: #191919

.drinks-container
  display: grid
  grid-template-columns: repeat(4,1fr)
  grid-column-gap: 30px
  grid-row-gap: 30px


</style>