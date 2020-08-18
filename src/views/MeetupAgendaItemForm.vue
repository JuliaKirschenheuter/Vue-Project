<template>
  <div class="form-section form-section_inner">
    <button class="remove-button" type="button" @click="$emit('remove')">
      <app-icon icon="trash"/>
    </button>

    <div class="form-group">
      <select title="Тип" v-model="agendaItem_.type" >
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
              v-model="agendaItem_.startsAt"
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
              v-model="agendaItem_.endsAt"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model="agendaItem_.title" />
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea class="form-control" v-model="agendaItem_.description" ></textarea>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';
import {deepClone, deepEqual} from "@/utils";

export default {
  name: "MeetupAgendaItemForm",
  components: {
    AppIcon,
  },

  data() {
    return {
      agendaItem_: null
    }
  },

  watch: {
    agendaItem: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.agendaItem_ = deepClone(newValue)
      }
    },

    agendaItem_: {
      deep: true,
      handler(newValue) {
        if (!deepEqual(newValue, this.agendaItem)) {
          this.$emit('update:agendaItem', deepClone(newValue));
        }
      }
    }
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
