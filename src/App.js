import { useState } from "react";
import RatingDisplay from "./components/RatingDisplay";
import ThankYou from "./components/ThankYou";
function App() {
  const [selectedRate, setSelectedRate] = useState("");
  const getRate = (data) => {
    setSelectedRate(data);
  };
  console.log("rate=>", selectedRate);
  return (
    <div className="flex justify-center items-center h-[100vh] text-white bg-brightDark">
      {selectedRate ? (
        <ThankYou rating={selectedRate} />
      ) : (
        <RatingDisplay onSelectingRate={getRate} />
      )}
    </div>
  );
}

export default App;
