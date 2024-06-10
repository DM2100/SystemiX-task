import React, { useState, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import AddOnsContext from "../context/AddonContext";

interface AddOn {
  id: number;
  value: string;
  desc: string;
  price: number;
}

const AddOns: React.FC = () => {
  const navigate = useNavigate();
  const { addOns, setSelectedAddOnsValue } = useContext(AddOnsContext);

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedAddOnsValue(
      addOns.filter((_, idx) => selectedAddOns.includes(idx))
    );
    navigate("/summary");
  };

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedAddOns([...selectedAddOns, idx]);
    } else {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== idx));
    }
  };

  return (
    <div className="container mx-5">
      <h1 className="txt-info">Pick add-ons</h1>
      <p className="text-paragraph">
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={handleSubmit}>
        {addOns.map((item: AddOn, idx: number) => (
          <div key={item.id} className="row mb-3">
            <div className="col-lg-12">
              <div
                className="styled-input"
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <input
                      id={`checkbox-${idx}`}
                      className={`h-5 w-5 ${
                        selectedAddOns.includes(idx) ? "active-checkbox" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onChange={(e) => handleCheckboxChange(e, idx)}
                      type="checkbox"
                      checked={selectedAddOns.includes(idx)}
                      value={item.value}
                    />
                  </div>
                  <div>
                    <p className="plan-title ">{item.value}</p>
                    <p className="text-paragraph">{item.desc}</p>
                  </div>
                  <div>
                    <p>+${item.price}/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-5">
          <button
            onClick={() => navigate("/selectplan")}
            type="button"
            className="back-btn mx-3"
          >
            Go back
          </button>
          <button type="submit" className="next-btn mx-3">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOns;
