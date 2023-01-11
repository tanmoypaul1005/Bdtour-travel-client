import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useAddBookingMutation } from '../../App/Features/Booking/BookingSlice';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { Toaster, ToasterLoading } from '../../Utility/UtilityFunctions';

const AddBooking = () => {

    const [addBooking,result] = useAddBookingMutation();

    const { tourPackageId } = useParams();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [room_type, setRoom_Type] = useState("Ac")


    const submitBookingData = (e) => {

        e.preventDefault();

        const body = { name, address, phone, email, tourPackageId, room_type }

        addBooking(body)
    }

    return (
        <div>
            <form onSubmit={submitBookingData}
                className="w-full">
                <div className="flex flex-wrap -mx-3  mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Full Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border
                         border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                        focus:border-gray-500" id="grid-last-name"
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border
                         border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                          focus:border-gray-500"
                            id="grid-last-name"
                            type="email" placeholder="Enter Your Email"
                        />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Address
                        </label>
                        <input
                            required
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border
                      border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
                          focus:border-gray-500" id="grid-password" type="address" placeholder="Enter Your Address" />
                    </div>


                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Phone Number
                        </label>
                        <input
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                            required
                            className="appearance-none 
                        block w-full bg-gray-200 text-gray-700 border
                         border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
                          focus:bg-white focus:border-gray-500" id="grid-city" type="tel" placeholder="Phone Number" />
                    </div>


                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Room Type
                        </label>
                        <div className="relative">
                            <select
                                required
                                defaultValue={room_type}
                                onChange={
                                    (e) => {
                                        setRoom_Type(e.target.value)
                                        console.log("e", e.target.value)
                                    }}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option value="Ac">Ac</option>
                                <option Value="Non Ac">Non Ac</option>

                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Place
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>


                <div className="mt-[20px] flex justify-center">
                    <CommonButton
                        type="submit"
                        btnLabel="Save"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddBooking;