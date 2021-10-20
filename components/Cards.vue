<template>
<div class="asd">
  <div
    class="tile-block1"
    :style="{ backgroundImage: `url(${list.image.src})` }"
  >
    <div class="photo lazyloaded"></div>
    <div class="content">
      <div class="text">
        <h3 class="h3">{{ list.title }}</h3>

        <p class="desc">{{ list.description }}</p>
      </div>
      <div class="buttons">
        <a
          :href="localePath(`/c/${list.handle}`)"
         
          class="btn btn-secondary icon-after btn-md btn-inverse"
          ><span class="btn-inside">Shop now</span></a
        >
      </div>
    </div>
    <a href="/collections/men" class="link-overlay"></a>
  </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
};
</script>
<style scoped>
.tile-block1 {
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  width: 550px;
  padding: 30px;
  display: inline-block;
  vertical-align: middle;
}
.asd{
   padding: 5px;
}
h3 {
  font-weight: 900;
  font-size: 42px;
  line-height: 42px;
  font-family: "Barlow", sans-serif;
  text-transform: uppercase;
  color: white;
  vertical-align: middle;
}
.desc {
  font-size: 18px;
  line-height: 23px;
  position: relative;
  z-index: 10;
  color: white;
  font-family: "neue-haas-unica";
  align-items: left;
}
.btn-inside {
  border-color: #0526e8 !important;
  padding: 12px 18px;
  background: #dde1f4 !important;
}
</style>
