import React from 'react';
import { useParams } from 'react-router';
import { useGetTourPackageDetailsQuery } from '../../App/Features/TourPackage/TourPackageSlice';
import Error from '../../Components/Error';
import TourPackageDetailsCard from './TourPackageDetailsCard';

const TourPackageDetails = () => {

  const tourPackageId=useParams();

  const { data, isLoading, isError } = useGetTourPackageDetailsQuery(tourPackageId);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && data?.data) {
    content = <TourPackageDetailsCard data={data?.data}/>
  }

  return (
    <div>{content}</div>
  );
};

export default TourPackageDetails;