<template>
  <div>Agenda: {{meetup.agenda}}</div>
</template>

<script>
export default {
  name: "MeetupAgendaPage",
  props: {
    meetup: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
