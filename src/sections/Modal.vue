<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="red-sign" v-if="selectedProduct.status">{{selectedProduct.status}}</div>
      <div class="image">
        <img :src="require(`@/assets/${selectedProduct.image}`)" alt="Product Picture">
      </div>

      <div class="description">
        <div class="pizza-name">
          <Iconca name="smallSale" color="#E23535" :width="18" :height="24" style="margin-right: 11px"/>
          {{ selectedProduct.name }}
        </div>
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
        <!--Toppings-->
<!--    Crust Part    -->
        <RadioInput  :radio-object="crustOptions" v-model="selectedCrust" class="additional-radio-class"/>
<!--    Size Part    -->
        <RadioInput  :radio-object="sizeOptions" v-model="selectedSize"/>
<!--Adding Toppings to Pizza-->
        <div class="adding-title">Добавьте в пиццу</div>
        <div class="toppings">
            <div class="blog" v-for="(item, index) in paidToppings" :key="index">
              <div class="icon-box" @click="addTopping(item)" :style="selectedProduct.additionalToppings.filter(el=>el.toppingName === item.toppingName).length ? 'border: 1px solid #FF7010':''">
                <div class="close-sign" v-if="selectedProduct.additionalToppings.filter(el=>el.toppingName === item.toppingName).length">
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
          <div class="total-sum-box">
            <div class="sum">Итого: {{ productPrice }} ₽</div>
            <div class="gramm">400 г</div>
          </div>
          <Button text="Добавить" @click="addToBasket" :fit="isMobile" style="width: 149px" :class="{ 'mobile-button': isMobile }"/>
        </div>
      </div>
      <div class="absolute-line"></div>
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
import { mapGetters } from 'vuex'
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
      selectedCrust: 'Тонкое',
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
          value: 'Традиционное',
          placeholder: 'Традиционное'
        },
        {
          radioId: 'secondCrust',
          value: 'Тонкое',
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
    ...mapGetters(['isMobile']),
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
            crust: this.selectedCrust,
            size: this.selectedSize,
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
  left: 50px
  top: 20px
  width: 1070px
  background: #FFFFFF
  border-radius: 24px
  box-sizing: border-box
  display: flex
  justify-content: space-between
  align-items: center
  padding: 32px 20px 20px 60px

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

.image
  max-width: 450px
  max-height: 450px
img
  width: 450px
  height: 450px

.description
  display: flex
  flex-direction: column
  flex: 1

.pizza-name
  font-family: 'Inter'
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

.additional-radio-class
  margin-bottom: 16px

//Footer Part of Model
.modal-footer
  display: flex
  justify-content: space-between

.modal-footer .total-sum-box
  display: flex
  align-items: center
.modal-footer .sum, .modal-footer .gramm
  font-family: Inter

.modal-footer .sum
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #FF7010
  margin-right: 12px

.modal-footer .gramm
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #A5A5A5

//Modal close Button
.close-btn
  position: absolute
  top: 0
  right: -62px
  cursor: pointer

//Sending Binding class for Button component
.mobile-button
  background: #FF7010
  color: #FFFFFF
  height: 44px
  font-weight: 400

/*MOBILE VERSION */
@media screen and (max-width: 540px)
  .modal-content
    width: 100%
    min-width: 312px
    left: 0
    top: 60px
    flex-direction: column
    border-radius: 16px 16px 0 0
    padding: 20px 20px 0 20px
    align-items: center
  .red-sign
    top: 20px
    width: 69px
    height: 32px
    font-family: 'Inter'
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 18px
  img, .image
    width: 100px
    height: 100px
  .image
    margin-bottom: 13px
  .description
    width: 100%
  .pizza-name
    font-size: 18px
    line-height: 22px
    margin-bottom: 13px

  .toppings
    overflow-x: auto
    min-width: 200px
    margin-bottom: 20px

  .toppings::-webkit-scrollbar
    display: none

  .blog
    margin-right: 12px
    width: 90px
  .icon-box
    width: 90px
    height: 90px
  .close-sign
    top: 6px
    right: 6px
  .blog-title, .topping-price
    font-size: 12px
    line-height: 16px
  .topping-price
    font-weight: 600
  .additional-radio-class
    margin-bottom: 12px
  .adding-title
    font-size: 14px
    line-height: 18px
  //Footer of Model
  .modal-footer
    padding: 12px 0
  .modal-footer .total-sum-box
    flex-direction: column
    align-items: start
  .modal-footer .sum
    font-size: 18px
    line-height: 22px
    margin-bottom: 4px
  //Model Close Button
  .close-btn
    right: 21px
    top: 18px
    width: 38px
    height: 38px
    border: 2px solid #F0F0F0
    background: #d2cfcf
    display: inline-flex
    justify-content: center
    text-align: center
    border-radius: 69%
    padding-top: 5px
    padding-left: 6px
    box-sizing: border-box
  .absolute-line
    position: absolute
    bottom: 67px
    width: 100%
    height: 1px
    background: #F0F0F0

</style>