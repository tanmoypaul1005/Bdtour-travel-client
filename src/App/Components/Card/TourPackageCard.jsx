import React from "react";

const TourPackageCard = ({data}) => {
  return (
    <div>
      <div className="w-[300px]">
        <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
          <div className="rounded overflow-hidden mb-8">
            <a href="blog-details.html" className="block">
              <img
                src="data:image/jpeg;base64,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"
                alt="image"
                className="w-full transition group-hover:scale-125 group-hover:rotate-6"
              />
            </a>
          </div>
          <div>
            <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-whitemb-5">
              Dec 22, 2023
            </span>
            <h3>
              <a
                href="/"
                className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
              >
                Meet AutoManage, the best AI management tools
              </a>
            </h3>
            <p className="text-base text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
