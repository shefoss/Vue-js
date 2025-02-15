<template>
  <div class="homePage">
    <h1>Welcome</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem,
      tempora voluptatem repellat veritatis quisquam consequuntur quibusdam
      nihil! Pariatur molestias sed ab cum, impedit temporibus reprehenderit
      minus consequatur nemo culpa?
    </p>
    <Mychilds
      :st="students"
      :IsActive="true"
      @changeBoolean="handleChangeBoolean"
    />
    <div class="emit">
      <p>pi {{ parentBooleanValue }}</p>
    </div>
    <hr />
    <keep-alive>
      <my-slots :name="slotName" v-if="!isValid">
        <template #slotTtle>
          <label for="userName">What's your name ? </label><br />
          <input type="text" id="userName" style="margin-bottom: 20px" />
        </template>
      </my-slots>
    </keep-alive>
    <keep-alive>
      <my-slots-two :name="slotNameTwo" v-if="isValid">
        <template #slotTtle>
          <label for="userName">What's your name ? </label><br />
          <input type="text" id="userName" style="margin-bottom: 20px" />
        </template>
      </my-slots-two>
    </keep-alive>
    <button @click="isValid = !isValid">Toggle Validation</button>
  </div>
  <hr />
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <p><strong>Name: </strong>{{ product.title }}</p>
        <p><strong>Id: </strong>{{ product.id }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Mychilds from "@/components/MyStudents.vue";
import MySlots from "@/components/MySlots.vue";
import MySlotsTwo from "@/components/MySlots.vue";
export default {
  components: {
    Mychilds,
    MySlots,
    MySlotsTwo,
  },
  data() {
    return {
      students: ["Ahmed", "Mohamed", "Ali"],
      parentBooleanValue: false,
      slotName: "Ahmed",
      slotNameTwo: "Mohamed",
      isValid: false,
      products: [],
    };
  },
  methods: {
    handleChangeBoolean() {
      this.parentBooleanValue = !this.parentBooleanValue;
    },
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
