<template>
  <div class="students">
    <ul>
      <li v-for="(student, i) in st" :key="i">{{ student }}</li>
    </ul>
  </div>
  <div class="status">
    <p>
      Status is <span>{{ MyActive }}</span>
    </p>
    <button @click="MyActive = !MyActive">Change Status</button>
  </div>
  <button style="margin-top: 50px" @click="$emit('changeBoolean')">
    Change Boolean
  </button>
</template>

<script>
export default {
  props: {
    st: {
      type: Array,
      required: true,
    },
    IsActive: {
      type: Boolean,
    },
  },
  emits: ["changeBoolean"],
  data() {
    return {
      students: this.st,
      MyActive: this.IsActive,
      booleanValue: false,
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.students {
  display: flex;
  margin-top: 2rem;
  text-align: center;
  justify-content: center;
  ul {
    list-style-type: none;
    padding: 4px 4px;
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;
    color: blue;
  }
  li:not(:last-child)::after {
    padding-left: 5px;
    content: "|";
    color: #000;
  }
}
.status {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  p {
    font-weight: bold;
    color: #000;
  }
  span {
    color: red;
  }
  button {
    margin-left: 1rem;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}
</style>
