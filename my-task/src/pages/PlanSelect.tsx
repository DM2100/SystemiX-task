import React, { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PlansContext from "../context/PlanContext";

interface Plan {
  id: number;
  img: string;
  title: string;
  price: number;
  extra?: string;
}

const SelectPlan: React.FC = () => {
  const navigate = useNavigate();
  const [toggleYearly, setToggleYearly] = useState(false);
  const [num, setNum] = useState(0);

  const { monthlyPlans, yearlyPlans, selectedMonthlyPlan, selectedYearlyPlan } =
    useContext(PlansContext);

  const handleToggleYearly = () => {
    setToggleYearly((prev) => !prev);
  };

  const handlePlanSelection = (plan: Plan, idx: number) => {
    if (toggleYearly) {
      selectedYearlyPlan.title = plan.title;
      selectedYearlyPlan.price = plan.price;
    } else {
      selectedMonthlyPlan.title = plan.title;
      selectedMonthlyPlan.price = plan.price;
    }
    setNum(idx + 1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedMonthlyPlan.title !== "" || selectedYearlyPlan.title !== "") {
      navigate("/addons");
    } else {
      alert("Please choose a plan");
    }
  };

  return (
    <div className="container mx-5">
      <h1 className="txt-info">Select your Plan</h1>
      <p className="text-paragraph">
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit}>
        
           {/* Monthly plans */}
        <div className="container">
          <div
            className="row"
            style={{
              display: toggleYearly ? "none" : "flex",
              flexWrap: "wrap",
            }}
          >
            {monthlyPlans.map((item: Plan, idx: number) => (
              <div key={item.id} className="col-lg-4 mb-3">
                <div
                  onClick={() => handlePlanSelection(item, idx)}
                  className={`plan ${num === idx + 1 ? "active" : ""} ${
                    num !== idx + 1 ? "bg-white" : "bg-primary-lightBlue"
                  } border rounded p-3`}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.img} alt="plan image" />
                  <div className="mt-4 pt-4 plan-title">{item.title}</div>
                  <div className="styled-plan-text">${item.price}/mo</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yearly plans */}
        <div className="container">
          <div
            className="row"
            style={{
              display: toggleYearly ? "flex" : "none",
              flexWrap: "wrap",
            }}
          >
            {yearlyPlans.map((item: Plan, idx: number) => (
              <div key={item.id} className="col-lg-4 mb-3">
                <div
                  onClick={() => handlePlanSelection(item, idx)}
                  className={`plan ${num === idx + 1 ? "active" : ""} ${
                    num !== idx + 1 ? "bg-white" : "bg-primary-lightBlue"
                  } border rounded p-3`}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.img} alt="plan image" />
                  <div className="mt-4 pt-4 plan-title">{item.title}</div>
                  <div className="styled-plan-text">${item.price}/mo</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center d-flex mx-5 px-5 my-3 align-items-center">
          <p className="mb-0 mr-2">Monthly</p>
          <label className="switch mx-4">
            <input
              type="checkbox"
              checked={toggleYearly}
              onChange={handleToggleYearly}
              className="sr-only"
            />
            <span className="slider round"></span>
          </label>
          <p className="mb-0 ml-2">Yearly</p>
        </div>
        <div className="text-center">
          <div className="row">
            <div className="col-lg-6">
              <button
                onClick={() => navigate("/")}
                type="button"
                className="back-btn mt-5 mx-3"
              >
                Go back
              </button>
            </div>
            <div className="col-lg-6">
              <button type="submit" className=" next-btn mx-3 mt-5">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
