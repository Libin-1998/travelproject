import {configureStore} from '@reduxjs/toolkit'
import fetchPackage from './reducers/PackageSlice'
import fetchBlog from './reducers/blogSlice'

export const store=configureStore({
    reducer:{
        packages:fetchPackage,
        blogs:fetchBlog,
    },
})