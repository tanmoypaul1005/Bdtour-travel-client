import { configureStore } from '@reduxjs/toolkit'
import { tourPackageSlice } from './Features/TourPackage/TourPackageSlice'

export const store = configureStore({
  reducer: {
    [tourPackageSlice.reducerPath]: tourPackageSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tourPackageSlice.middleware),
})