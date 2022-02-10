<template>
  <div class="topic">Пицца</div>
  <div class="pizza-container">
<!--    Component Card-->
    <Card  v-for="(item, index) in pizzas" :key="index" :items="pizzas[index]" class="card-style"/>
  </div>
</template>

<script>
import Card from "@/components/Card/Card";
import { mapState } from 'vuex'
export default {
  components:{
    Card
  },
  computed: {
    ...mapState({
      pizzas: state => state.pizzas,
    })
  }
}
</script>

<style scoped lang="sass">
.topic
  padding: 30px 0 32px 0
  font-family: Inter
  font-weight: 600
  font-size: 40px
  line-height: 48px
  display: flex
  align-items: center
  color: #191919

.pizza-container
  display: flex
  justify-content: space-between
  flex-flow: row wrap

.card-style
  margin-bottom: 30px
</style>