import React from 'react';
import { Disclosure } from '@headlessui/react'


const Home = () => {
    return (
        <div>

            {/* <!-- ====== Faq Section Start --> */}
            <section
                className="bg-[#f3f4ff] pt-5 lg:pt-[20px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-[60px] lg:mb-5 max-w-[620px]">
                                <span className="block mb-2 text-lg font-semibold text-primary">
                                    FAQ
                                </span>
                                <h2
                                    className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4">
                                    Any Questions? Answered
                                </h2>
                                <p className="text-lg leading-relaxed sm:text-xl sm:leading-relaxed text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-4">

                        <div className="w-full px-[300px] pt-5">
                            <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>What is your refund policy?</span>

                                                {!open ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                }

                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>

                        <div className="w-full px-[300px] pt-5">
                            <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>What is your refund policy?</span>

                                                {!open ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                }

                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>


                        <div className="w-full px-[300px] pt-5">
                            <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>What is your refund policy?</span>

                                                {!open ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                }

                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>



                        <div className="w-full px-[300px] pt-5">
                            <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>What is your refund policy?</span>

                                                {!open ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                }

                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-0 right-0 z-[-1]">
                    <svg
                        width="1440"
                        height="886"
                        viewBox="0 0 1440 886"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                            fill="url(#paint0_linear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="1308.65"
                                y1="1142.58"
                                x2="602.827"
                                y2="-418.681"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#3056D3" stop-opacity="0.36" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
            {/* <!-- ====== Faq Section End --> */}
        </div>
    );
};

export default Home;