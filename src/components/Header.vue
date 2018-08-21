<template>
  <!-- <div class="test"> -->

    <div class="columns is-mobile">
      <div class="column is-three-quarters logo-container">
        <img src="../assets/logo.png" class="logo">
      </div>
      <div class="column is-quarter hamburger">
        <i class="fa fa-2x fa-bars"></i>
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

.logo-container {
  display: flex;
  align-items: center;

}
.hamburger {
  display:flex;
  justify-content: center;
  align-items: center;
}

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
