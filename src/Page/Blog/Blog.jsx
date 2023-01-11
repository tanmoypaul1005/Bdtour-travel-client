import React from 'react';
import { useGetBlogQuery } from '../../App/Features/Blog/BlogSlice';
import TourPackageCardShimmer from '../../Components/Card/TourPackageCardShimmer';
import Error from '../../Components/Error';
import BlogCard from './BlogCard';

const Blog = () => {

    const { data, isLoading, isError } = useGetBlogQuery();

    let content = null;

    if (isLoading) {
        content = <TourPackageCardShimmer />
    }

    if(!isLoading && isError){
        content = <Error message="There was an error" />;
    }


    return (
        <div>
            <BlogCard />
        </div>
    );
};

export default Blog;