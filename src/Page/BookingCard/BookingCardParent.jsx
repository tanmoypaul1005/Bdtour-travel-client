import React from 'react';
import { Outlet } from 'react-router';

const BookingCardParent = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default BookingCardParent;