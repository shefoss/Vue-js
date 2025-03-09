const prMixin = {
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

export default prMixin;
