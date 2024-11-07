import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import SingleEstate from "../../components/SingleEstate/SingleEstate";

const Property = () => {
  // const allEstateData = useLoaderData();
  const [allEstateData, setAllEstateDate] = useState();

  useEffect(() => {
    fetch('/realEstate.json')
    .then(res => res.json())
    .then(data => setAllEstateDate(data));
  }, [])

  return (
    <div className="">
      <div className="pt-10 px-10 mb-28">
        <div className="text-center py-10">
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

      <Footer></Footer>
    </div>
  );
};

export default Property;
