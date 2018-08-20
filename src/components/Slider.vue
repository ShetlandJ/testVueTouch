<template>
  <div class="">
    <Header />

    <div id="slider" class="slider" >
      <v-touch @pan="mouseMoving" @panend="stopDrag" @swipe="startDrag">
        <div class="slider-cards" :style="`transform: translate3d(${cardsX}px,0,0)`">
          <div

          v-for="num in 3"
          :key="index"
          class="slider-card"
          >
          <Card :slide="slide" />
        </div>
      </div>
    </v-touch>

  </div>
</div>

</template>

<script>
import Card from './Card';
import Header from './Header'

export default {
  data() {
    return {

      slides: [
        {
          title: "Ready Player One'",
          description: 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
          image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg'
        },
        {
          title: 'Avengers: Infinity War',
          description: 'As the Avengers and their allies have continued to protect the world from threats too large for any...',
          image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
        },
        {
          title: 'Coco',
          description: 'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician...',
          image: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg'
        }
      ],
      selectedIndex: 0,
      initialMouseX: 0,
      initialCardsX: 0,
      cardsX: 0,
      clientX: 0,
      deltaX: 0,
      initialX: 0
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
  },

  components: { Card, Header }

}

</script>

<style lang="css">

.slider {
  overflow: hidden;
  /* background-color: #1F1140; */
  width: 100%;
  height: 640px;
}

.slider-cards {
  position: relative;
  width: 1800px;
  margin: 20px 50px;
  z-index: 1;
}

.slider-card {
  display: inline-block;
  background-color: #EEF9F8;
  overflow: hidden;
  width: 270px;
  height: 450px;
  margin-right: 30px;
  border-radius: 12px;
  box-shadow:0px 60px 20px -20px rgba(0, 0, 0, 0.3);
  border: solid #0E425D 1px;
}

.slider-info {
  position: relative;
  overflow: hidden;
  background-color: white;
  margin-top: -200px;
  margin-left: 30px;
  padding: 200px 20px 0;
  width: 260px;
  height: 200px;
  text-align: center;
  border-radius: 8px;
}

.slider-info h1 {
  font-family: Arial Black, Gadget, sans-serif;
  line-height: 25px;
  font-size: 23px;
}
.slider-info p {
  font-family: Arial, Helvetica, sans-serif;
}

.slider-button {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  border: none;
  color: white;
  background-color: #E71284;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}


</style>
