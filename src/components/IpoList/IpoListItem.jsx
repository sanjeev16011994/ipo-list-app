import { Link } from "react-router-dom";

const IPOListItem = ({ ipo }) => {
  const isUpcoming = ipo.status === "Upcoming";

  return (
    <Link
      to={`/ipo/${ipo.id}`}
      className="grid grid-cols-12 gap-2 items-center px-4 py-4 
                 bg-white hover:bg-gray-50 transition border-b border-b-gray-100 " 
    >
      <div className="col-span-12 md:col-span-4 flex items-center min-w-0">
        <img
          src={ipo.logoUrl}
          alt="logo"
          className="w-10 h-10 rounded-lg mr-3 shrink-0"
          onError={(e) => {
            e.target.src = "https://placehold.co/40x40?text=L";
          }}
        />

        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {ipo.company}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <span
              className={`px-2 py-0.5 text-xs rounded-full font-medium
              ${isUpcoming ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}
              `}
            >
              {ipo.status}
            </span>

            <span className="text-xs text-gray-500">{ipo.issueDate}</span>
          </div>
        </div>
      </div>

      <div className="col-span-3 hidden md:block">
        <p className="text-sm font-medium text-gray-900">{ipo.issueSize}</p>
      </div>

      <div className="col-span-2 hidden md:block">
        <p className="text-sm font-medium text-gray-900">{ipo.priceRange}</p>
      </div>

      <div className="col-span-12 md:col-span-3 text-right">
        <p className="text-base font-bold text-indigo-600">{ipo.minInvest}</p>
      </div>
    </Link>
  );
};

export default IPOListItem;
