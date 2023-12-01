import axios from "axios";

const API_URL = "http://localhost:8888/api/v1/messages";

class MessageService {
  saveMessage(message) {
    return axios.post(API_URL, message)
      .then(response => {
        
        console.log('Message saved successfully:', response.data);
        return response.data; 
      })
      .catch(error => {
       
        console.error('Error saving message:', error);
        throw error; 
      });
  }

  getAllMessagesById(id) {
    return axios.get(`${API_URL}/${id}`)
      .then(response => {
       
        console.log('Messages retrieved successfully:', response.data);
        return response.data; 
      })
      .catch(error => {
        
        console.error('Error retrieving messages:', error);
        throw error; 
      });
  }

  getMessageById(id) {
    return axios.get(`${API_URL}/${id}/message`)
      .then(response => {
        
        console.log('Message retrieved successfully:', response.data);
        return response.data; 
      })
      .catch(error => {
        
        console.error('Error retrieving message:', error);
        throw error; 
      });
  }

  deleteMessage(id) {
    return axios.delete(`${API_URL}/${id}`)
      .then(response => {
       
        console.log('Message deleted successfully:', response.data);
        return response.data; 
      })
      .catch(error => {
       
        console.error('Error deleting message:', error);
        throw error; 
      });
  }

  editMessage(id, message) {
    return axios.put(`${API_URL}/${id}`, message)
      .then(response => {
        
        console.log('Message edited successfully:', response.data);
        return response.data; 
      })
      .catch(error => {
        
        console.error('Error editing message:', error);
        throw error; 
      });
  }
}

export default new MessageService();
