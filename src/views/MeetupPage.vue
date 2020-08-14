<template>
  <div>
    <p>{{ $route.fullPath }}</p>
    <p>{{ $route.hash }}</p>
    <p>{{ $route.path }}</p>
    <p>{{ $route.query }}</p>
    <p>{{ $route.params }}</p>
  </div>

</template>

<script>
export default {
  name: "MeetupPage"
}

</script>

<style scoped>

</style>
