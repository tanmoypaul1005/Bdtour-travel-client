import React from 'react';
import { Outlet } from 'react-router';

const TourPackageParent = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default TourPackageParent;