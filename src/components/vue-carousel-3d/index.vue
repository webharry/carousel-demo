<template>
  <carousel-3d
    :autoplay="true"
    :autoplayTimeout="2000"
    :perspective="45"
    :display="5"
    :animationSpeed="1000"
    :width="300"
    :height="300"
    controlsVisible
  >
    <slide :index="item" v-for="(item, index) in 5" :key="index">
      Slide {{ item }} Content
    </slide>
  </carousel-3d>
</template>
<script>
export default {
  name: "vue-carrousel-3d",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
