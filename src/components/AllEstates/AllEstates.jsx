import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SingleEstate from "../SingleEstate/SingleEstate";

// const AllEstates = ({ allEstateData }) => {
const AllEstates = () => {

  const [allEstateData, setAllEstateDate] = useState();

  useEffect(() => {
    fetch("./realEstate.json")
     .then((res) => res.json())
     .then((data) => setAllEstateDate(data))
  }, [])
  

  return (
    <div className="mb-28">
      {/* <h1>All Estates</h1> */}
      {/* <>Total Estates: {allEstateData.length}</
            p> */}
      <div className=" text-center py-10">
        <h1 className="font-bold text-4xl uppercase">Properties</h1>
        <div className="h-1 bg-gray-600 w-24 mt-2 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {allEstateData?.map((singleEstate) => (
          <SingleEstate
            key={singleEstate.id}
            singleEstate={singleEstate}
          ></SingleEstate>
        ))}
      </div>
    </div>
  );
};

export default AllEstates;

AllEstates.propTypes = {
  allEstateData: PropTypes.array,
};
