import { configureStore } from '@reduxjs/toolkit'
import { tourPackageSlice } from './Features/TourPackage/TourPackageSlice'
import { BlogSlice } from './Features/Blog/BlogSlice'

export const store = configureStore({
  reducer: {
    [tourPackageSlice.reducerPath]: tourPackageSlice.reducer,
    [BlogSlice.reducerPath]: BlogSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tourPackageSlice.middleware,BlogSlice.middleware),
})