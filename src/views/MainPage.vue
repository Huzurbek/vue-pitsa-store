<template>
    <HeaderSection/>
    <PizzaSection />
    <SushiSection/>
</template>

<script>
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import PizzaSection from "@/sections/PizzaSection/PizzaSection";
import SushiSection from "@/sections/SushiSection/SushiSection";
export default {
  name: 'Main',
  components:{
    HeaderSection,
    PizzaSection,
    SushiSection,
  },
  data(){
    return {
      isOpen: false,
    }
  },

}
</script>

<style scoped lang="sass">




</style>
