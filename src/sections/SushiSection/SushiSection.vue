<template>
  <div class="topic">
    Суши
  </div>
  <div class="sushi-container">
<!--  Card Component-->
    <Card v-for="(item, index) in sushes" :key="index" :items="sushes[index]" class="card-style"/>
  </div>
</template>

<script>
import Card from "@/components/Card/Card";
import { mapState } from 'vuex';
export default {
  name: 'SushiSection',
  components:{
    Card
  },
  computed: {
    ...mapState({
      sushes: state => state.sushes
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

.sushi-container
  display: flex
  justify-content: space-between
  flex-flow: row wrap

.card-style
  margin-bottom: 30px
</style>