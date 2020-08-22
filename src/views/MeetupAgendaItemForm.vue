<template>
  <div class="form-section form-section_inner">
    <button class="remove-button" type="button" @click="removeHandler">
      <app-icon icon="trash"/>
    </button>

    <div class="form-group">
      <select title="Тип" v-model="type" >
        <option value="other">Другое</option>
      </select>
    </div>

    <div class="form__row">
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Начало</label>
          <input
              class="form-control"
              placeholder="00:00"
              type="time"
              v-model="startsAt"
          />
        </div>
      </div>
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Окончание</label>
          <input
              class="form-control"
              placeholder="00:00"
              type="time"
              v-model="endsAt"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model="title" />
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea class="form-control" v-model="description" ></textarea>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';
import {mapActions} from 'vuex';

const mapField = (field) => ({
  set(value) {
    this.setMeetupAgendaItemField({
      meetupId: this.meetupId,
      index: this.index,
      field,
      value
    })
  },

  get() {
    return this.$store.state.forms.meetups[this.meetupId].agenda[this.index][field]
  }
});

export default {
  name: "MeetupAgendaItemForm",
  components: {
    AppIcon,
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  computed: {
    type: mapField('type'),
    startsAt: mapField('startsAt'),
    endsAt: mapField('endsAt'),
    description: mapField('description'),
    title: mapField('title')
  },

  methods: {
    ...mapActions('forms', {
      setMeetupAgendaItemField: 'setMeetupAgendaItemField',
      removeAgendaItem: 'removeAgendaItem'
    }),

    removeHandler() {
      this.removeAgendaItem({ meetupId: this.meetupId, index: this.index });
    }
  }

}
</script>

<style scoped>

</style>
