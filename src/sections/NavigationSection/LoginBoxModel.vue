<template>
  <!--Collapse Transition Starting    -->
  <collapse-transition :duration="500" class="login-collapse">
    <div v-show="openLoginModelBox">
      <div class="login-container">
        <div class="header">100 бонусов</div>
        <div class="divider-line"></div>
        <ul>
          <li
              v-for="item in otherPagesList"
              :key="item.title"
              @click="$emit('close')"
          >
            <router-link :to="{ path: item.to }" class="otherList-routerlink"> {{ item.title }}</router-link>
          </li>
        </ul>
        <div class="divider-line"></div>
        <div class="footer">Выход из аккаунта</div>
      </div>
    </div>
  </collapse-transition>
</template>
<script>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

export default {
  components:{
    CollapseTransition
  },
  data(){
    return {
      otherPagesList: [
        {
          title: 'История заказов',
          to: '/myAccount'
        },
        {
          title: 'Настройки',
          to: '/myAccount'
        },
      ]
    }
  },
  props: {
    openLoginModelBox: Boolean
  },

}
</script>

<style scoped lang="sass">
.login-collapse
  position: absolute
  top: 38px
  right: 31px

.login-container
  width: 285px
  border: 1px solid #F0F0F0
  box-sizing: border-box
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.1)
  border-radius: 12px
  background: #FFFFFF
  display: flex
  flex-direction: column

.login-container .header
  padding: 20px 20px 0 20px
  font-family: 'Inter'
  font-weight: 600
  font-size: 16px
  line-height: 20px
  color: #FF7010

.login-container .footer
  padding: 0 20px 20px 20px
  font-family: 'SF Pro Text'
  font-weight: 400
  font-size: 16px
  line-height: 22px
  color: #A5A5A5

.divider-line
  background: #F0F0F0
  height: 1px
  margin: 16px 0

.login-container ul
  list-style: none
  margin: 0
  padding: 0 20px
.login-container li
  margin-bottom: 16px
  font-family: 'SF Pro Text'
  font-weight: 400
  font-size: 16px
  line-height: 22px

.login-container li:last-child
  margin-bottom: 0

.otherList-routerlink
  color: #191919
  text-decoration: none

.otherList-routerlink:hover
  color: #FF7010

</style>