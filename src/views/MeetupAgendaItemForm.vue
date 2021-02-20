<template>
  <div class="form-section form-section_inner">
    <button class="remove-button" type="button" @click="$emit('remove')">
      <app-icon icon="trash"/>
    </button>

    <div class="form-group">
      <select title="Тип" >
        <option
            v-for="(type, idx) in agendaItem.type"
            :key="idx"
            :value="type">{{type}}</option>
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
              v-model="agendaItem.startsAt"
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
              v-model="agendaItem.endsAt"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model="agendaItem.title"/>
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea
          class="form-control"
          v-model="agendaItem.description"
      ></textarea>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon";

export default {
  name: "MeetupAgendaItemForm",
  components: {
    AppIcon,
  },
  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>