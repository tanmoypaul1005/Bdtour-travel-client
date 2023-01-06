import React from 'react';
import CommonButton from '../../Components/CommonButton/CommonButton';
import { formatDate } from '../../Utility/UtilityFunctions';
import AddBooking from '../AddBooking/AddBooking';

const TourPackageDetailsCard = ({ data }) => {

  console.log("data", data)

  return (
    <div>
      <div className="
      
      "
      >
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg width="495" height="470" viewBox="0 0 495 470" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="55" cy="442" r="138" stroke="white" stroke-opacity="0.04" stroke-width="50" />
              <circle cx="446" r="39" stroke="white" stroke-opacity="0.04" stroke-width="20" />
              <path d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                stroke-opacity="0.08"
                stroke-width="12"
              />
            </svg>
          </span>
          <span className="absolute top-0 right-0 z-[-1]">
            <svg width="493" height="470" viewBox="0 0 493 470" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="462" cy="5" r="138" stroke="white" stroke-opacity="0.04" stroke-width="50" />
              <circle cx="49" cy="470" r="39" stroke="white" stroke-opacity="0.04" stroke-width="20" />
              <path d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z" stroke="white" stroke-opacity="0.06"
                stroke-width="13"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* <!-- ====== Banner Section End -->

    <!-- ====== Blog Details Section Start --> */}
      <section className="pt-5 pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div
                className="relative rounded overflow-hidden z-20 mb-[60px] h-[300px] md:h-[400px] lg:h-[500px] wow fadeInUp"
                data-wow-delay=".1s
              "
              >
                <img
                  src={data?.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute w-full h-full top-0 left-0 flex items-end z-10 bg-gradient-to-t from-dark-700 to-transparent"
                >
                  <div className="flex flex-wrap items-center p-4 sm:p-8 pb-4">
                    <div className="flex items-center mb-4 mr-5 md:mr-10">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">

                      </div>

                      <div className=" capitalize text-white hover:opacity-70 ">
                        {data?.place}
                      </div>

                    </div>
                    <div className="flex items-center mb-4">
                      <p className="flex items-center text-sm font-medium  text-white mr-5 md:mr-8">
                        <span className="mr-3">
                          <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                            <path
                              d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"
                            />
                            <path
                              d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"
                            />
                            <path
                              d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"
                            />
                            <path
                              d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"
                            />
                            <path
                              d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"
                            />
                            <path
                              d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"
                            />
                            <path
                              d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"
                            />
                            <path
                              d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"
                            />
                            <path
                              d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"
                            />
                          </svg>
                        </span>
                        Start Date : {formatDate(data.package_startDate)}
                      </p>
                      <p className="flex items-center text-sm font-medium  text-white mr-5 md:mr-8">
                        <span className="mr-3">
                          <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                            <path
                              d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"
                            />
                            <path
                              d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"
                            />
                            <path
                              d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"
                            />
                            <path
                              d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"
                            />
                            <path
                              d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"
                            />
                            <path
                              d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"
                            />
                            <path
                              d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"
                            />
                            <path
                              d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"
                            />
                            <path
                              d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"
                            />
                          </svg>
                        </span>
                        End Date : {formatDate(data.package_startDate)}
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-8/12 px-4">
                  <div>
                    <h2
                      className="font-bold text-dark text-[26px] sm:text-3xl md:text-4xl
                      leading-snug
                      sm:leading-snug
                      md:leading-snug
                      mb-6
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s
                    "
                    >
                      {data?.title}
                    </h2>
                    <p
                      className=" text-base text-body-color leading-relaxed mb-8 wow adeInUp capitalize
                    "
                      data-wow-delay=".1s"
                    >
                      {data?.short_description}
                    </p>
                    <p className="flex items-center text-sm font-medium text-black mr-5 md:mr-8">
                      <span className="mr-3">
                        <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                          <path
                            d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"
                          />
                          <path
                            d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"
                          />
                          <path
                            d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"
                          />
                          <path
                            d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"
                          />
                          <path
                            d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"
                          />
                          <path
                            d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"
                          />
                          <path
                            d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"
                          />
                          <path
                            d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"
                          />
                          <path
                            d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"
                          />
                        </svg>
                      </span>
                      Start Date: {formatDate(data.package_startDate)}
                    </p>
                    <p className="flex items-center text-sm font-medium  text-black mr-5 md:mr-8">
                      <span className="mr-3">
                        <svg width="15" height="15" viewBox="0 0 15 15" className="fill-current">
                          <path
                            d="M3.8958 8.67529H3.10715C2.96376 8.67529 2.86816 8.77089 2.86816 8.91428V9.67904C2.86816 9.82243 2.96376 9.91802 3.10715 9.91802H3.8958C4.03919 9.91802 4.13479 9.82243 4.13479 9.67904V8.91428C4.13479 8.77089 4.03919 8.67529 3.8958 8.67529Z"
                          />
                          <path
                            d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z"
                          />
                          <path
                            d="M8.93779 8.67529H8.14914C8.00575 8.67529 7.91016 8.77089 7.91016 8.91428V9.67904C7.91016 9.82243 8.00575 9.91802 8.14914 9.91802H8.93779C9.08118 9.91802 9.17678 9.82243 9.17678 9.67904V8.91428C9.17678 8.77089 9.08118 8.67529 8.93779 8.67529Z"
                          />
                          <path
                            d="M11.472 8.67529H10.6833C10.5399 8.67529 10.4443 8.77089 10.4443 8.91428V9.67904C10.4443 9.82243 10.5399 9.91802 10.6833 9.91802H11.472C11.6154 9.91802 11.711 9.82243 11.711 9.67904V8.91428C11.711 8.77089 11.5915 8.67529 11.472 8.67529Z"
                          />
                          <path
                            d="M3.8958 11.1606H3.10715C2.96376 11.1606 2.86816 11.2562 2.86816 11.3996V12.1644C2.86816 12.3078 2.96376 12.4034 3.10715 12.4034H3.8958C4.03919 12.4034 4.13479 12.3078 4.13479 12.1644V11.3996C4.13479 11.2562 4.03919 11.1606 3.8958 11.1606Z"
                          />
                          <path
                            d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z"
                          />
                          <path
                            d="M8.93779 11.1606H8.14914C8.00575 11.1606 7.91016 11.2562 7.91016 11.3996V12.1644C7.91016 12.3078 8.00575 12.4034 8.14914 12.4034H8.93779C9.08118 12.4034 9.17678 12.3078 9.17678 12.1644V11.3996C9.17678 11.2562 9.08118 11.1606 8.93779 11.1606Z"
                          />
                          <path
                            d="M11.472 11.1606H10.6833C10.5399 11.1606 10.4443 11.2562 10.4443 11.3996V12.1644C10.4443 12.3078 10.5399 12.4034 10.6833 12.4034H11.472C11.6154 12.4034 11.711 12.3078 11.711 12.1644V11.3996C11.711 11.2562 11.5915 11.1606 11.472 11.1606Z"
                          />
                          <path
                            d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z"
                          />
                        </svg>
                      </span>
                      End Date : {formatDate(data.package_startDate)}
                    </p>

                    <div className="font-bold my-4 text-dark text-2xl sm:text-[26px] wow fadeInUp" data-wow-delay=".1s">
                      Package Price: {data?.price} ৳
                    </div>

                    <div className="capitalize font-bold mt-2 text-dark text-xl sm:text-[18px] wow fadeInUp" data-wow-delay=".1s">
                      Hotel Name : {data?.hotel_name}
                    </div>

                    <div className="capitalize font-bold my-2 text-dark text-xl sm:text-[18px] wow fadeInUp" data-wow-delay=".1s">
                      Room Type : {data?.room_type}
                    </div>

                    <p className="text-base text-body-color leading-relaxed mb-8 wow fadeInUp" data-wow-delay=".1s">
                      {data?.description}
                    </p>
                  </div>

                <AddBooking/>


                </div>


                <div className="w-full lg:w-4/12 px-4">
                  <div>
                    <div
                      className="mb-12 bg-primary rounded relative overflow-hidden text-center py-[60px]
                      px-11
                      lg:px-8
                      wow
                      fadeInUp
                    "
                      data-wow-delay=".1s
                    "
                    >
                      <h3 className="font-semibold text-white mb-2 text-2xl">
                        Join our newsletter!
                      </h3>
                      <p className="text-base text-white mb-8">
                        Enter your email to receive our latest newsletter.
                      </p>
                      <form>
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="
                          w-full
                          text-center
                          h-[50px]
                          text-sm
                          font-medium
                          bg-white bg-opacity-20
                          placeholder-white
                          text-white
                          rounded
                          mb-4
                          outline-none
                          border border-transparent
                          focus-visible:shadow-none
                          focus:border-white
                        "
                        />
                        <input
                          type="submit"
                          value="Subscribe Now"
                          className="
                          w-full
                          text-center
                          h-[50px]
                          text-sm
                          font-medium
                          text-white
                          rounded
                          mb-6
                          bg-[#13C296]
                          cursor-pointer
                          hover:shadow-lg hover:bg-opacity-90
                          transition
                          duration-300
                          ease-in-out
                        "
                        />
                      </form>
                      <p className="text-sm font-medium text-white">
                        Don't worry, we don't spam
                      </p>

                      <div>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.39737"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 1.39737 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="1.39737"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 1.39737 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 13.6943 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 13.6943 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 25.9911 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 25.9911 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 38.288 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 38.288 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="1.39737"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 1.39737 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 13.6943 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 25.9911 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 38.288 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="1.39737"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 1.39737 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 13.6943 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 25.9911 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 38.288 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0">
                          <svg
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="1.39737"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 1.39737 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="1.39737"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 1.39737 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 13.6943 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 13.6943 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 25.9911 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 25.9911 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="44.6026"
                              r="1.39737"
                              transform="rotate(-90 38.288 44.6026)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="7.9913"
                              r="1.39737"
                              transform="rotate(-90 38.288 7.9913)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="1.39737"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 1.39737 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 13.6943 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 25.9911 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="32.3058"
                              r="1.39737"
                              transform="rotate(-90 38.288 32.3058)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="1.39737"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 1.39737 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="13.6943"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 13.6943 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="25.9911"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 25.9911 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                            <circle
                              cx="38.288"
                              cy="20.0086"
                              r="1.39737"
                              transform="rotate(-90 38.288 20.0086)"
                              fill="white"
                              fill-opacity="0.44"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-4 mb-8">
                      <div className="w-full px-4">
                        <h2
                          className="
                          font-semibold
                          text-dark text-2xl
                          sm:text-[28px]
                          pb-5
                          relative
                          wow
                          fadeInUp
                        "
                          data-wow-delay=".1s
                        "
                        >
                          Popular Articles
                        </h2>
                        <span
                          className="h-[2px] bg-primary w-20 mb-10 inline-block"
                        ></span>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-full px-4">
                        <div
                          className="
                          w-full
                          flex
                          items-center
                          pb-5
                          mb-5
                          border-b border-[#F2F3F8]
                          wow
                          fadeInUp
                        "
                          data-wow-delay=".1s
                        "
                        >
                          <div
                            className="
                            w-full
                            max-w-[80px]
                            h-20
                            rounded-full
                            overflow-hidden
                            mr-5
                          "
                          >
                            <img
                              src="assets/images/blog/article-author-01.png"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="w-full">
                            <h4>
                              <div

                                className="
                                text-lg
                                lg:text-base
                                xl:text-lg
                                leading-snug
                                font-medium
                                text-dark
                                hover:text-primary
                                mb-1
                                inline-block
                              "
                              >
                                Create engaging online courses your student…
                              </div>
                            </h4>
                            <p className="text-sm text-body-color">Glomiya Lucy</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-full px-4">
                        <div
                          className="
                          w-full
                          flex
                          items-center
                          pb-5
                          mb-5
                          border-b border-[#F2F3F8]
                          wow
                          fadeInUp
                        "
                          data-wow-delay=".1s
                        "
                        >
                          <div
                            className="
                            w-full
                            max-w-[80px]
                            h-20
                            rounded-full
                            overflow-hidden
                            mr-5
                          "
                          >
                            <img
                              src="/"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="w-full">
                            <h4>
                              <div className="
                                text-lg
                                lg:text-base
                                xl:text-lg
                                leading-snug
                                font-medium
                                text-dark
                                hover:text-primary
                                mb-1
                                inline-block
                              "
                              >
                                The ultimate formula for launching online course
                              </div>
                            </h4>
                            <p className="text-sm text-body-color">Andrio jeson</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-full px-4">
                        <div
                          className="
                          w-full
                          flex
                          items-center
                          pb-5
                          mb-5
                          border-b border-[#F2F3F8]
                          wow
                          fadeInUp
                        "
                          data-wow-delay=".1s
                        "
                        >
                          <div
                            className="
                            w-full
                            max-w-[80px]
                            h-20
                            rounded-full
                            overflow-hidden
                            mr-5
                          "
                          >
                            <img
                              src="assets/images/blog/article-author-03.png"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="w-full">
                            <h4>
                              <div

                                className="
                                text-lg
                                lg:text-base
                                xl:text-lg
                                leading-snug
                                font-medium
                                text-dark
                                hover:text-primary
                                mb-1
                                inline-block
                              "
                              >
                                50 Best web design tips & tricks that will help
                                you
                              </div>
                            </h4>
                            <p className="text-sm text-body-color">Samoyel Dayno</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-full px-4">
                        <div
                          className="
                          w-full
                          flex
                          items-center
                          pb-5
                          mb-5
                          border-0 border-[#F2F3F8]
                          md:border-b
                          lg:border-0
                          wow
                          fadeInUp
                        "
                          data-wow-delay=".1s
                        "
                        >
                          <div
                            className="
                            w-full
                            max-w-[80px]
                            h-20
                            rounded-full
                            overflow-hidden
                            mr-5
                          "
                          >
                            <img
                              src="assets/images/blog/article-author-04.png"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="w-full">
                            <h4>
                              <div

                                className="
                                text-lg
                                lg:text-base
                                xl:text-lg
                                leading-snug
                                font-medium
                                text-dark
                                hover:text-primary
                                mb-1
                                inline-block
                              "
                              >
                                The 8 best landing page builders, reviewed
                              </div>
                            </h4>
                            <p className="text-sm text-body-color">Andrio Glori</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded overflow-hidden mb-12 wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <img
                        src="assets/images/blog/bannder-ad.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mt-14 wow fadeInUp" data-wow-delay=".2s">
              <h2
                className="
                font-semibold
                text-dark text-2xl
                sm:text-[28px]
                pb-5
                relative
              "
              >
                Related Articles
              </h2>
              <span className="h-[2px] bg-primary w-20 mb-10 inline-block"></span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                <div className="rounded overflow-hidden mb-8">
                  <a href="blog-details.html" className="block">
                    <img
                      src="assets/images/blog/blog-01.jpg"
                      alt=""
                      className="
                      w-full
                      transition
                      group-hover:scale-125 group-hover:rotate-6
                    "
                    />
                  </a>
                </div>
                <div>
                  <span
                    className="
                    bg-primary
                    rounded
                    inline-block
                    text-center
                    py-1
                    px-4
                    text-xs
                    leading-loose
                    font-semibold
                    text-white
                    mb-5
                  "
                  >
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="blog-details.html"
                      className="
                      font-semibold
                      text-xl
                      sm:text-2xl
                      lg:text-xl
                      xl:text-2xl
                      mb-4
                      inline-block
                      text-dark
                      hover:text-primary
                    "
                    >
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-10 group wow fadeInUp" data-wow-delay=".15s">
                <div className="rounded overflow-hidden mb-8">
                  <a href="blog-details.html" className="block">
                    <img
                      src="assets/images/blog/blog-02.jpg"
                      alt=""
                      className="
                      w-full
                      transition
                      group-hover:scale-125 group-hover:rotate-6
                    "
                    />
                  </a>
                </div>
                <div>
                  <span
                    className="
                    bg-primary
                    rounded
                    inline-block
                    text-center
                    py-1
                    px-4
                    text-xs
                    leading-loose
                    font-semibold
                    text-white
                    mb-5
                  "
                  >
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="blog-details.html"
                      className="
                      font-semibold
                      text-xl
                      sm:text-2xl
                      lg:text-xl
                      xl:text-2xl
                      mb-4
                      inline-block
                      text-dark
                      hover:text-primary
                    "
                    >
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="mb-10 group wow fadeInUp" data-wow-delay=".2s">
                <div className="rounded overflow-hidden mb-8">
                  <a href="blog-details.html" className="block">
                    <img
                      src="assets/images/blog/blog-03.jpg"
                      alt=""
                      className="
                      w-full
                      transition
                      group-hover:scale-125 group-hover:rotate-6
                    "
                    />
                  </a>
                </div>
                <div>
                  <span
                    className="
                    bg-primary
                    rounded
                    inline-block
                    text-center
                    py-1
                    px-4
                    text-xs
                    leading-loose
                    font-semibold
                    text-white
                    mb-5
                  "
                  >
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="blog-details.html"
                      className="
                      font-semibold
                      text-xl
                      sm:text-2xl
                      lg:text-xl
                      xl:text-2xl
                      mb-4
                      inline-block
                      text-dark
                      hover:text-primary
                    "
                    >
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackageDetailsCard;