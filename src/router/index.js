import Vue from 'vue';
import VueRouter from 'vue-router';
import MeetupsPage from "@/views/MeetupsPage";
import MeetupPage from "@/views/MeetupPage";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: MeetupsPage,
        },
        {
            path: '/meetups/:meetupId',
            component: MeetupPage
        }
    ]
})
