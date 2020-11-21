<template>
  <div class="container">
    <div class="filters-panel">
      <div class="filters-panel__col">
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
            />
          </div>
        </div>
        <div class="form-group form-group_inline">
        </div>
      </div>
    </div>


    <div v-if="meetups && meetups.length" class="meetups-list transition-list">
      <transition-group name="transition-list">
        <div
            v-for="meetup in meetups"
            :key="meetup.id"
        >
          <a :href="`/meetups/${meetup.id}`" class="meetups-list__item">
            <div class="meetups-list__col">
              <div
                  class="meetups-list__cover"
                  :style="meetup.cover ? `--bg-url: url('${meetup.cover}')` : ''"
              >
                <h5>{{ meetup.title }}</h5>
              </div>
            </div>
            <div class="meetups-list__col">
              <div class="meetups-list__description">
        <span
            v-if="meetup.attending"
            class="meetups-list__badge meetups-list__badge_success"
        >Участвую</span
        >
                <span v-if="meetup.organizing" class="meetups-list__badge"
                >Организую</span
                >
                <ul class="info-list">
                  <li>
                    <app-icon icon="user" class="info-list__icon"/>
                    {{ meetup.organizer }}
                  </li>
                  <li>
                    <app-icon icon="map" class="info-list__icon"/>
                    {{ meetup.place }}
                  </li>
                  <li>
                    <app-icon icon="cal-lg" class="info-list__icon"/>
                    <time :datetime="meetup.date">{{ meetup.localeDate }}</time>
                  </li>
                </ul>
              </div>
            </div>
          </a>

        </div>


      </transition-group>
    </div>

  </div>
</template>

<script>
import {fetchMeetups} from '../data';
import AppIcon from './AppIcon';

export default {
  name: 'MeetupsPage',

  components: {
    AppIcon,
  },

  data() {
    return {
      meetups: []
    };
  },

  async mounted() {
    this.meetups = await this.fetchMeetups();
  },


  methods: {
    async fetchMeetups() {
      return fetchMeetups();
    },
  },
};
</script>

<style scoped></style>
