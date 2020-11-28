<template>
  <div class="container">

    <div class="filters-panel">
      <div class="filters-panel__col">
        <form-check :options="dateFilterOptions"></form-check>
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
          <page-tabs :selected.sync="filter.view"></page-tabs>
        </div>
      </div>
    </div>

      <meetups-list v-if="filteredMeetups && filteredMeetups.length" :meetups="filteredMeetups" ></meetups-list>
  </div>
</template>

<script>
import {API_URL, fetchMeetups} from '../data';
import AppIcon from './AppIcon';
import MeetupsList from "@/components/MeetupsList";
import PageTabs from "@/components/PageTabs";
import FormCheck from "@/components/FormCheck";

export default {
  name: 'MeetupsPage',

  components: {
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
      dateFilterOptions:  [
        { text: 'Все', value: '' },
        { text: 'Прошедшие', value: 'past' },
        { text: 'Ожидаемые', value: 'future' },
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
            ?  `${API_URL}/images/${meetup.imageId}` : undefined,
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
      return this.processedMeetups.filter(meetup =>
        meetup.title.indexOf(this.filter.search) !== -1);
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
