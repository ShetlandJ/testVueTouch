<template>
  <div class="card">
    <h1>Name</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="css">

.card {
  margin: 15px;
  height: 300px;
  width: 250px;
  background-color: #EBF8F7;
  flex: 0 0 auto;
}

</style>
