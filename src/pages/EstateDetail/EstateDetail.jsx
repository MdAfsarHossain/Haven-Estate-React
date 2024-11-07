import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetail = () => {
  const allEstateData = useLoaderData();
  const { eId } = useParams();
  const singleEstate = allEstateData.find((estate) => estate.id == eId);

  const {
    id,
    estate_title,
    description,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = singleEstate;

  // console.log(allEstateData);
  // console.log(eId);
  // console.log(singleEstate);

  return (
    <div className="pt-14 ml-20 mr-20 mx-auto">
      <Helmet>
        <title>Haven Estate | Estate Detials</title>
      </Helmet>

      {/* EState Summary */}
      <div className="mb-20 px-10 shadow-lg shadow-slate-400 py-5 rounded-lg flex flex-row justify-between items-center">
        {/* Estate Details */}
        <div className="">
          {/* Title */}
          <div className="flex flex-col">
            <div className="border-0 w-fit">
              <h1 className="font-bold text-3xl">{estate_title}</h1>
            </div>
            <div className="w-fit text-center bg-red-500 rounded px-2">
              <p className="uppercase text-white font-bold">{status}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-row gap-16">
            {/* Location */}
            <div className="">
              <h1 className="font-bold text-xl">Location</h1>
              <p className="text-gray-500">{location}</p>
            </div>

            {/* Segment */}
            <div className="">
              <h1 className="font-bold text-xl">Segment</h1>
              <p className="text-gray-500">{segment_name}</p>
            </div>

            {/* Area */}
            <div className="">
              <h1 className="font-bold text-xl">Area</h1>
              <p className="text-gray-500">{area}</p>
            </div>
          </div>
        </div>

        {/* Estate Price */}
        <div className="">
          <h1 className="font-bold text-6xl">${price}</h1>
        </div>
      </div>

      {/* Estate Image */}
      <div className="rounded-lg h-[500px] mb-20">
        <img className="rounded-lg h-full w-full" src={image} alt="" />
      </div>

      {/* Estate Description */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl mb-3">Property Description</h1>
        <div className="border-[1px] border-gray-300 mb-2"></div>
        <p className="text-lg text-justify">{description}</p>
      </div>

      {/* Quick Summary */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl mb-3">Quick Summary</h1>
        <div className="border-[1px] border-gray-300 mb-5"></div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-[550px] ">
            {/* <!-- head --> */}
            <thead>
              <tr className="bg-base-200 font-bold text-xl">
                <th>Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody className="text-base">
              {/* <!-- row 1 --> */}
              <tr>
                <td className="font-bold">Segment</td>
                <td>{segment_name}</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td className="font-bold">Status</td>
                <td className="capitalize">{status}</td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <td className="font-bold">Area</td>
                <td>{area}</td>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <td className="font-bold">Price</td>
                <td>{price}</td>
              </tr>
              {/* <!-- row 5 --> */}
              <tr>
                <td className="font-bold">Location</td>
                <td>{location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Facilities */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl mb-3">Facilities</h1>
        <div className="border-[1px] border-gray-300 mb-5"></div>

        {/* List */}
        <div className="flex flex-row gap-5">
          {facilities?.map((facility,idx) => (
            <p
              className="bg-yellow-400 px-3 rounded font-bold py-1"
              key={idx}
            >
              {facility}
            </p>
          ))}
        </div>
      </div>

      {/* Location On Map */}
      <div className="mb-12">
        <h1 className="font-bold text-4xl mb-3">Location on Map</h1>
        <div className="border-[1px] border-gray-300 mb-5"></div>
        {/* Map */}
        <div className="h-[400px] w-full">{/* Map Content */}
            <p className="font-bold text-xl text-center mt-20
            ">Comming Soon.....</p>


        </div>
      </div>
    </div>
  );
};

// #Afsar2024 [Map Box]

export default EstateDetail;
