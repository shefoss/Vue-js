<template>
  <div>
    <div class="container" v-containerWidth="80">
      <h1>About us</h1>
      <p v-fontWeight="bold" v-changeColor="'blue'">
        // Custom directives Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Odit perspiciatis voluptatem eligendi dolorem tempora pariatur
        culpa voluptatibus aliquam ab inventore molestias, consequuntur
        laudantium doloribus magnam! Dolore voluptatibus blanditiis harum
        corrupti.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  component: {},
  directives: {
    containerWidth(el, order) {
      el.style.maxWidth = order.value + "%";
      (el.style.marginRight = "auto"), (el.style.marginLeft = "auto");
    },
  },
};
</script>
