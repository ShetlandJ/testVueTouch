<template>
  <!-- <div class="test"> -->

    <div class="columns">
      <div class="column">
        <img src="../assets/logo.png" class="logo">
      </div>
      <div class="column">
        <i class="fa fa-bars"></i>
      </div>
    </div>

  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
    }
  },

}

</script>

<style scoped>


.the-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

.the-header {
  display: flex;
  flex-direction: row;
}

.logo {
  padding: 10px;
  width: 60%;
}

.columns {
  background-color: #0E425D;
}

</style>
