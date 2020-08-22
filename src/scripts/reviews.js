import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper, SwiperSlide
  },
  data() {

    return {
      reviews: [],
      sliderOptions: {
        breakpoints: {
          // when window width is >= 320px
          '320': {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          '480': {
            slidesPerView: 2,
          },
        }
      }
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.pic}`)
          .default;
        item.pic = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const reviews = this.$refs["reviews"].$swiper;
      switch(direction) {
        case "next":
          reviews.slideNext()
          break;
        case "prev":
          reviews.slidePrev()
          break;
      }
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data)
  }
});