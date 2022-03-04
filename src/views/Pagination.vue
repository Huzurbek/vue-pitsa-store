<template>
  <div class="pagination-container">
    <div class="card" v-for="post in filteredList" :key="post.id">
      <div class="title">Cart title {{post.id}}</div>
      <div class="text">There are some tex....</div>
      <button class="btn">Read More</button>
    </div>
  </div>
  <div class="btn-wrapper">
    <button class="btn-click" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
    <div class="mini"  :class="{active: n === currentPage}" v-for="n in 5" :key="n" >{{ n }}</div>
    <button class="btn-click" type="button" :disabled="currentPage === 5" @click="changePage(1)">Next</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      prePage: 20,
      currentPage: 1
    }
  },
  created: function(){
      this.$store.dispatch("getPost");
  },
  computed: {
      ...mapGetters({
        fromVuexPosts: 'getPosts'
      }),
    filteredList() {
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
      const result = this.fromVuexPosts.slice(star, end)
      return result
    }
  },
  methods:{
    changePage(num) {
      this.currentPage = this.currentPage + num
    }
  },
}
</script>

<style scoped lang="sass">
.pagination-container
  padding: 20px 0
  display: flex
  flex-wrap: wrap
  text-align: center

.card
  width: 200px
  height: 100px
  border: 1px solid blue
  border-radius: 3px
  display: flex
  flex-direction: column
  justify-content: center
  margin: 5px
  box-sizing: border-box

.btn
  margin-top: 10px
  background: #b0b0e7
  width: 100px
  color: white
  box-sizing: border-box

.btn-wrapper
  display: flex
  align-items: center
  justify-content: center
  margin-top: 20px
.btn-click
  height: 30px
  width: 55px
  background: #00BFFF
  border-radius: 3px
  color: #FFFFFF
  border: none
  cursor: pointer
.btn-click:hover
  background: #1E90FF
.mini
  width: 30px
  height: 30px
  display: flex
  justify-content: center
  align-items: center
  background: #00BFFF
  color: #FFFFFF

  border-radius: 3px
  box-sizing: border-box
  margin: 0 3px
.active
  background: #1E90FF
</style>