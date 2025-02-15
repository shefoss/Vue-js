<template>
  <h1>Our Services</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis
    quae aperiam beatae dolores voluptates quo vel iste fugit hic laboriosam,
    ipsa unde maiores laborum atque! Perferendis minima laudantium eveniet?
  </p>
  <Mychilds :st="students" />
</template>
<script>
import Mychilds from "@/components/MyStudents.vue";
export default {
  components: {
    Mychilds,
  },
  data() {
    return {
      students: ["Gharib", "Hussein", "Bushra"],
    };
  },
};
</script>
