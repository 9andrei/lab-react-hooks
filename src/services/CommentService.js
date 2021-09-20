import http from './BaseService';

export const getComments = (postId) => {
  return http.get(`/posts/${postId}/comments`)
}