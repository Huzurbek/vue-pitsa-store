<template>
  <NavigationSection @openModel="isOpen=true"/>
  <div class="container">
    <HeaderSection/>

    <PizzaSection @openModal="openModal"/>

    <SushiSection/>

    <Modal v-if="modal" @close="modal = false" :selected-product="selectedProduct"/>
    <p>selected:{{selectedProduct}}</p>
<!--YourOrder Modal component-->
    <YourOrderModal :display="isOpen"  @close="isOpen = false"/>

  </div>
  <FooterSection/>
</template>

<script>
import NavigationSection from "@/sections/NavigationSection/NavigationSection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import PizzaSection from "@/sections/PizzaSection/PizzaSection";
import SushiSection from "@/sections/SushiSection/SushiSection";
import FooterSection from "@/sections/FooterSerction/FooterSection";
import Modal from "@/sections/Modal";
import YourOrderModal from "@/sections/YourOrderModal";

export default {
  name: 'Main',
  components:{
    NavigationSection,
    HeaderSection,
    PizzaSection,
    FooterSection,
    SushiSection,
    Modal,
    YourOrderModal
  },
  data(){
    return {
      modal: false,
      isOpen: false,
      selectedProduct:{},

    }
  },
  methods:{
    openModal(val){

      this.selectedProduct = val

      this.modal = true
    }
  }
}
</script>

<style scoped lang="sass">

.container
  //border: 1px solid red
  border-top: none
  border-bottom: none
  max-width: 1290px
  margin:  0 auto
  padding-top: 31px
  min-height: 1000px




</style>
