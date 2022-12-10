import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tourPackageSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Todos", "Filters"],
  endpoints: (builder) => ({
    // get TourPackage
    getTourPackage: builder.query({
      query: () => "/tour-package/get",
      keepUnusedDataFor: 0,
      // providesTags: ["Todos"],
    }),
    // // get filters sections detail
    // getFiltersData: builder.query({
    //   query: () => "/filters",
    //   keepUnusedDataFor: 0,
    //   providesTags: ["Filters"],
    // }),
    // // set status on filters section
    // updateFilterStatus: builder.mutation({
    //   query: (data) => ({
    //     url: `/filters`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Filters", "Todos"],
    // }),
    // // update color status mutation
    // updateColorStatus: builder.mutation({
    //   query: (data) => ({
    //     url: `/filters`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Filters", "Todos"],
    // }),
    // // add todo
    // addTodo: builder.mutation({
    //   query: (body) => ({
    //     url: `/todos`,
    //     method: "POST",
    //     body: body,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),
    // // delete todo by id
    // deleteTodo: builder.mutation({
    //   query: (id) => ({
    //     url: `/todos/${id}`,
    //     method: "DELETE",
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),
    // // update todo status complete on not
    // updateTodoStatus: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/todos/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),
    // // updated todo text or title
    // updateTodoText: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/todos/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),
    // // update todo status all complete
    // updateAllTodoStatus: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/todos/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),
    // // delte all todos which are completed
    // deleteAllTodosCompleted: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/todos/${id}`,
    //     method: "DELETE",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),

    // // todo color change
    // colorChangeTodo: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/todos/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   keepUnusedDataFor: 0,
    //   invalidatesTags: ["Todos"],
    // }),
  }),
});

export const {
useGetTourPackageQuery
} = tourPackageSlice;