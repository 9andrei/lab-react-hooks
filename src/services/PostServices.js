import http from './BaseService';

export const getPosts = () => {
  return http.get('/posts')
}

export const getPost = (postId) => {
  return http.get(`/posts/${postId}`)
}
