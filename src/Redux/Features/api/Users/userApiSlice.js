import { apiSlice } from "../apiSlice";

const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/signin`,
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/signup`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
      }),
    }),
    getUserById: builder.query({
      query: () => ({
        url: `/profile`,
      }),
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getallusers: builder.query({
      query: () => `/allusers`,
    }),
  }),
});
export const {
  useLoginMutation,
  useLogoutMutation,
  useCreateUserMutation,
  useUpdateMutation,
  useGetallusersQuery,
  useGetUserByIdQuery,
} = usersApiSlice;
