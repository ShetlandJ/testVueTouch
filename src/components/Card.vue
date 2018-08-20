<template>
  <div class="card">
    <div class="profile-header">
      <img src="https://i.imgur.com/gdl6n8v.png" class="child-pic">
      <h1 class="name">James</h1>
    </div>

    <div class="main-content">
      <div class="day-alert">
        <p>4</p>
        <p>days</p>
      </div>

      <div class="sub-content">

        <div class="event-time">
          <h3>Tumble Tots</h3>
          <p>Wednesday</p>
          <p>4pm - 6pm</p>
        </div>
        <div class="location">
          <p>Balloch Park</p>
        </div>
      </div>
      <div class="paid-status">
        <p>☑️</p>
        <p>Paid!</p>
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

  methods: {
    startDrag (e) {
      this.initialMouseX = e.srcEvent.clientX
      this.initialCardsX = this.cardsX
    },

    stopDrag (e) {
      const cardWidth = 290
      const nearestSlide = -Math.round(this.cardsX / cardWidth)
      this.selectedIndex = Math.min(Math.max(0, nearestSlide), this.slides.length -1)
      TweenLite.to(this, 0.3, {cardsX: -this.selectedIndex * cardWidth})

      this.initialX = -this.selectedIndex * cardWidth
    },
    mouseMoving (e) {
      const dragAmount = e.srcEvent.clientX - this.initialMouseX
      const targetX = this.initialCardsX + dragAmount
      if (e.direction === 2) {
        this.cardsX = this.initialX + e.deltaX;
      } else if (e.direction === 4) {
        this.cardsX = this.initialX + e.deltaX;
      }

    }
  },

  computed: {
    selectedSlide () {
      return this.slides[this.selectedIndex]
    }
  }

}

</script>

<style lang="css">

.paid-status {
  width: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.day-alert {
  background-color: #FFB2B2;
}

.event-time {
  margin-bottom: 5px;
}

.day-alert {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 10px 0px 10px;
}

.sub-content {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.profile-header {
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
}

.name {
  padding-left: 10px;
}

.child-pic {
  border: inset black 2px;
  border-radius: 50%;
  height: 75px;
  width: 75px;
}

.main-content {
  display: flex;
  flex-direction: row;
  border: solid 2px grey;
  margin: 25px 10px 0px 10px;
}

h1, h2, h3, p {
  margin: 0;
  padding: 0;
  color: #0E425D;
}

p {
  font-size: 18px;
}

</style>
