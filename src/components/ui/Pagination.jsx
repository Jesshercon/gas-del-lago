import Link from "next/link";

const {
  faChevronLeft,
  faChevronRight,
  fa1,
  fa2,
  fa3,
} = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Pagination = () => {
  return (
    <div className="space-x-6 py-20">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-blue-primary text-2xl "
      />

      <FontAwesomeIcon icon={fa1} className="text-blue-primary text-xl " />

      <FontAwesomeIcon icon={fa2} className="text-blue-primary text-xl " />
      <FontAwesomeIcon icon={fa3} className="text-blue-primary text-xl " />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-blue-primary text-2xl "
      />
    </div>
  );
};

export default Pagination;
