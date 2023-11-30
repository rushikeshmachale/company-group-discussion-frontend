import axios from "axios";

const API_URL = "http://localhost:8888/api/v1/message";

class MessageService {
   saveMessage(message) {
        return axios.post(API_URL,message);
    }
    
  getAllMessagesById(id) {
    return axios.get(API_URL + "/" + id);
  }

  getAllMessagesByGroupId(id){
    return axios.get(API_URL + "/group/" + id);
  }

  deleteMessage(id) {
    return axios.delete(API_URL +"/"+ id);
  }

  editMessage(id, message) {
    return axios.put(API_URL +"/" +id, message);
  }
}
export default new MessageService();
