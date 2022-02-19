<template>
  <div class="form-group" :style="style">
    <div style="display: flex; align-items: center">
      <Iconca v-if="leftIcon"  color="#FF7010" :name="leftIcon" :height="20" :width="14" style="margin-right: 5px"/>
      <input type="text" :placeholder="placeholder">
    </div>
    <div class="input-btn" v-if="inputBtn">
        <Iconca name="Sending" color="white" :width="18" :height="16"/>
    </div>
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
    },
    inputBtn:{
      type: Boolean,
      default:()=>false
    }

  }
}
</script>

<style src="./Input.sass" lang="sass" scoped/>
