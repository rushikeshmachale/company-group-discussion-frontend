import axios from "axios";

const API_BASE_URL="http://localhost:8888/api/v1";

const MessageService = {

    getMessagesByGroupId:async(id)=>{

        try {

            const response =await axios.get(`${API_BASE_URL}/message/${id}`);
        
            return  response.data
            
        } catch (error) {
            throw error.response?error.response.data:error.message;

            
        }
    },
    getMessageById: async (id) => {
        const response = await axios.get(`${API_BASE_URL}/api/messages/${id}`);
        return response.data;
      },
    
      createMessage: async (messageData) => {
        const response = await axios.post(`${API_BASE_URL}/api/messages`, messageData);
        return response.data;
      },
    
      updateMessage: async (id, updatedMessage) => {
        const response = await axios.put(`${API_BASE_URL}/api/messages/${id}`, updatedMessage);
        return response.data;
      },
    
      deleteMessage: async (id) => {
        const response = await axios.delete(`${API_BASE_URL}/api/messages/${id}`);
        return response.data;
      },
    };
    





export default MessageService;