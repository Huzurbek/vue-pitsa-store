<template>
<!--  <div id="nav" style="background: #42b983; height: 50px">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link> |-->
<!--    <router-link to="/order">Order</router-link>-->
<!--  </div>-->



  <NavigationSection @openModel="isOpen=true"/>
  <!--YourOrder Modal component-->
  <YourOrderModal :display="isOpen"  @close="isOpen = false"/>

  <div class="container">
      <router-view/>
  </div>

  <FooterSection/>

</template>
<script>
import NavigationSection from "@/sections/NavigationSection/NavigationSection";
import YourOrderModal from "@/sections/YourOrderedModal";
import FooterSection from "@/sections/FooterSerction/FooterSection";
export default {
  components:{
    NavigationSection,
    YourOrderModal,
    FooterSection
  },
  data(){
    return {
      modal: false,
      isOpen: false,
      selectedProduct:{},

    }
  },

}
</script>
<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  //text-align: center;
  color: #2c3e50
  background:  #F9F9F9

.container
  //border: 1px solid red
  border-top: none
  border-bottom: none
  max-width: 1290px
  margin:  0 auto
  padding-top: 31px
  min-height: 1000px

</style>
