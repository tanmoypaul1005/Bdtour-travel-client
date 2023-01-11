import React from 'react'
import { Outlet } from 'react-router'

function BlogParent() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default BlogParent
