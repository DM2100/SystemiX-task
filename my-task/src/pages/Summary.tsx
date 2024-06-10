import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PlansContext from "../context/PlanContext";
import AddOnsContext from "../context/AddonContext";
import { Plan, AddOn } from "../components/Types"; // Import the Plan and AddOn types

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const { selectedMonthlyPlan, selectedYearlyPlan } = useContext(PlansContext);
  const { selectedAddOnsValue } = useContext(AddOnsContext);

  const totalPricePerMonth = () => {
    let total = selectedMonthlyPlan?.price || 0;
    selectedAddOnsValue?.forEach((addOn: AddOn) => {
      total += addOn.price;
    });
    return total;
  };

  return (
    <div className="container mx-5">
      <h1 className="txt-info">Finishing up</h1>
      <p className="text-paragraph">
        Double-check everything looks OK before confirming.
      </p>

      {/* SELECTED PLAN */}
      <div className="row styled-summary py-3">
        <div className="col-lg-6">
          <span className="styled-plan-title mx-3">
            {selectedMonthlyPlan?.title} {selectedYearlyPlan?.title}
          </span>
          {selectedMonthlyPlan?.title ? (
            <span className="styled-plan-title"> (Monthly)</span>
          ) : (
            <span className="styled-plan-title"> (Yearly)</span>
          )}
          <p
            onClick={() => navigate("/selectplan")}
            className="styled-change-btn mx-3"
          >
            Change
          </p>
        </div>

        <div className="col-lg-6 right">
          <span className="styled-price">
            ${selectedMonthlyPlan?.price} {selectedYearlyPlan?.price}
          </span>
          {selectedMonthlyPlan?.price ? (
            <span className="styled-price">/mo</span>
          ) : (
            <span className="styled-price">/yr</span>
          )}
        </div>
      </div>

      {/* ONLINE SERVICE */}
      <div className="row styled-summary py-3 mt-1">
        <div className="col-lg-">
          {selectedAddOnsValue?.map((item: AddOn) => (
            <div key={item.id} style={{ display: "flex" }}>
              <div>
                <p className="styled-value mx-3">{item.value}</p>{" "}
              </div>
              <div style={{ marginLeft: "auto" }}>
                <p className="styled-price">+${item.price}/mo</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOTAL  */}
      <div className="row mt-3">
        <div className="col-lg-6">
          <div>
            <p className="">Total (per month)</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right styled-right">+${totalPricePerMonth()}/mo</div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="text-center">
        <div className="row">
          <div className="col-lg-6">
          <button
                onClick={() => navigate("/addons")}
                type="button"
                className="back-btn mt-5 mx-3"
              >
                Go back
              </button>
          </div>
          <div className="col-lg-6">
            <button
              type="button"
              className="next-btn mt-5 mx-3"
              onClick={() => navigate("/thankyou")}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
