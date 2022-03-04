<template>
  <div ref="example-element">{{counter}}</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },

  created() {
    console.log('interval starting')
    setInterval(() => {
      this.counter++
    }, 4000)
  },

  updated() {
    console.log(`At this point, Virtual DOM has re-rendered and patched.`)
    // Fired every second, should always be true
    console.log(+this.$refs['example-element'].textContent === this.counter)
  }
}
</script>