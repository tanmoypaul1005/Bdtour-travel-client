import React from 'react';
import { useGetBlogQuery } from '../../App/Features/Blog/BlogSlice';
import BlogCard from './BlogCard';

const Blog = () => {

    const {}=useGetBlogQuery()
    return (
        <div>
            <BlogCard/>
        </div>
    );
};

export default Blog;