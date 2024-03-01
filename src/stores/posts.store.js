import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const usePostsStore = create((set) => ({
  posts: [],
  getPosts: async (token) => {
    try {
      const response = await axiosInstance.get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const posts = await response.data.data;
      set({ posts });
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (token, data) => {
    try {
      const response = await axios.post(
        "http://laravel_react_api.test/api/posts",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const posts = await response.data.data;
      set((state) => ({ posts: [...state.posts, posts] }));
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (token, id) => {
    try {
      await axios.delete(
        `http://localhost/laravel_react_api/public/api/posts/${id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      }));
    } catch (error) {
      console.error("Error during login or fetching user data:", error);
    }
  },
  post: {},
  comment: [],
  detailPost: async (token, id) => {
    try {
      const response = await axios.get(
        `http://localhost/laravel_react_api/public/api/post/${id}/detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const post = await response.data.data;
      const comment = await response.data.data.comment;
      set({ post });
      set({ comment });
    } catch (error) {
      console.log(error);
    }
  },

  createComment: async (token, id, data) => {
    try {
      const response = await axios.post(
        `http://laravel_react_api.test/api/comment/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const comment = await response.data.data;
      set((state) => ({ comment: [...state.comment, comment] }));
    } catch (error) {
      console.log(error);
    }
  },

  postsUser: [],
  getPostsUser: async (token) => {
    try {
      const response = await axios.get(
        `http://localhost/laravel_react_api/public/api/posts/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const postsUser = await response.data.data;
      set({ postsUser });
    } catch (error) {
      console.log(error);
    }
  },

  updatePostUser: async (token, data, id) => {
    try {
      const response = await axios.patch(
        `http://laravel_react_api.test/api/post/${id}/update`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const postsUser = await response.data.data;
      set((state) => ({
        postsUser: state.postsUser.map((item) =>
          item.id === postsUser.id ? postsUser : item
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  deletePostUser: async (token, id) => {
    try {
      await axios.delete(
        `http://localhost/laravel_react_api/public/api/post/${id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set((state) => ({
        postsUser: state.postsUser.filter((post) => post.id !== id),
      }));
    } catch (error) {
      console.error("Error during login or fetching user data:", error);
    }
  },

  updateIsSeen: async (token, id) => {
    try {
      const response = await axios.post(
        `http://localhost/laravel_react_api/public/api/notifikasi/${id}/update`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const notifikasi = await response.data.data;
      set((state) => ({
        notifikasi: state.notifikasi.map((item) =>
          item.id === notifikasi.id ? notifikasi : item
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  profilUser: {},
  getProfilUser: async (token, name) => {
    try {
      const response = await axios.get(
        `http://localhost/laravel_react_api/public/api/user/${name}/detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const profilUser = await response.data.data;
      set({ profilUser });
    } catch (error) {
      console.log(error);
    }
  },

  modalDelete: false,
  openModalDelete: () => set({ modalDelete: true }),
  closeModalDelete: () => set({ modalDelete: false }),
}));
