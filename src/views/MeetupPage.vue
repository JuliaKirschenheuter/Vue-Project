<template>
  <div>
    <h1>
      Meetup Page
    </h1>
    <p>{{ $route.params.meetupId }}</p>
    <template v-if="meetup">
      <h3> {{meetup.title}} </h3>
      <p>
        <router-link to="/meetups/2">Go to 2 </router-link>
      </p>
      <p>
        <router-link to="/meetups/3">Go to 3</router-link>
      </p>
      <p>
        <router-link to="/meetups/4">Go to 4</router-link>
      </p>
      <p>
        <button @click="go('meetup-description')">Description</button>
      </p>
      <p>
        <button @click="go('meetup-agenda')">Agenda</button>
      </p>
      <p>
        <meetup-form :meetup-id="meetupId" @submit="meetup = $event">Редактировать митап</meetup-form>
      </p>
      <router-view :meetup="meetup"/>


      <button @click="updateMeetup">Update Meetup</button>
      <pre><code>{{ meetup }}</code></pre>

    </template>
    <template v-else>
      spinner...
    </template>

  </div>

</template>

<script>

import MeetupForm from "@/views/MeetupForm";
import {mapState, mapActions} from 'vuex';
import {fetchMeetup} from "@/data";

export default {
  name: "MeetupPage",
  components: {MeetupForm},

  props: {
    meetupId: {
      type: Number,
      default: null,
    },
  },

  computed: {
    ...mapState({
      meetups: state => state.forms.meetups
    }),

    meetup() {
      return this.meetups[this.meetupId];
    },
  },

  watch: {
    paramMeetupId() {
      fetchMeetup(this.$route.params.meetupId).then(meetup => this.setLocalMeetup(meetup));
    }
  },

  mounted() {
    fetchMeetup(this.$route.params.meetupId).then(meetup => {
      this.setLocalMeetup(meetup);
    });
  },

  methods: {

    ...mapActions('forms', {
      setMeetup: 'setMeetup'
    }),

    go(pageString) {
      this.$router.push({
        name: pageString,
        params: {
          meetupId: this.$route.params.meetupId
        }
      })
    },

    setLocalMeetup(meetup) {
      this.setMeetup({
            meetupId: meetup.id,
            meetup: {
              id: meetup.id,
              title: meetup.title,
              description: meetup.description,
              imageId: meetup.imageId,
              date: meetup.date,
              place: meetup.place,
              agenda: meetup.agenda,
            },
          }
      )
    },

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
