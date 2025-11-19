import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft } from "lucide-react";

export const IPODetailsPage = ({ ipo }) => {
  const { details } = ipo;

  const TimelineStep = ({ name, date, index, isLast }) => (
    <div className="relative flex-1 flex gap-5 sm:block items-center">
      <div className="flex sm:justify-center sm:items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
            index <= details.timeline.length - 1
              ? "bg-green-500"
              : "bg-gray-300"
          }`}
        >
          ✓
        </div>
      </div>
      {!isLast && (
        <div className="absolute top-10 left-4 w-0.5 h-10 bg-green-500 sm:hidden"></div>
      )}
      {!isLast && (
        <div className="absolute top-4 left-22 w-full h-0.5 md:flex hidden  bg-green-500"></div>
      )}
      <div className="mt-3">
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-xs sm:text-left md:text-center text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">
      <header className="sticky top-0 z-20 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between p-4 max-w-5xl mx-auto">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              IPO Details
            </h1>
            <h1 className="text-xl font-bold text-gray-800 block sm:hidden">
              {ipo.company}
            </h1>
          </div>
        </div>
      </header>

      <div className="p-4 hidden sm:block text-start ">
        <p className="text-sm text-gray-500 ps-20">
          <Link
            to="/"
            className="hover:text-indigo-600 cursor-pointer font-semibold "
          >
            Home
          </Link>{" "}
          &gt; Market Watch &gt;{" "}
          <span className="font-semibold text-gray-700">{ipo.company}</span>
        </p>
      </div>

      <main className="px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="hover:text-indigo-600 cursor-pointer font-semibold "
              >
                <span>
                  <ArrowLeft />{" "}
                </span>
              </Link>{" "}
              <img
                src={ipo.logoUrl}
                alt={`${ipo.company} logo`}
                className="w-14 h-14 rounded-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/56x56/1F2937/FFFFFF?text=L";
                }}
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {ipo.company}
                </h2>
                <p className="text-sm text-gray-500">{details.fullName}</p>
              </div>
              <div className="ml-auto flex gap-5 justify-content-center items-center ">
                <span className="border-2 p-2 rounded-xl ">
                  <ArrowDown />
                </span>
                <button className="hidden  px-6 py-2.5 bg-purple-950 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition lg:block">
                  Apply Now
                </button>
              </div>
            </div>
          </section>

          {/* IPO DETAILS CARD */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              IPO details
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border rounded-2xl border-gray-200  ">
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Size
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.issueSize || ipo.issueSize}
                </p>
              </div>
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price range
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.priceRange || ipo.priceRange}
                </p>
              </div>
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Minimum Amount
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.minInvest || ipo.minInvest}
                </p>
              </div>
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lot Size
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.minQty || ipo.lotSize}
                </p>
              </div>
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Dates
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.issueDates || ipo.issueDate}
                </p>
              </div>
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listed on
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.listedOn || ipo.listedOn}
                </p>
              </div>{" "}
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listed Price
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.listedPrice || ipo.listedPrice}
                </p>
              </div>
              <div className={`p-4 text-start`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Listed Gains
                </p>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  {details.listingGains || "N/A"}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              IPO timeline
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4  ">
              {details.timeline.map((step, index) => (
                <TimelineStep
                  key={index}
                  name={step.name}
                  date={step.date}
                  index={index}
                  isLast={index === details.timeline.length - 1}
                />
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {ipo.company}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
              {details.about}
            </p>

            <button className="lg:hidden text-indigo-600 font-medium mt-3">
              Read more
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};
