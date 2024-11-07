import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { RxHome } from "react-icons/rx";
import { Link } from "react-router-dom";

const SingleEstate = ({ singleEstate }) => {
  const { estate_title, image, id, location, area, price, status } =
    singleEstate;
  // console.log(image);

  return (
    <div
      className="border-orange-200 rounded-lg shadow-lg border-0 hover:scale-105"
      data-aos="flip-left"
    >
      <div className="h-64 relative">
        <img
          className="rounded-t-lg w-full h-full object-cover object-center"
          src={image}
          alt=""
        />
        <div className={`${ status === 'rent' ? 'bg-orange-500 ' : 'bg-green-500'} w-fit rounded absolute bottom-3 left-3`}>
          <p className="text-white font-semibold uppercase px-3">
            For {status}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold">{estate_title}</h5>

        {/* Location */}
        <div className="flex flex-row items-center gap-1">
          <span>
            <IoLocationSharp />
          </span>
          <p>{location}</p>
        </div>

        {/* Price */}
        <div className="flex flex-row items-center gap-1">
          <span>
            <FiDollarSign />
          </span>
          <p>{price}</p>
        </div>

        {/* Area */}
        <div className="flex flex-row items-center gap-1">
          <span>
            <RxHome />
          </span>
          <p>{area}</p>
        </div>

        <Link
          to={`/estateDetails/${id}`}
          className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-2 focus:outline-none focus:ring-yellow-200"
        >
          View Property
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

    </div>
  );
};

export default SingleEstate;

SingleEstate.propTypes = {
  singleEstate: PropTypes.object,
};
