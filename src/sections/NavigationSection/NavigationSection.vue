<template>
  <div class="navigation-container">
<!--    Navigation Top part-->
    <div class="top-nav-style" v-if="!isLoged">
      <div class="menu">
        <Iconca name="Location" color="#FF7010" :width="14" :height="20" style="margin-right: 11.5px"/>
        <ul>
          <li class="other-btn">Москва<Iconca name="ArrowDown" color="#191919" :width="12" :height="8" style="margin-left: 8px"/></li>
          <li>Проверить адрес</li>
          <li>Среднее время доставки*: <span style="font-weight: 600">00:24:19</span></li>
        </ul>
      </div>
      <div class="login-menu">
        <div class="store-time">Время работы: с 11:00 до 23:00</div>
        <Iconca name="Profile" color="#FF7010" :width="18" :height="20" style="margin-right: 9px"/>
        <div class="login-btn">Войти в аккаунт</div>
      </div>
    </div>
    <div class="devider" v-if="isLoged"></div>
<!--    Navigation Body Part-->
    <div class="navbar">
      <div style="display: flex">
        <div class="logo">
          <img src="@/assets/pitsa-logo.png" alt="Logo" style="margin-right: 12px">
          <div class="logo-title">
            <router-link to="/" class="nav-list-item">Куда пицца</router-link>
          </div>
        </div>
        <div class="nav-list" v-if="!isLoged">
          <ul>
            <li
                v-for="item in listItems"
                :key="item.title"
            >
              <router-link :to="{ path: '/', hash: item.hashId }" class="nav-list-item"> {{ item.title }}</router-link>
            </li>
            <li class="other-btn" @click="openOther = !openOther">
              Другое
              <svg v-if="!openOther" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z" fill="#191919"/>
              </svg>
              <svg v-else width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.52702 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z" fill="#191919"/>
              </svg>
            </li>
          </ul>
<!--OrderListBox Component-->
        <OtherListBox :openOtherModel="openOther" @close="openOther=false"/>
        </div>
      </div>
      <!--    Basket Button component-->
      <Button fit :text="`${basketTotalSum} ₽`" left-icon="Basket" :icon-width="24" :icon-height="22" @click.prevent="openModel" style="height: 40px"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import Iconca from "@/components/Iconca/Iconca";
import OtherListBox from "@/sections/NavigationSection/OtherListBox";
import { mapState, mapGetters } from 'vuex';

export default {
  name:"NavigationSection",
  components:{
    Button,
    Iconca,
    OtherListBox,
  },
  data(){
    return {
      isLoged: false,
      openOther: false,
      listItems: [
        {
          title: "Акции",
          hashId: '#promotion'
        },
        {
          title: "Пицца",
          hashId: '#pizza'
        },
        {
          title: "Суши",
          hashId: '#sushi'
        },
        {
          title: "Напитки",
          hashId: '#drinks'
        },
        {
          title: "Закуски",
          hashId: '#snacks'
        },
        {
          title: "Комбо",
          hashId: '#combo'
        },
        {
          title: "Десерты",
          hashId: '#desserts'
        },
        {
          title: "Соусы",
          hashId: '#sauces'
        },
      ],

    }
  },
  computed: {
    ...mapState({
      // basket: state => state.basket
    }),
    ...mapGetters({
      basketTotalSum: 'basketTotalSum'
    })
  },
  methods: {
    openModel(){
      this.$emit('openModel')
    }
  }
}
</script>

<style src="./NavigationSection.sass" lang="sass" scoped/>