import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ToastContainer, toast } from 'react-toastify';

export const BlogSlice = createApi({
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
      transformResponse: (response, meta, arg) =>
      { 
        if(response){
          toast.success("Add Booking successful");
        }else{
          toast.error("An error occurred!");
        }
      },
      keepUnusedDataFor: 0,
    }),

  }),
});

export const {

} = BlogSlice;