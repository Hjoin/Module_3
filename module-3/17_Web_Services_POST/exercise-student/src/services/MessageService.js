import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:3000"
});

export default {

  get(id) {
    return http.get(`/messages/${id}`);
  },

  addMessage(message){
    return http.post('/messages', message);
  },

  updateMessage(message) {
    return http.put(`/messages/${message.id}`, message);
  },

  deletedMessage(id){
    return http.delete(`/messages/${id}`);
  }

}
