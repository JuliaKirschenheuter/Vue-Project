<template>
  <div class="form-check">
    <div v-for="option in options" :key="option.value" class="form-check__group">
      <input
          class="form-check__input"
          type="radio"
          :name="radioGroupName"
          :value="option.value"
          :checked="option.value === selected"
          @input="$emit('selectedFormCheck', option.value) "
      />

      <label class="form-check__label"> {{ option.text }} </label>
    </div>
  </div>

</template>

<script>
export default {
  name: "FormCheck",
  data() {
    return {
      radioGroupName: Math.random()
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: String
  },
  model: {
    prop: 'selected',
    event: 'selectedFormCheck'
  }
}
</script>

<style scoped>

</style>