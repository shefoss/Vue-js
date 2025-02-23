<template>
  <div>
    <h1>About us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis
      voluptatem eligendi dolorem tempora pariatur culpa voluptatibus aliquam ab
      inventore molestias, consequuntur laudantium doloribus magnam! Dolore
      voluptatibus blanditiis harum corrupti.
    </p>
    <Mychilds :st="students" />
  </div>
</template>
<script>
import Mychilds from "@/components/MyStudents.vue";
export default {
  components: {
    Mychilds,
  },
  data() {
    return {
      students: ["Sherif", "Ashraf", "Hamza"],
    };
  },
};
</script>
