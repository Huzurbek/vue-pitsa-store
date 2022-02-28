<template>
  <div class="cycle-form-group">
    <div  v-for="(item,index) in cycleRadioObject"
          :key="index"
      style="display: flex; margin-right: 24px">
      <input class="custom-radio" type="radio" :id="item.cycleId" :value="item.value" v-model="selected" @click="sendVal(item.value)">
      <label :for="item.cycleId">{{item.placeholder}}</label>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    cycleRadioObject:{
      type: Object,
      default:()=>{}
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

.cycle-form-group input[type="radio"]
  /* remove standard background appearance */
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  /* create custom radiobutton appearance */
  //display: inline-block
  width: 16px
  height: 16px
  padding: 2px
  border: 2px solid #A5A5A5
  box-sizing: border-box
  background: #FFFFFF
  border-radius: 50px
  margin-right: 8px

/* appearance for checked radiobutton */
.cycle-form-group input[type="radio"]:checked
  background-color: #FF7010
  border: 2px solid #FF7010
  background-clip: content-box
  padding: 2px


</style>