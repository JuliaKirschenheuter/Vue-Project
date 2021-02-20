<template>
  <div class="form-section form-section_inner">
    <button class="remove-button" type="button">
      <app-icon icon="trash"/>
    </button>

    <div class="form-group">
      <select title="Тип">
        <option value="other">Первое</option>
        <option value="other">Второе</option>
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
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control"/>
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea
          class="form-control"
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
}
</script>

<style scoped>

</style>