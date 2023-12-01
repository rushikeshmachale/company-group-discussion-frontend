// MyGroupService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8888/api/mygroups';

const MyGroupService = {
  getAllGroups: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/groups`);
      return response.data;
    } catch (error) {
      console.error('Error while fetching all groups:', error);
      throw new Error('Failed to fetch all groups');
    }
  },

  getGroupById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/groups/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching group by ID ${id}:`, error);
      throw new Error(`Failed to fetch group by ID ${id}`);
    }
  },

  createGroup: async (group) => {
    try {
      const response = await axios.post(`${BASE_URL}/groups`, group);
      return response.data;
    } catch (error) {
      console.error('Error while creating group:', error);
      throw new Error('Failed to create group');
    }
  },

  updateGroup: async (group) => {
    try {
      const response = await axios.put(`${BASE_URL}/groups/${group.id}`, group);
      return response.data;
    } catch (error) {
      console.error(`Error while updating group with ID ${group.id}:`, error);
      throw new Error(`Failed to update group with ID ${group.id}`);
    }
  },

  deleteGroupById: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/groups/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while deleting group by ID ${id}:`, error);
      throw new Error(`Failed to delete group by ID ${id}`);
    }
  },

  findByType: async (type) => {
    try {
      const response = await axios.get(`${BASE_URL}/groups?type=${type}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching groups by type ${type}:`, error);
      throw new Error(`Failed to fetch groups by type ${type}`);
    }
  },
};

export default MyGroupService;
