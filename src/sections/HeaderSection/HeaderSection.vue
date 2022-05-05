<template>
  <div class="main">
    <div class="small-card-container">
<!--      FoodCard with Icon component-->
      <IconCard/>
    </div>
    <div class="card-container">
      <PictureCard/>
    </div>

    <div class="box">
      <div class="title">Проверить адрес доставки</div>
      <!--    input-->
<!--      v-if="windowWidth > 540"-->
      <Input :input-btn="windowWidth < 540"  placeholder="Адрес" left-icon="Location" :style="{marginRight:'20px'}"/>
      <!--    Button Component-->
      <Button v-if="windowWidth > 540" text="Проверить" />
    </div>
  </div>
</template>

<script>
import IconCard from "@/components/IconCard/IconCard";
import PictureCard from "@/components/PictureCard/PictureCard";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
export default {
  name: 'HeaderSection',
  components:{
    IconCard,
    PictureCard,
    Input,
    Button,

  },
  data(){
    return {


    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
}
</script>
<style src="./HeaderSection.sass" lang="sass" scoped />
