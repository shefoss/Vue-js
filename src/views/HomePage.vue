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
  <div class="products">
    <h1>Products</h1>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <h2 style="justify-content: center">
          {{ product.title }}
        </h2>
        <p style="font-size: 14px">
          {{ product.description }}
        </p>
        <p><span style="color: red">Brand:</span>{{ product.brand }}</p>
        <img :src="product.images" :alt="product.title" class="product-image" />
      </li>
    </ul>
  </div>
</template>
<script>
import Mychilds from "@/components/MyStudents.vue";
import MySlots from "@/components/MySlots.vue";
import MySlotsTwo from "@/components/MySlots.vue";
import prMixin from "@/mixins/prMixin";
export default {
  components: {
    Mychilds,
    MySlots,
    MySlotsTwo,
  },
  misxins: [prMixin],
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-item {
  flex: 1 1 calc(30% - 20px);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.product-item p {
  display: flex;
  font-weight: bold;
  font-size: 14px;
}

.product-image {
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
}
.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
