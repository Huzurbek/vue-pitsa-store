<template>
  <!--Collapse Transition Starting    -->
  <collapse-transition :duration="500" style="position: absolute; top:117px; right: 305px;">
    <div v-show="openOtherModel">
      <div class="other-list-container">
        <ul>
          <li
              v-for="item in otherPagesList"
              :key="item.title"
              @click="$emit('close')"
          >
            <router-link :to="{ path: item.to, hash: item.hashId }" class="otherList-routerlink"> {{ item.title }}</router-link>
          </li>
        </ul>
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
          title: 'О компании',
          to: '/aboutCompany',
          hashId: '#aboutCompany'
        },
        {
          title: 'Пользовательское соглашение',
          to: '/termOfUses',
          hashId: '#termOfUses'
        },
        {
          title: 'Условия гарантии',
          to: '/warranty',
          hashId: '#warranty'
        },
        {
          title: 'Ресторан',
          to: '/restaurant',
          hashId: '#restaurant'
        },
        {
          title: 'Контакты',
          to: '/contacts',
          hashId: '#contacts'
        },
        {
          title: 'Поддержка',
          to: '/support',
          hashId: '#support'
        },
        {
          title: 'Отследить заказ',
          to: '/trackOrder',
          hashId: '#trackOrder'
        },
      ]
    }
  },
  props: {
    openOtherModel: Boolean
  },

}
</script>

<style scoped lang="sass">
ul
  list-style: none
  margin: 0
  padding: 0
li
  margin-bottom: 16px
  font-family: 'SF Pro Text'
  font-weight: 400
  font-size: 16px
  line-height: 22px

li:last-child
  margin-bottom: 0

.other-list-container
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.1)
  border-radius: 12px
  display: flex
  flex-direction: column
  padding: 20px

.otherList-routerlink
  color: #191919
  text-decoration: none
.otherList-routerlink:hover
  color: #FF7010
</style>