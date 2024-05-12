import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../constants/data";
import PersonalInfo from "../pages/PersonalInfo";
import PlanSelect from "../pages/PlanSelect";


export const NavbarComp = () => {
  return (
    <aside className="navbar-bg">
      {data.map((item, idx) => {
        return (
          <div key={idx} className="row mx-5 align-items-center">
            <div className="col-lg-12  d-flex align-items-center">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#000" : "hsl(229, 24%, 87%)",
                  background: isActive ? "hsl(228, 100%, 84%)" : "transparent",
                  border: isActive ? "none" : "2px solid hsl(229, 24%, 87%)",
                  fontWeight: "500",
                  width: "3rem",
                  height: "3rem", 
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "1rem" 
                })}
                to={item.linkTo}
              >
                {item.id}
              </NavLink>
              <div>
                <p className="item-step mx-2">{item.step}</p>
                <p className="item-title">{item.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
};
