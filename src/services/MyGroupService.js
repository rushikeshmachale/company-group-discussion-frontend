import axios from 'axios';

const BASE_URL = 'http://localhost:8888/api/mygroups'; 

const MyGroupService = {
  getAllGroups: async () => {
<<<<<<< HEAD
    const response = await axios.get(`${BASE_URL}/groups`);
=======
    const response = await axios.get(`${BASE_URL}`);
>>>>>>> 552b662d83a35a9dc01c393e6027f01d1b30a544
    return response.data;
  },

  getGroupById: async (id) => {
<<<<<<< HEAD
    const response = await axios.get(`${BASE_URL}/groups/${id}`);
=======
    const response = await axios.get(`${BASE_URL}/${id}`);
>>>>>>> 552b662d83a35a9dc01c393e6027f01d1b30a544
    return response.data;
  },

  createGroup: async (group) => {
<<<<<<< HEAD
    const response = await axios.post(`${BASE_URL}/groups`, group);
=======
    const response = await axios.post(`${BASE_URL}`, group);
>>>>>>> 552b662d83a35a9dc01c393e6027f01d1b30a544
    return response.data;
  },

  updateGroup: async (group) => {
    const response = await axios.put(`${BASE_URL}/groups/${group.id}`, group);
    return response.data;
  },

  deleteGroupById: async (id) => {
    const response = await axios.delete(`${BASE_URL}/groups/${id}`);
    return response.data;
  },

  findByType: async (type) => {
    const response = await axios.get(`${BASE_URL}/groups?type=${type}`);
    return response.data;
  },
};

export default MyGroupService;