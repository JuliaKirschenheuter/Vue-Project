import Vue from 'vue';

const state = {
  meetups: {},
};

const getters = {};

const actions = {
  setMeetup(ctx, meetup) {
    ctx.commit('SET_MEETUP', meetup)
  },
  setMeetupField(ctx, { meetupId, field, value }) {
    ctx.commit('SET_MEETUP_FIELD', { meetupId, field, value })
  },
  pushAgendaItem(ctx, meetupId) {
    ctx.commit('PUSH_AGENDA_ITEM', meetupId)
  },
  removeAgendaItem(ctx, {meetupId, index}) {
    ctx.commit('REMOVE_AGENDA_ITEM', {meetupId, index})
  },
  setMeetupAgendaItemField(ctx, { meetupId, index, field, value }) {
    ctx.commit('SET_MEETUP_AGENDA_ITEM_FIELD', { meetupId, index, field, value})
  }

};

const mutations = {
  SET_MEETUP(state, { meetupId, meetup }) {
    Vue.set(state.meetups, meetupId, meetup);
  },

  SET_MEETUP_FIELD(state, { meetupId, field, value }) {
    state.meetups[meetupId][field] = value;
  },

  PUSH_AGENDA_ITEM(state, { meetupId }) {
    const meetup = state.meetups[meetupId];
    const agendaItem = {
      id: Math.random(),
      startsAt: '00:00',
      endsAt: '00:00',
      type: 'other',
      title: null,
      description: null,
      speaker: null,
      language: null,
    };
    if (meetup.agenda.length) {
      agendaItem.startsAt = meetup.agenda[meetup.agenda.length - 1].endsAt;
      agendaItem.endsAt = agendaItem.startsAt;
    }
    state.meetups[meetupId].agenda.push(agendaItem);
  },

  REMOVE_AGENDA_ITEM(state, { meetupId, index }) {
    state.meetups[meetupId].agenda.splice(index, 1);
  },

  SET_MEETUP_AGENDA_ITEM_FIELD(state, { meetupId, index, field, value }) {
    state.meetups[meetupId].agenda[index][field] = value;
  },

  REMOVE_MEETUP(state, { meetupId }) {
    Vue.delete(state.meetups, meetupId);
  },
};



export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
