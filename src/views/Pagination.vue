<template>
  <div class="pagination-container">
    <div class="card" v-for="post in filteredList" :key="post.id">
      <div class="title">Cart title {{post.id}}</div>
      <div class="text">There are some tex....</div>
      <button class="btn">Read More</button>
<!--      <p>{{post}}</p>-->
    </div>
  </div>
  <div class="btn-wrapper">
    <button class="btn" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
    <button class="btn" type="button" :disabled="currentPage === 5" @click="changePage(1)">Next</button>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios';
export default {
  data(){
    return {
      list: [],
      prePage: 20,
      currentPage: 1
    }
  },
  created: function(){
    //   this.$store.dispatch("getPost");
    this.getUsers();
  },

  computed: {
      ...mapGetters({
        fromVuexPosts: 'getPosts'
      }),
    filteredList() {
        console.log('computed working')
      // console.log('this.currentPage', this.currentPage)
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
      console.log(star, end)
      console.log('computed', this.list)
      console.log('resultchaa', this.list.slice(star, end))
      const result = this.list.slice(star, end)
      return result
    }
  },
  methods:{
    getUsers() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            this.list = res.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    changePage(num) {
      console.log('num', num)
      console.log('this.currentPage', this.currentPage)
      this.currentPage = this.currentPage + num
    }
  }
}
</script>

<style scoped lang="sass">
.pagination-container
  background: #F0F0F0
  display: flex
  flex-wrap: wrap

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
</style>