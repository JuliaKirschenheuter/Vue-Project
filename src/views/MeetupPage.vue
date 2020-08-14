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
        <button @click="go('meetup-description')">Description</button>
      </p>
      <p>
        <button @click="go('meetup-agenda')">Agenda</button>
      </p>
      <router-view/>
    </template>
    <template v-else>
      spinner...
    </template>
  </div>

</template>

<script>

import {fetchMeetup} from "@/data";

export default {
  name: "MeetupPage",

  data() {
    return {
      meetup: null
    }
  },

  beforeRouteEnter(to, from, next) {
    fetchMeetup(to.params.meetupId).then(meetup => {
      next(vm => {
        vm.setMeetup(meetup)
      })
    })
  },

  computed: {
    paramMeetupId() {
      return this.$route.params.meetupId;
    }
  },

  watch: {
    paramMeetupId() {
      fetchMeetup(this.$route.params.meetupId).then(meetup => this.setMeetup(meetup))
    }
  },

  mounted() {
    fetchMeetup(this.$route.params.meetupId).then(meetup => this.setMeetup(meetup))
  },

  methods: {
    go(pageString) {
      this.$router.push({
        name: pageString,
        params: {
          meetupId: this.$route.params.meetupId
        }
      })
    },

    setMeetup(meetup) {
      this.meetup = meetup
    }
  }


}

</script>

<style scoped>

</style>
