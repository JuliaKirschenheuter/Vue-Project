<template>
  <div class="wrapper page container">
    <meetup-form :meetup="meetup" @submit="meetup=$event" />
    <hr />
    <button @click="updateMeetup">Update Meetup</button>
    <pre><code>{{ meetup }}</code></pre>
  </div>

</template>

<script>

import MeetupForm from "@/views/MeetupForm";

function buildMeetup() {
  return {
    id: null,
    title: '',
    description: '',
    imageId: null,
    date: new Date(),
    place: '',
    agenda: [],
  };
};

export default {
  name: "CreateNewMeetup",
  components: {MeetupForm},

  data() {
    return {
      meetup: buildMeetup()
    }
  },

  methods: {
    updateMeetup() {
      this.meetup.title += '!';
      if (this.meetup.agenda.length) {
        this.meetup.agenda[0].title += '!';
      }
    }
  }
}
</script>

<style scoped>

</style>
