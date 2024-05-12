import React from "react";

const ThankYou = () => {
  return (
    <div className="container mx-5 px-5 text-center">
      <div className="row">
        <div className="col-lg-12">
          <img
            className=" my-2"
            src="/assets/icon-thank-you.svg"
            alt="checkmark"
          />
        </div>
        <h1 className="txt-info">Thank you!</h1>
        <p className="last-paragraph">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
