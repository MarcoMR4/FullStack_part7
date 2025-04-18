import axios from 'axios';
const baseUrl = 'http://localhost:3005/blogs';
const commentUrl = 'http://localhost:3005/comments';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const getComments = async (blogId) => {
  const response = await axios.get(`${commentUrl}?blogId=${blogId}`)
  return response.data
}

const addComment = async (blogId, content) => {
  const response = await axios.post(commentUrl, { blogId, content })
  return response.data
}



export default { getAll, create, update, deleteBlog, addComment, getComments };
