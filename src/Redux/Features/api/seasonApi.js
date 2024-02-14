import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const getSeasonSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getSeasonById: builder.mutation({
      query: (id) => ({
        url: `/season/${id}`,
        method:"POST"
      }),
    }),

  }),
});
export const {
    useGetSeasonByIdMutation
} = getSeasonSlice;
