import { useParams } from "react-router-dom";
import { IPO_DATA } from "../data/ipoData";
import { IPODetailsPage } from "../components/IpoDetails/IpoDetailsPage";

const IPODetailsRouteWrapper = () => {
  const { ipoId } = useParams();

  // Convert ID to a number and find the corresponding IPO data
  const id = parseInt(ipoId);
  const currentIPO = IPO_DATA.find((ipo) => ipo.id === id);

  if (!currentIPO) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-50">
        <X className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          404: IPO Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The requested Initial Public Offering could not be located.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          Go back to IPO List
        </Link>
      </div>
    );
  }

  return <IPODetailsPage ipo={currentIPO} />;
};

export default IPODetailsRouteWrapper;
