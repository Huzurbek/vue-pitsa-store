<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="image">
        <img :src="require(`@/assets/${selectedProduct.image}`)" alt="Product Picture">
      </div>

      <div class="description" style="flex: 1; max-width: 480px" >

        <!--              <Iconca name="Mashroom" color="#FF7010" :width="105" :height="105"/>-->
        <!--              <Iconca name="Onion" color="#FF7010" :width="28" :height="40"/>-->
        <!--              <Iconca name="BellPapper" color="#FF7010" :width="35" :height="41"/>-->
        <!--              <Iconca name="SousInsideWhite" color="#FF7010" :width="41" :height="27"/>-->
        <!--              <Iconca name="Cucumber" color="#A5A5A5" :width="40" :height="40"/>-->
        <div class="pizza-name">
          <Iconca name="smallSale" color="#E23535" :width="18" :height="24" style="margin-right: 11px"/>
          {{ selectedProduct.name }}
        </div>
<!--Toppings-->
        <div class="toppings">
          <div class="blog" v-for="(item, index) in selectedProduct.toppings" :key="index">
            <div class="icon-box">
              <Iconca :name="item.icon" color="#FF7010" :width="item.width" :height="item.height"/>
            </div>
            <div class="blog-title">{{ item.toppingName }}</div>
          </div>
        </div>
<!--    Crust Part    -->
        <div class="crust-form-group">
          <input class="custom-radio" type="radio" id="first" value="Традиционное" v-model="crust">
          <label for="first">Традиционное</label>

          <input class="custom-radio" type="radio" id="second" value="Тонкое" v-model="crust">
          <label for="second">Тонкое</label>
        </div>
<!--        Pizza Size-->
        <div class="size-form-group">
          <input class="custom-radio" type="radio" id="sizeOne" value="20" v-model="PizzaSize">
          <label for="sizeOne">20 см</label>

          <input class="custom-radio" type="radio" id="sizeSecond" value="28" v-model="PizzaSize">
          <label for="sizeSecond">28 см</label>

          <input class="custom-radio" type="radio" id="sizeThird" value="33" v-model="PizzaSize">
          <label for="sizeThird">33 см</label>
        </div>
<!--Adding Toppings to Pizza-->
        <div class="adding-title">Добавьте в пиццу</div>
        <div class="toppings">
          <div class="blog" v-for="(item, index) in toppingProducts" :key="index">
            <div class="icon-box">
              <Iconca :name="item.icon" color="#FF7010" :width="item.width" :height="item.height"/>
            </div>
            <div class="blog-title">{{ item.toppingName }}</div>
            <div class="topping-price">{{item.price}} ₽</div>
          </div>
        </div>
<!--     Footer Part   -->
        <div class="modal-footer">
          <div class="total-sum" style="display: flex; align-items: center">
            <div class="sum">Итого: {{ selectedProduct.price }} ₽</div>
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
export default {
  components:{
    Iconca,
    Button
  },
  props: {
    selectedProduct:{
      type: Object,
      default:()=>{}
    }
  },
  data(){
    return {
      crust: this.$props.selectedProduct.crust,
      PizzaSize: this.$props.selectedProduct.size,
      toppingProducts: [
        {
          icon: 'MozarellaCheese',
          width: 41,
          height: 35,
          toppingName: 'Моцарелла',
          price: 59
        },
        {
          icon: 'Mashroom',
          width: 105,
          height: 105,
          toppingName: 'Шампиньоны',
          price: 59
        },
        {
          icon: 'Onion',
          width: 28,
          height: 40,
          toppingName: 'Красный лук',
          price: 59
        },
        {
          icon: 'BellPapper',
          width: 35,
          height: 41,
          toppingName: 'Сладкий перец',
          price: 59
        }
      ],

    }
  },
  methods:{
    addToBasket(){
      let props = this.$props.selectedProduct;
      const product = {
            id: props.id,
            image: props.image,
            name: props.name,
            description: props.description,
            toppings: props.toppings,
            crust: this.crust,
            size: this.PizzaSize,
            price: props.price,
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
  //left: 305px
  //top: 132px
  background: #FFFFFF
  border-radius: 24px
  padding: 32px 20px 0 60px
  box-sizing: border-box
  display: flex
  justify-content: space-between

  //margin: auto
  //padding: 20px
  //border: 1px solid #888
  //width: 80%
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
  font-family: Inte
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
.crust-form-group, .size-form-group
  display: flex
  width: 480px
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 6px
  box-sizing: border-box
  height: 48px
  margin-bottom: 16px

.size-form-group
  height: 44px

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