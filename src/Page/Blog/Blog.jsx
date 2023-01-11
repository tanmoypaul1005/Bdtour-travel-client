import React from 'react';
import { useGetBlogQuery } from '../../App/Features/Blog/BlogSlice';
import TourPackageCardShimmer from '../../Components/Card/TourPackageCardShimmer';
import BlogCard from './BlogCard';

const Blog = () => {

    const {data, isLoading, isError}=useGetBlogQuery();

    let content = null;

    if (isLoading) {
        content = <TourPackageCardShimmer />
      }

    return (
        <div>
            <BlogCard/>
        </div>
    );
};

export default Blog;