<template>
  <div class="form-check">
    <div v-for="option in options" :key="option.value" class="form-check__group">
      <input
          class="form-check__input"
          type="radio"
          name="date"
          :value="option.value"
          :checked="option.value === selected"
          @input="select(option.value)"
      />

      <label class="form-check__label"> {{ option.text }} </label>
    </div>
  </div>

</template>

<script>
export default {
  name: "FormCheck",
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: String
  },
  methods: {
    select(value) {
      this.$emit('selectedFormCheck', value)
    }
  }
}
</script>

<style scoped>

</style>