<template>
  <NavigationSection/>
  <div class="container">
    <HeaderSection/>

    <PizzaSection/>

    <SushiSection/>

  </div>
  <FooterSection/>
</template>

<script>
import NavigationSection from "@/sections/NavigationSection/NavigationSection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import PizzaSection from "@/sections/PizzaSection/PizzaSection";
import SushiSection from "@/sections/SushiSection/SushiSection";
import FooterSection from "@/sections/FooterSerction/FooterSection";

export default {
  name: 'Main',
  components:{
    NavigationSection,
    HeaderSection,
    PizzaSection,
    FooterSection,
    SushiSection
  }
}
</script>

<style scoped lang="sass">

.container
  border: 1px solid red
  border-top: none
  border-bottom: none
  max-width: 1290px
  margin:  0 auto
  padding-top: 31px

  min-height: 1000px



</style>
