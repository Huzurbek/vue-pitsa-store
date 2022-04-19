<template>
  <div class="topic" id="desserts">
    Десерты
  </div>
  <div class="dessert-container">
    <!--  FoodCard Component-->
    <Card v-for="(item, index) in desserts" :key="index" :items="desserts[index]" />
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
      desserts: state => state.desserts
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

.dessert-container
  display: grid
  grid-template-columns: repeat(4,1fr)
  grid-column-gap: 30px
  grid-row-gap: 30px


</style>