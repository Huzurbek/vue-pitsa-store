<template>
  <div class="slider-box">
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <OrderCard v-for="(item, index) in items" :key="index" :items="items[index]" class="card-style"/>
        </div>
      </div>
      <div class="prev"  @click="prev">
        <Iconca name="LeftArrow" :width="16" :height="16" color="white"/>
      </div>
      <div class="next" @click="next">
        <Iconca name="RightArrow" :width="16" :height="16" color="white"/>
      </div>
    </div>
</template>
<script>
import OrderCard from "@/components/OrderCard/OrderCard";
import Iconca from "@/components/Iconca/Iconca";
export default {
  components: {
    OrderCard,
    Iconca
  },
  props: {
    items: {
      type: Object,
      default:()=>{}
    }
  },
  data(){
    return {
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },

  // Methods
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.items.length
      this.step = `${innerWidth / totalCards}px`

    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.$props.items.shift()
        this.$props.items.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.$props.items.pop()
        this.$props.items.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style scoped lang="sass">
.slider-box
  position: relative
//Carousel
.carousel
  position: relative
  overflow: hidden

.inner
  transition: transform 0.5s
  white-space: nowrap
  display: inline-flex

.card-style
  display: inline-flex
  margin-right: 30px

.prev, .next
  position: absolute
  top: 50%
  left: -70px
  margin-top: -18px
  transition: 0.6s ease
  display: flex
  align-items: center
  justify-content: center
  width: 40px
  height: 40px
  background: #FF7010
  border-radius: 41px
  user-select: none
  cursor: pointer
  box-sizing: border-box
  padding-right: 4px


.next
  left: auto
  right: -70px
  padding-right: 0

.prev:hover, .next:hover
  background: #bc5007

</style>
