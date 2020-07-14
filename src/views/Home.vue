<template>
  <div class="home">
    <h4>swiper-example-3d-coverflow</h4>
    <Coverflow></Coverflow>
    <hr />
    <h4>swiper-example-navigation</h4>
    <Navigation></Navigation>
    <hr />
    <h4>swiper-example-thumbs-gallery</h4>
    <thumbsGallery></thumbsGallery>
    <hr />
  </div>
</template>

<script>
// @ is an alias to /src
import Coverflow from "@/components/vue-awsome-swiper/3d-coverflow";
import Navigation from "@/components/vue-awsome-swiper/navigation";
import thumbsGallery from "@/components/vue-awsome-swiper/thumbs-gallery";

export default {
  name: "Home",
  components: {
    Coverflow,
    Navigation,
    thumbsGallery
  },
};
</script>
