
import React from 'react';
import { useGetBookingQuery } from '../../App/Features/Booking/BookingSlice';

const BookingCard = () => {

    const {data, isLoading, isError}=useGetBookingQuery();

    console.log("data",data)

    let content = null;
    if (isLoading) {
      content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
      content = "There was an error";
    }
  
    if (!isLoading && !isError && data?.data) {
      content = data?.data?.map((item,index)=>(
        <div className="pt-6 pb-12 bg-gray-300">
        <div id="card" className="">
            <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Articles</h2>

            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">

                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

                    <div className="h-64 w-auto md:w-1/2">
                        <img className="inset-0 h-full w-full object-cover object-center"  />
                    </div>

                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                        <h3 className="font-semibold text-lg leading-tight truncate">sss</h3>
                        <p className="mt-2">
                          aaaaaaaaaaaaaaaaa
                        </p>
                        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                          aaa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      ))
    }
  

    return (
        <div>
           {content}
        </div>
    );
};

export default BookingCard;