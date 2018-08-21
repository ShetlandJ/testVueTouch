<template>
  <div class="container footer level">
    <div class="columns level-item has-text-centered">
      <div class="column">
        <i class="here icon fa fa-home"></i>
        <h5 class="here">HOME</h5>
      </div>
      <div class="column">
        <i class="icon fa fa-users"></i>
        <h5>FAMILY</h5>
      </div>
      <div class="column">
        <i class="icon fas fa-basketball-ball"></i>
        <h5>CLUBS</h5>
      </div>
      <div class="column">
        <i class="icon fas fa-calendar-alt"></i>
        <h5>BOOKINGS</h5>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

}

</script>

<style>

/* .column {
  padding: 0;
} */

body {
  margin: 0;
}

h5 {
  font-size: 14px;
  color: #0E425D;
}

.logo {
  padding: 10px;
  width: 60%;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 65px;
  width: 100%;
  overflow:hidden;
  padding: 2%;
  font-family: 'PT Sans', sans-serif;
}

.column {
  color: white;
  margin-top: 0;
  margin-bottom: 0;
}

.icon {
  color: #0E425D
}

.here {
  color: #2096CA;
}

.here {
  color: #2096CA
}

.container {
  background-color: #F6F6F6;
}

</style>
