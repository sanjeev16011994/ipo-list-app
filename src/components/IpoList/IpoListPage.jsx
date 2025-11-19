import { IPO_DATA } from "../../data/ipoData";
import IPOListItem from "./IpoListItem";


const IPOListPage = () => {
  const columnHeaders = [
    { title: "Company / Issue date", width: "w-4/12" },
    { title: "Issue size", width: "w-3/12", hidden: "md:block" },
    { title: "Price range", width: "w-2/12", hidden: "md:block" },
    { title: "Min Invest/qty", width: "w-3/12 text-right" }
  ];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
        IPO List
      </h1>

      {/* Header */}
      <div className="flex items-center bg-gray-50 border-y border-gray-200 px-4 py-3 
                      text-xs font-semibold text-gray-600 uppercase tracking-wider">

        {columnHeaders.map((header, i) => (
          <div
            key={i}
            className={`${header.width} 
            ${header.hidden ? `hidden ${header.hidden}` : ""}
            ${header.title === "Company / Issue date" ? "text-left" : ""}`}
          >
            {header.title}
          </div>
        ))}
      </div>

      {/* List */}
      <div className="border-x border-b border-gray-100 rounded-b-lg overflow-hidden">
        {IPO_DATA.map((ipo) => (
          <IPOListItem key={ipo.id} ipo={ipo} />
        ))}
      </div>
    </div>
  );
};

export default IPOListPage;
