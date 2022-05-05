<template>
  <div class="topic" id="snacks">
    Закуски
  </div>
  <div class="snack-container">
    <!--  FoodCard Component-->
    <Card v-for="(item, index) in snacks" :key="index" :items="snacks[index]" />
  </div>
</template>

<script>
import Card from "@/components/FoodCard/FoodCard";
import { mapState } from 'vuex';
export default {
  name: 'SnackSection',
  components:{
    Card
  },
  computed: {
    ...mapState({
      snacks: state => state.snacks
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

.snack-container
  display: grid
  grid-template-columns: repeat(4,1fr)
  grid-column-gap: 30px
  grid-row-gap: 30px

/*Mobile Version*/
@media screen and (max-width: 540px)
  .topic
    font-size: 28px
    line-height: 32px
    padding-bottom: 20px
  .snack-container
    grid-template-columns: repeat(1,1fr)
    grid-row-gap: 12px

</style>