<template>
  <div class="form-group" :style="style">
    <Iconca v-if="leftIcon"  color="#FF7010" :name="leftIcon" :height="20" :width="14" style="margin-right: 5px"/>
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default {
  components:{
    Iconca
  },
  name: "Input",
  props:{
    style:{
      type: Object,
      default:()=>{}
    },
    placeholder:{
      type: String,
      default:()=>''
    },
    leftIcon:{
      type: String,
      default:()=>''
    },
    rightIcon:{
      type: String,
      default:()=>''
    }

  }
}
</script>

<style src="./Input.sass" lang="sass" scoped/>
