import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const getSeasonSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
 
    getSeasonById: builder.mutation({
      query: ({id,query}) => ({
        url: `/season/${id}?query=${query}`,
        method:"POST"
      }),
    }),

  }),
});
export const {
    useGetSeasonByIdMutation
} = getSeasonSlice;
