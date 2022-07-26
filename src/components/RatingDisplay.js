import { useState } from "react";
import star from "../images/icon-star.svg";

const RatingDisplay = (props) => {
  const [selectedRate, setSelectedRate] = useState("");
  const handleClick = (e) => {
    setSelectedRate(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };
  const handleSubmit = () => {
    props.onSelectingRate(selectedRate);
  };
  console.log(typeof selectedRate);
  console.log(!selectedRate);
  let theme1, theme2, theme3, theme4, theme5;
  theme1 =
    +selectedRate === 1
      ? "bg-lightgray text-white"
      : "bg-ballGray text-letterWhite";
  theme2 =
    +selectedRate === 2
      ? "bg-lightgray text-white"
      : "bg-ballGray text-letterWhite";
  theme3 =
    +selectedRate === 3
      ? "bg-lightgray text-white"
      : "bg-ballGray text-letterWhite";
  theme4 =
    +selectedRate === 4
      ? "bg-lightgray text-white"
      : "bg-ballGray text-letterWhite";
  theme5 =
    +selectedRate === 5
      ? "bg-lightgray text-white"
      : "bg-ballGray text-letterWhite";

  return (
    <>
      <div className="p-5 w-[20rem] h-[25rem] rounded-[20px] bg-gray md:w-[25rem]">
        <div className="">
          <img
            className="rounded-[50%] p-3 bg-ballGray mb-8"
            src={star}
            alt="star-logo"
          ></img>
        </div>
        <div>
          <p className="text-headerWhite text-[1.5rem] ">How did we do</p>
        </div>
        <div className="mt-4 mb-5 ">
          <p className="opacity-60">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="mb-5 flex space-x-2 justify-center md:space-x-6  md:mb-9">
          <div
            onClick={handleClick}
            id={1}
            className={
              theme1 +
              " w-12 h-12 rounded-[50%] p-3 text-center hover:cursor-pointer hover:bg-orange md:text-xl"
            }
          >
            1
          </div>
          <div
            onClick={handleClick}
            id={2}
            className={
              theme2 +
              " w-12 h-12 rounded-[50%] p-3 text-center hover:cursor-pointer hover:bg-orange md:text-xl"
            }
          >
            2
          </div>
          <div
            onClick={handleClick}
            id={3}
            className={
              theme3 +
              " w-12 h-12 rounded-[50%] p-3 text-center hover:cursor-pointer hover:bg-orange md:text-xl"
            }
          >
            3
          </div>
          <div
            onClick={handleClick}
            id={4}
            className={
              theme4 +
              " w-12 h-12 rounded-[50%] p-3 text-center hover:cursor-pointer hover:bg-orange md:text-xl"
            }
          >
            4
          </div>
          <div
            onClick={handleClick}
            id={5}
            className={
              theme5 +
              " w-12 h-12 rounded-[50%] p-3 text-center hover:cursor-pointer hover:bg-orange md:text-xl"
            }
          >
            5
          </div>
        </div>
        <div className="text-center ">
          <button
            onClick={handleSubmit}
            className="text-submitWhite rounded-full bg-orange py-3 px-[6.5rem] hover:bg-white hover:text-submitOrange md:px-[9rem]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default RatingDisplay;
