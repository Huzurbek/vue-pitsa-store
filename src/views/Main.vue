<template>
  <NavigationSection/>
  <div class="container">
    <HeaderSection/>

    <PizzaSection @openModal="openModal"/>

    <SushiSection/>

    <Modal v-if="modal" @close="modal = false" :selected-product="selectedProduct"/>
    <p>selected:{{selectedProduct}}</p>



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

export default {
  name: 'Main',
  components:{
    NavigationSection,
    HeaderSection,
    PizzaSection,
    FooterSection,
    SushiSection,
    Modal
  },
  data(){
    return {
      modal: false,
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


//Input style
.form-group
  display: flex
  width: 480px
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 6px
  box-sizing: border-box

.custom-radio
  display: none

.custom-radio + label
  -webkit-appearance: none
  display: flex
  justify-content: center
  align-items: center
  background-color: #FFFFFF
  border-radius: 6px
  width: 100%
  color: #191919
  height: 48px
  font-family: SF Pro Text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  cursor: pointer

.custom-radio:checked + label
  background: #FF7010
  color: #FFFFFF



</style>
