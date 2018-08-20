<template>
  <div class="main">

    <div class="scrolling-wrapper">
      <Card />
      <Card />
    </div>

  </div>
</template>

<script>
import Card from "./Card"
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },

  methods: {

  },

  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scrolling-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}


/* .main {
display: flex;
flex-direction: row;
}

.scroll-box {
float: left;

display: flex;
flex-direction: row;
height: 150px;
width: 100%;
overflow-x: scroll;
}

.scroll-item {
background-color: blue;
margin: 15px;
width: 150px;
height: 50px;
} */
</style>
