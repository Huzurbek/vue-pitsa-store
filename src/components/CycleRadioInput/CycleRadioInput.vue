<template>
  <div class="cycle-form-group" v-if="cycleRadioObject">
    <div v-for="(item,index) in cycleRadioObject"
          :key="index"
      style="display: flex; margin-right: 24px">
      <input  type="radio" :id="item.cycleId" :value="item.value" v-model="selected" @click="sendVal(item.value)">
      <label :for="item.cycleId">{{item.placeholder}}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cycleRadioObject:{
      type: Object,
      default:()=>null
    },
    text:{
      type: String,
      default:()=>'default text'
    }
  },
  data(){
    return {
      selected: this.cycleRadioObject[0].value
    }
  },
  methods:{
    sendVal(val){
      this.$emit('selectType',val)
      console.log('Cycle radio bosildi')
    }
  }
}
</script>
<style scoped lang="sass">
.cycle-form-group
  display: flex
  flex-direction: row
  align-items: center
  font-family: SF Pro Text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  color: #191919

input[type="radio"]
  display: none

input[type="radio"] + *::before
  content: ""
  display: inline-block
  vertical-align: bottom
  width: 16px
  height: 16px
  margin-right: 8px
  border-radius: 50%
  border: 1.6px solid #A5A5A5

input[type="radio"]:checked + *::before
  background: radial-gradient(#FF7010 0%, #FF7010 40%, transparent 50%, transparent)
  border-color: #FF7010

//input[type="radio"]:checked
//  color: red
//input[type="radio"] + *
//  display: inline-block
//  padding: 0.5rem 1rem
</style>