import Vue from "vue";

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs",
};

const btns = {
  template: "#preview-btns",
};

const display = {
  props: ["currentWork", "works"],
  template: "#preview-display",
  components: {thumbs, btns},
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
};

const tags = {
  template: "#preview-tags",
};

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {tags},
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: {display, info},
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/${item.photo}`)
          .default;
        item.photo = requiredImage;
        return item;
      });
    },
    slide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++
          break;
        case "prev":
          this.currentIndex--
          break;
      }
    },
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  },
});
