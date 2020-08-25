import {httpClient} from "@/api/http-client";

export const imageApi = {
  postImage(fromData) {
    return httpClient.post('/images/upload', fromData)
  }
}
