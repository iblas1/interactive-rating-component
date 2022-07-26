import thankYou from "../images/illustration-thank-you.svg";
const ThankYou = (props) => {
  return (
    <div className="p-5 w-[20rem] h-[25rem] rounded-[20px] bg-gray md:w-[25rem] text-center">
      <div className="mt-6 md:mt-4">
        <img src={thankYou} alt="thank-you" className="mx-auto w-[40%]" />
      </div>
      <div className="mt-9 mb-6">
        <p className="rounded-full bg-ballGray py-1 text-orange">
          You selected {props.rating} out of 5
        </p>
      </div>
      <div>
        <p className="text-white font-bold text-[1.6rem]">Thank you!</p>
      </div>
      <div className="mt-8 md:mt-7">
        <p className="text-letterWhite text-[0.8rem] md:text-[0.95rem]">
          We appreciate you taking your time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
