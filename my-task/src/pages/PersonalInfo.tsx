import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name) {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }

    if (!email) {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }

    if (!number) {
      setNumberAlert(true);
    } else {
      setNumberAlert(false);
    }

    if (name && email && number) {
      navigate("/selectplan");
    }
  };

  return (
    <div className="container mx-5 px-5">
      <h1 className="txt-info">Personal info</h1>
      <p className="text-paragraph">
        Please provide your name, email address, and phone number.
      </p>
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit} className="my-3">
            <div className="form-group my-3">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                onChange={(e) => setName(e.target.value)}
                className={`form-control ${
                  nameAlert
                    ? "is-invalid"
                    : ""
                }`}
                type="text"
                placeholder="e.g. Stephen King"
              />
              {nameAlert && <div className="invalid-feedback">This field is required</div>}
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${
                  emailAlert
                    ? "is-invalid"
                    : ""
                }`}
                type="email"
                placeholder="e.g. stephenking@lorem.com"
              />
              {emailAlert && <div className="invalid-feedback">This field is required</div>}
            </div>
            <div className="form-group my-3">
              <label htmlFor="number">Phone Number</label>
              <input
                id="number"
                onChange={(e) => setNumber(e.target.value)}
                className={`form-control ${
                  numberAlert
                    ? "is-invalid"
                    : ""
                }`}
                type="text"
                placeholder="e.g. +1 234 567 890"
              />
              {numberAlert && <div className="invalid-feedback">This field is required</div>}
            </div>
            <div className="form-group">
              <button className="styled-btn" type="submit">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
