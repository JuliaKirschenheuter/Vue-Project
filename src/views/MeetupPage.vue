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

    </div>

</template>

<script>

    async function fetchMetup(id) {
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
            fetchMetup(this.$route.params.meetupId).then(meetup => this.setMeetup(meetup));
        },

        watch: {
            paramMeetupId () {
                fetchMetup(this.$route.params.meetupId).then(meetup => this.setMeetup(meetup));
            }
        },

        computed: {
            paramMeetupId() {
                return this.$route.params.meetupId
            }
        },

        methods: {
            go(page) {
                this.$router.push({name: page, params: {meetupId: this.$route.params.meetupId}})
            },

            setMeetup(meetup) {
                this.meetup = meetup;
            }
        }
    }
</script>

<style scoped>

</style>
