<template>
  <div class="container">

    <div class="filters-panel">
      <div class="filters-panel__col">
        <form-check
            :options="dateFilterOptions"
            :selected="filter.date"
            @selectedFormCheck="filter.date = $event"
        ></form-check>
      </div>

      <div class="filters-panel__col">
        <div class="form-group form-group_inline">
          <div class="input-group input-group_icon input-group_icon-left">
            <app-icon icon="search"/>
            <input
                id="filters-panel__search"
                class="form-control form-control_rounded form-control_sm"
                type="text"
                placeholder="Поиск"
                v-model="filter.search"
            />
          </div>
        </div>
        <div class="form-group form-group_inline">
          <page-tabs :selected.sync="filter.view"
          @change="filter.view = $event"
          ></page-tabs>
        </div>
      </div>
    </div>

    <meetups-list v-if="filter.view === '' || filter.view ==='list' "
                  :meetups="filteredMeetups"></meetups-list>
    <meetups-calendar
      v-else-if="filter.view === 'calendar' "
    ></meetups-calendar>
    <app-empty v-else>Митапов по заданным условям не найдено...</app-empty>
  </div>
</template>

<script>
import {API_URL, fetchMeetups} from '../data';
import AppIcon from './AppIcon';
import MeetupsList from "@/components/MeetupsList";
import PageTabs from "@/components/PageTabs";
import FormCheck from "@/components/FormCheck";
import MeetupsCalendar from "@/components/MeetupsCalendar";
import AppEmpty from "@/components/AppEmpty";

export default {
  name: 'MeetupsPage',

  components: {
    AppEmpty,
    MeetupsCalendar,
    FormCheck,
    PageTabs,
    MeetupsList,
    AppIcon,
  },

  data() {
    return {
      meetups: [],
      filter: {
        date: '',
        participation: '',
        search: '',
        view: ''
      },
      dateFilterOptions: [
        {text: 'Все', value: ''},
        {text: 'Прошедшие', value: 'past'},
        {text: 'Ожидаемые', value: 'future'},
      ]
    };
  },

  async mounted() {
    this.meetups = await this.fetchMeetups();
  },

  computed: {
    processedMeetups() {
      return this.meetups.map(meetup => ({
            ...meetup,
            cover: meetup.imageId
                ? `${API_URL}/images/${meetup.imageId}` : undefined,
            date: new Date(meetup.date),
            localDate: new Date(meetup.date).toLocaleString(navigator.language, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          })
      )
    },

    filteredMeetups() {

      let filteredMeetups = this.processedMeetups;

      if (this.filter.date === 'past') {
        filteredMeetups = filteredMeetups.filter(meetup => {
         return new Date(meetup.date) <= new Date()
        }
        )
      }

      if (this.filter.date === 'future') {
        filteredMeetups = filteredMeetups.filter(meetup => {
         return new Date(meetup.date) > new Date()
        }
        )
      }

      if (this.filter.participation === 'organizing') {
        filteredMeetups = filteredMeetups.filter(meetup => {
          return meetup.organizing;
        })
      }

      if (this.filter.participation === 'attending') {
        filteredMeetups = filteredMeetups.filter(meetup => {
          return meetup.attending;
        })
      }

      if (this.filter.search) {
        const concatMeetupText = meetup =>
            [meetup.title, meetup.description, meetup.place, meetup.organizer]
                .join(' ')
                .toLowerCase();

        filteredMeetups = filteredMeetups.filter(meetup =>
            concatMeetupText(meetup).includes(this.filter.search.toLowerCase())
        )
      }

      return filteredMeetups;
    }
  },

  methods: {
    async fetchMeetups() {
      return fetchMeetups();
    }
  },
};
</script>

<style scoped></style>
