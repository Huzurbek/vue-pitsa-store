<template>
  <div class="radio-form-group">
    <div v-for="(item,index) of radioObject" :key="index" class="radio-style">
      <input
          class="custom-radio"
          type="radio"
          :id="item.radioId"
          :value="item.value"
          :checked="item.value === modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          />
      <label :for="item.radioId">{{ item.placeholder }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    radioObject:{
      type: Object,
      default: ()=>{}
    },
    modelValue: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  data(){
    return {

    }
  },


}
</script>

<style scoped lang="sass">

.radio-form-group
  display: flex
  width: 100%
  flex: 1
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 6px
  box-sizing: border-box
  height: 48px

.radio-style
  display: flex
  flex: 1

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
  font-family: SF Pro Text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  cursor: pointer

.custom-radio:checked + label
  background: #FF7010
  color: #FFFFFF

</style>