import api from "./apiConfig.js";

export const getPosts = async () => {
  try {
    const res = await api.get('/posts')
    return res.data
  } catch (error) {
    throw error
  };
};

export const getPost = async (id) => {
  try {
    const res = await api.get(`/post/${id}`)
    return res.data
  } catch (error) {
    throw error
  };
};

export const createPost = async (post) => {
  try {
    const res = await api.post('/new', post)
    return res.data
  } catch (error) {
    throw error
  };
};

export const updatePost = async (id, post) => {
  try {
    const res = await api.put(`/update/${id}`, post)
    return res.data
  } catch (error) {
    throw error
  };
};

export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/delete/${id}`)
    return res.data
  } catch (error) {
    throw error
  };
};
