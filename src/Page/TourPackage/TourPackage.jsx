
import React from "react";
import TourPackageCard from "../../Components/Card/TourPackageCard";
import Error from "../../Components/Error";
import { useGetTourPackageQuery } from "../../App/Features/TourPackage/TourPackageSlice";
import { NavLink } from "react-router-dom";
import TourPackageCardShimmer from "../../Components/Card/TourPackageCardShimmer";

const TourPackage = () => {

  const { data, isLoading, isError } = useGetTourPackageQuery();

  let content = null;

  if (isLoading) {
    content = <TourPackageCardShimmer />
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((item, index) =>
      <NavLink to={`details/${item?._id}`}><TourPackageCard key={index} data={item} /></NavLink>
    );

  }

  return (
    <div>

      <div className="">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="font-semibold text-white text-4xl">
                  Blog Grids
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              />
              <circle
                cx="446"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              />
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                stroke-opacity="0.08"
                stroke-width="12"
              />
            </svg>
          </span>
          <span className="absolute top-0 right-0 z-[-1]">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              />
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              />
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                stroke-opacity="0.06"
                stroke-width="13"
              />
            </svg>
          </span>
        </div>
      </div>


      <section className="pt-5 pb-10 lg:pb-20">
        <div className="container">
          <div className="flex justify-around flex-wrap -mx-1">
            {content}
          </div>
        </div>
      </section>

      {/* <a href="/" className="hidden items-center justify-centerbg-primarytext-white
        w-10
        h-10
        rounded-md
        fixed
        bottom-8
        right-8
        left-auto
        z-[999]
        hover:bg-dark
        back-to-top
        shadow-md
        transition
        duration-300
        ease-in-out
      "
      ></a> */}
    </div>
  );
};

export default TourPackage;
