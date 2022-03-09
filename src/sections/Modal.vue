<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="red-sign" v-if="selectedProduct.status">{{selectedProduct.status}}</div>
      <div class="image">
        <img :src="require(`@/assets/${selectedProduct.image}`)" alt="Product Picture">
      </div>

      <div class="description" style="flex: 1; max-width: 480px" >
        <div class="pizza-name">
          <Iconca name="smallSale" color="#E23535" :width="18" :height="24" style="margin-right: 11px"/>
          {{ selectedProduct.name }}
        </div>
<!--Toppings-->
        <div class="toppings">
          <div class="blog" v-for="(item, index) in selectedProduct.toppings" :key="index">

            <div class="icon-box">
              <div class="close-sign" v-if="!item.inStock">
                <Iconca name="CircleClose" color="#A5A5A5" :width="16" :height="16"/>
              </div>

              <Iconca :name="item.icon" :color="item.inStock ? '#FF7010':'#A5A5A5'" :width="item.width" :height="item.height"/>
            </div>
            <div class="blog-title">{{ item.toppingName }}</div>
          </div>
        </div>
<!--    Crust Part    -->
        <RadioInput  :radio-object="crustOptions" v-model="selectedCrust"/>
<!--    Size Part    -->
        <RadioInput  :radio-object="sizeOptions" v-model="selectedSize" style="margin-top: 16px"/>
<!--Adding Toppings to Pizza-->
        <div class="adding-title">Добавьте в пиццу</div>
        <div class="toppings">
          <div class="blog" v-for="(item, index) in paidToppings" :key="index">
            <div class="icon-box" @click="addTopping(item)" :style="selectedProduct.additionalToppings.filter(el=>el.toppingName === item.toppingName).length ? 'border: 1px solid #FF7010':''">
              <div style="position: absolute; top:8px; right: 8px" v-if="selectedProduct.additionalToppings.filter(el=>el.toppingName === item.toppingName).length">
                <Iconca name="CircleClick" color="#FF7010" :width="16" :height="16"/>
              </div>
              <Iconca :name="item.icon" color="#FF7010" :width="item.width" :height="item.height"/>
            </div>
            <div class="blog-title">{{ item.toppingName }}</div>
            <div class="topping-price">{{ item.price }} ₽</div>
          </div>
        </div>
<!--     Footer Part   -->
        <div class="modal-footer">
          <div class="total-sum" style="display: flex; align-items: center">
            <div class="sum">Итого: {{ productPrice }} ₽</div>
            <div class="gramm">400 г</div>
          </div>
          <Button text="Добавить" @click="addToBasket"/>
        </div>
      </div>
      <div class="close-btn">
        <Iconca @click="closeModal" name="Close" color="white" :width="32" :height="32"/>
      </div>
    </div>
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
import Button from "@/components/Button/Button";
import IDGenerator from "@/helpers/uniqueId.js";
import RadioInput from "@/components/RadioInput/RadioInput";
export default {
  components:{
    Iconca,
    Button,
    RadioInput
  },
  props: {
    selectedProduct:{
      type: Object,
      default:()=>{}
    }
  },
  data(){
    return {
      selectedCrust: 'thin',
      selectedSize: '28',
      paidToppings: [
        {
          id: 1,
          icon: 'MozarellaCheese',
          width: 41,
          height: 35,
          toppingName: 'Моцарелла',
          price: 59
        },
        {
          id: 2,
          icon: 'Mashroom',
          width: 105,
          height: 105,
          toppingName: 'Шампиньоны',
          price: 59
        },
        {
          id: 3,
          icon: 'Onion',
          width: 28,
          height: 40,
          toppingName: 'Красный лук',
          price: 59
        },
        {
          id: 4,
          icon: 'BellPapper',
          width: 35,
          height: 41,
          toppingName: 'Сладкий перец',
          price: 59
        }
      ],
      crustOptions:[
        {
          radioId: 'firstCrust',
          value: 'traditional',
          placeholder: 'Традиционное'
        },
        {
          radioId: 'secondCrust',
          value: 'thin',
          placeholder: 'Тонкое'
        },
      ],
      sizeOptions:[
        {
          radioId: 'firstSize',
          value: '20',
          placeholder: '20 см'
        },
        {
          radioId: 'secondSize',
          value: '28',
          placeholder: '28 см'
        },
        {
          radioId: 'thirdSize',
          value: '33',
          placeholder: '33 см'
        },
      ]
    }
  },

  computed:{
    productPrice(){
      return this.selectedProduct.additionalToppings.reduce((total,el)=>{
         return total += el.price
      },this.selectedProduct.price)
    }
  },
  methods:{
    addTopping(val){
      this.$store.commit('addTopping',{id:this.selectedProduct.id,value:val})
    },
    addToBasket(){
      let props = this.selectedProduct;
      const product = {
            ...props,
            id: IDGenerator.uniqueId(),
            crust: this.crust,
            size: this.PizzaSize,
            price: this.productPrice,
            startingPrice: true,
            status: 'NEW',
            quantity: 1
          }
      this.$store.commit('addToBasket',product)
      this.closeModal()
    },
    closeModal(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="sass">
.modal
  //position: fixed /* Stay in place */
  //z-index: 1 /* Sit on top */
  //padding-top: 100px /* Location of the box */
  overflow: auto /* Enable scroll if needed */
  position: fixed
  z-index: 1000
  width: 100%
  height: 100%
  left: 0
  top: 0
  background: rgba(25, 25, 25, 0.4)
  backdrop-filter: blur(32px)

/* Modal Content */
.modal-content
  position: absolute
  width: 1070px
  height: 680px
  left: 20px
  top: 20px
  background: #FFFFFF
  border-radius: 24px
  padding: 32px 20px 0 60px
  box-sizing: border-box
  display: flex
  justify-content: space-between
  align-items: center
.red-sign
  position: absolute
  top: 32px
  left: 0
  width: 82px
  height: 40px
  border-top-right-radius: 6px
  border-bottom-right-radius: 6px
  background: #E23535
  display: flex
  justify-content: center
  align-items: center
  color: #FFFFFF
  font-family: SF Pro Text
  font-weight: normal
  font-size: 18px
  line-height: 24px

img
  width: 450px
  height: 450px

.pizza-name
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #191919
  display: flex
  align-items: center
  margin-bottom: 16px

.toppings
  display: flex
  justify-content: space-between
  box-sizing: border-box
  margin-bottom: 24px

.blog
  width: 105px
  box-sizing: border-box

.icon-box
  position: relative
  width: 105px
  height: 105px
  box-sizing: border-box
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 12px
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 8px
  cursor: pointer
.close-sign
  position: absolute
  top: 8px
  right: 8px

.blog-title
  margin-bottom: 4px
.blog-title, .topping-price
  white-space: pre-wrap
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #191919
  //display: flex;
  //align-items: center;
  text-align: center
.topping-price
  font-weight: 600
  color: #FF7010

  //Adding toppings to pizza
.adding-title
  font-family: Inter
  font-weight: 600
  font-size: 16px
  line-height: 20px
  color: #191919
  margin-top: 8px
  margin-bottom: 16px
//display: flex;
//align-items: center;

//Crust Part
.crust, .size
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 6px
  margin-bottom: 16px
  display: flex
  align-items: center


//Footer Part
.modal-footer
  display: flex
  justify-content: space-between

.sum
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #FF7010
  margin-right: 12px
//display: flex
//align-items: center
.gramm
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #A5A5A5
.close-btn
  position: absolute
  right: -62px
  top: 0
  cursor: pointer

//Input style
//.crust-form-group, .size-form-group
//  display: flex
//  width: 480px
//  background: #FFFFFF
//  border: 1px solid #F0F0F0
//  border-radius: 6px
//  box-sizing: border-box
//  height: 48px
//  margin-bottom: 16px
//
//.size-form-group
//  height: 44px
//
//.custom-radio
//  display: none
//
//.custom-radio + label
//  -webkit-appearance: none
//  display: flex
//  justify-content: center
//  align-items: center
//  background-color: #FFFFFF
//  border-radius: 6px
//  width: 100%
//  color: #191919
//  font-family: SF Pro Text
//  font-weight: normal
//  font-size: 16px
//  line-height: 22px
//  cursor: pointer
//
//.custom-radio:checked + label
//  background: #FF7010
//  color: #FFFFFF

</style>