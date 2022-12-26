import React from "react";
import { formatDate, formatDateOrTime } from "../../Utility/UtilityFunctions";

const TourPackageCard = ({data}) => {

  // console.log("data",data)

  return (
    <div>
      <div className="w-[325px] cursor-pointer">
        <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
          <div className="rounded overflow-hidden mb-8">
              <img src={data?.image} alt=""className="w-full transition group-hover:scale-125 group-hover:rotate-6 h[90px]"/>
          </div>
          <div>
            <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-whitemb-5">
            {formatDate(data?.createdAt)}
            </span>
            <h3>
              <div className="mt-5 capitalize font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
              >
               {data?.title}
              </div>
            </h3>
            <p className="capitalize text-base text-body-color">
            {data?.short_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
