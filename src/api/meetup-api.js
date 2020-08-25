import {httpClient} from "@/api/http-client";


export const meetupApi = {
  getMeetups() {
    return httpClient.get('/meetups');
  },

  getMeetup(id) {
    return httpClient.get(`/meetups/${id}`)
  }
}
