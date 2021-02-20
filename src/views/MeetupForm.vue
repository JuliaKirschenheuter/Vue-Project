<template>
  <div class="wrapper page container">
    <form class="form meetup-form">
      <div class="meetup-form__content">
        <fieldset class="form-section">
          <div class="form-group">
            <label class="form-label">Название</label>
            <input class="form-control"/>
          </div>
          <div class="form-group">
            <label class="form-label">Место проведения</label>
            <input class="form-control"/>
          </div>
        </fieldset>

        <h3 class="form__section-title">Программа</h3>
        <meetup-agenda-item-form
        />

        <div class="form-section_append">
          <button type="button">
            + Добавить пункт программы
          </button>
        </div>
      </div>

      <div class="meetup-form__aside">
        <div class="meetup-form__aside_stick">
          <button class="button button_secondary button_block" type="button">
            Cancel
          </button>
          <button class="button button_primary button_block" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>


  </div>
</template>

<script>

import MeetupAgendaItemForm from "@/views/MeetupAgendaItemForm";

export default {
  name: "MeetupForm",
  props: {
    meetup: Object,
  },

  components: {
    MeetupAgendaItemForm
  },
  
}
</script>

<style scoped>

.meetup-form__aside {
  margin: 48px 0;
}

.meetup-form__aside_stick > .button {
  margin: 0 0 12px 0;
}

@media all and (min-width: 992px) {
  .meetup-form {
    display: flex;
    flex-direction: row;
  }

  .meetup-form__content {
    flex: 1 0 calc(100% - 320px);
  }

  .meetup-form__aside {
    flex: 1 0 320px;
    max-width: 320px;
    width: 100%;
    padding-left: 137px;
    margin: 0;
  }

  .meetup-form__aside_stick {
    position: sticky;
    top: 32px;
  }
}

</style>