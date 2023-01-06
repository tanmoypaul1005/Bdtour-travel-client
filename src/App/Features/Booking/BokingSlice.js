import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BookingSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),

  tagTypes: ["Todos", "Filters"],
  
  endpoints: (builder) => ({
    // get TourPackage
    getBooking: builder.query({
      query: () => "/booking/get",
      keepUnusedDataFor: 0,
      // providesTags: ["Todos"],
    }),
    // get filters sections detail
    getTourPackageDetails: builder.query({
      query: (id) => `/tour-package/details/${id}`,
      keepUnusedDataFor: 0,
    }),


    addBooking: builder.mutation({
      query: (data) => ({
        url: `/booking/add`,
        method: "POST",
        body: data,
      }),
      keepUnusedDataFor: 0,
      
    }),

  }),
});

export const {
useGetBookingQuery,
useAddBookingMutation
} = BookingSlice;