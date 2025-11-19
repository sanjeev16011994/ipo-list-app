import TimelineStep from "./TimelineStep";

const IPODetails = ({ ipo }) => {
  const timeline = [
    { name: "Bidding starts", date: "12 Dec 2023" },
    { name: "Bidding ends", date: "15 Dec 2023" },
    { name: "Allotment finalisation", date: "18 Dec 2023" },
    { name: "Refund initiation", date: "18 Dec 2023" },
    { name: "Demat transfer", date: "18 Dec 2023" },
    { name: "Listing date", date: "21 Dec 2023" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">

      {/* --- Top Header --- */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={ipo.logoUrl}
          className="w-12 h-12 rounded-full"
          alt="Logo"
        />

        <div>
          <h1 className="text-xl font-bold text-gray-900">{ipo.company}</h1>
          <p className="text-sm text-gray-500">{ipo.companyType}</p>
        </div>
      </div>

      {/* --- IPO DETAILS CARD --- */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        IPO details
      </h2>

      <div className="bg-white rounded-xl border p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div>
          <p className="text-xs text-gray-500">Issue size</p>
          <p className="font-semibold">{ipo.issueSize}</p>
        </div>
        <div></div>
        <div>
          <p className="text-xs text-gray-500">Price range</p>
          <p className="font-semibold">{ipo.priceRange}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Min. Amount</p>
          <p className="font-semibold">{ipo.minAmount}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Min. Quantity</p>
          <p className="font-semibold">{ipo.lotSize}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs text-gray-500">Issue dates</p>
          <p className="font-semibold">{ipo.issueDate}</p>
        </div>
      </div>


      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
        IPO timeline
      </h2>

      <div className="relative border-l border-gray-200 pl-4">
        {timeline.map((step, idx) => (
          <TimelineStep
            key={idx}
            name={step.name}
            date={step.date}
            index={idx}
            isLast={idx === timeline.length - 1}
          />
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
        {ipo.company} Private Limited
      </h2>

      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam magni
        fugiat tempora omnis qui corrupti explicabo sit quia reprehenderit nam
        esse dolorem qui delectus odio ea temporibus ratione.
      </p>
    </div>
  );
};

export default IPODetails;
