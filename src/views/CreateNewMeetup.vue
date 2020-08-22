<template>
  <div class="wrapper page container">
    <meetup-form :meetup-id="meetupId" />
    <hr />
    <button @click="updateMeetup">Update Meetup</button>
    <pre><code>{{ meetup }}</code></pre>
  </div>

</template>

<script>

import MeetupForm from "@/views/MeetupForm";
import { mapActions, mapState } from 'vuex';

export default {
  name: "CreateNewMeetup",
  components: {MeetupForm},

  data() {
    return {
      meetupId: 111
    }
  },

  computed: {
    ...mapState({
      meetups: state => state.forms.meetups
    }),

    meetup() {
      return this.meetups[this.meetupId]
    }
  },

  mounted() {
    this.setMeetup({
      meetupId: this.meetupId,
      meetup: {
        id: null,
        title: '',
        description: '',
        imageId: null,
        date: new Date(),
        place: '',
        agenda: [],
      },
    })
  },

  methods: {
    ...mapActions('forms', {
      setMeetup: 'setMeetup'
    }),

    updateMeetup() {
      this.meetup.title += '!';
      if (this.meetup.agenda.length) {
        for (let i = 0; i < this.meetup.agenda.length; i++) {
          this.meetup.agenda[i].title += '!';
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
