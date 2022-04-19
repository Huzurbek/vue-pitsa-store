<template>


  <div style="padding-top: 136px">

    <NavigationSection @openModel="isOpen=true"/>
    <!--YourOrder Modal component-->
    <YourOrderModal :display="isOpen"  @close="isOpen = false"/>

    <div class="container" >
      <router-view/>
    </div>

    <FooterSection/>
  </div>



</template>
<script>
import NavigationSection from "@/sections/NavigationSection/NavigationSection";
import YourOrderModal from "@/sections/YourOrderedModal";
import FooterSection from "@/sections/FooterSerction/FooterSection";
import "vue-select/dist/vue-select.css";
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
  min-height: 1000px

//Seleceted Input Style
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu
  font-weight: 400
  font-size: 16px
  line-height: 22px
  color: #394066

.style-chooser .vs__search::placeholder
  color: #A5A5A5

.style-chooser .vs__dropdown-toggle
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 6px
  height: 48px

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator
  fill: #A5A5A5

*:root
  --vs-dropdown-option--active-bg: #FF7010
  --vs-dropdown-option--active-color: #fff

</style>
