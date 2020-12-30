<template>
  <div v-if="meetup">
    <h3> {{meetup.title}} </h3>
    <p>
      <router-link to="/meetups/2">Go to 2 </router-link>
    </p>
    <p>
      <router-link to="/meetups/3">Go to 3 </router-link>
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
    <router-view/>
  </div>

</template>

<script>

async function fetchMeetup(id) {
  return fetch(`/api/meetups/${id}`).then(res => res.json());
}

export default {
  name: "MeetupPage",
  data() {
    return {
      meetup: null
    }
  },

  mounted() {
    fetchMeetup(this.$route.params.meetupId).then(meetup => this.setMeetup(meetup))
  },

  computed: {
    paramMeetupId() {
      return this.$route.params.meetupId;
    }
  },

  watch: {
    paramMeetupId() {
      fetchMeetup(this.$route.params.meetupId).then(meetup => this.setMeetup(meetup));
    }
  },

  beforeRouteEnter(to, from, next) {
    if (Number(to.params.meetupId) > 3) {
      next(false);
      return;
    }
    fetchMeetup(to.params.meetupId)
    .then(meetup => {
      next(vm => vm.setMeetup(meetup))
    })
  },

  // beforeRouteUpdate(to, from, next) {
  //   if (Number(to.params.meetupId) > 3) {
  //     next(false);
  //     return;
  //   }
  //   fetchMeetup(to.params.meetupId)
  //   .then(meetup => {
  //     next(vm => vm.setMeetup(meetup))
  //   })
  // },

  methods: {
    go(param) {
      console.log('route: ', this.$route, 'router: ', this.$router)
      this.$router.push({
        name: param,
        params: {
          meetupId: this.$route.params.meetupId
        }
      })
    },
    setMeetup (meetup) {
      this.meetup = meetup
    }
  }
}
</script>

<style scoped>

</style>