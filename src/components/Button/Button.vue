<template>
 <div class="buttonWrapper" :style="{
   ...style,
   width:full?'auto':'fit-content',
   minWidth: fit?'auto':'150px'
 }">
  <Iconca v-if="leftIcon" color="white" :name="leftIcon" :width="iconWidth" :height="iconWidth" style="margin-right: 8px"/>
   <span v-if="text">{{text}}</span>
   <Iconca v-if="rightIcon" color="white" :name="rightIcon" :width="iconWidth" :height="iconWidth" />
 </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default{
  components:{
    Iconca
  },
  props:{
    style:{
      type:Object,
      default:()=>{}
    },
    text:{
      type:String,
      default:()=>''
    },
    fit:{
      type:Boolean,
      default:false
    },
    full:{
      type:Boolean,
      default:false
    },
    leftIcon:{
      type:String,
      default:()=>''
    },
    rightIcon:{
      type:String,
      default:()=>''
    },
    iconHeight: {
      type: Number,
      default:()=>8
    },
    iconWidth: {
      type: Number,
      default:()=>8
    },
  },
  data(){
    return{

    }
  },

}
</script>
<style src="./Button.sass" lang="sass" scoped/>