import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:3000"
});

export default {

  list() {
    return http.get('/topics');
  },

  get(id) {
    return http.get(`/topics/${id}`);
  },

  addTopic(topic){
    return http.post('/topics/', topic);
  },

  updateTopic(topic){
    return http.put(`/topics/${topic.id}`, topic);
  },

  deleteTopic(id){
    return http.delete(`/topics/${id}`);
  }

}
