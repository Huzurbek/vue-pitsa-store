<template>
  <div class="form-group" :style="style">
    <div style="display: flex; align-items: center; flex: 1">
      <Iconca v-if="leftIcon"  color="#FF7010" :name="leftIcon" :height="20" :width="14" style="margin-right: 5px"/>
      <input
          type="text"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          @blur="$emit('blur')"/>
      <Iconca v-if="rightIcon"  color="#A5A5A5" :name="rightIcon" :width="iconWidth" :height="iconHeight"  style="margin-right: 16px;"/>
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
    iconHeight: {
      type: Number,
      default:()=>8
    },
    iconWidth: {
      type: Number,
      default:()=>8
    },
    inputBtn:{
      type: Boolean,
      default:()=>false
    },
    modelValue: {
      type: String
    }

  },

  emits: ['update:modelValue','blur']
}
</script>

<style src="./Input.sass" lang="sass" scoped/>
