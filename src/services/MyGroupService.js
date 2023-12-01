import axios from 'axios';

const BASE_URL = 'http://localhost:8888/api/mygroups'; 

const MyGroupService = {
  getAllGroups: async () => {
    const response = await axios.get(`${BASE_URL}/groups`);
    return response.data;
  },

  getGroupById: async (id) => {
    const response = await axios.get(`${BASE_URL}/groups/${id}`);
    return response.data;
  },

  createGroup: async (group) => {
    const response = await axios.post(`${BASE_URL}/groups`, group);
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