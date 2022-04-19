<template>
  <div >
    <HeaderSection/>
<!--    <router-link :to="{ path: '/', hash: '#sushi' }">test</router-link>-->
<!--    <router-link :to="{ path: '/', hash: '#hed' }">test</router-link>-->

    <PizzaSection/>
    <SushiSection/>
    <SnackSection/>
    <DessertSection/>
    <DrinkSection/>
  </div>
</template>

<script>
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import PizzaSection from "@/sections/PizzaSection/PizzaSection";
import SushiSection from "@/sections/SushiSection/SushiSection";
import SnackSection from "@/sections/SnackSection/SnackSection";
import DessertSection from "@/sections/DessertSection/DessertSection";
import DrinkSection from "@/sections/DrinkSection/DrinkSection";
export default {
  name: 'Main',
  components:{
    HeaderSection,
    PizzaSection,
    SushiSection,
    SnackSection,
    DessertSection,
    DrinkSection
  },
  data(){
    return {
      isOpen: false,
    }
  },
  methods: {

  }

}
</script>

<style scoped >

</style>
