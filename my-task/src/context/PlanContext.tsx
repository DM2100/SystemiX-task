import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

interface Plan {
  id: number;
  img: string;
  title: string;
  price: number; // Ensure price is always defined as a number
  extra?: string; // Optional property for yearly plans
}

interface PlansContextType {
  monthlyPlans: Plan[];
  setMonthlyPlans: Dispatch<SetStateAction<Plan[]>>;
  yearlyPlans: Plan[];
  setYearlyPlans: Dispatch<SetStateAction<Plan[]>>;
  selectedMonthlyPlan: Plan;
  setSelectedMonthlyPlan: Dispatch<SetStateAction<Plan>>;
  selectedYearlyPlan: Plan;
  setSelectedYearlyPlan: Dispatch<SetStateAction<Plan>>;
}

const defaultPlan: Plan = {
  id: 0, // Provide default id
  img: "", // Provide default img
  title: "",
  price: 0, // Provide default price
};

const PlansContext = createContext<PlansContextType>({} as PlansContextType);

export const PlansProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [monthlyPlans, setMonthlyPlans] = useState<Plan[]>([
    { id: 1, img: "/assets/icon-arcade.svg", title: "Arcade", price: 9 },
    { id: 2, img: "/assets/icon-advanced.svg", title: "Advanced", price: 12 },
    { id: 3, img: "/assets/icon-pro.svg", title: "Pro", price: 15 },
  ]);
  
  const [yearlyPlans, setYearlyPlans] = useState<Plan[]>([
    { id: 4, img: "/assets/icon-arcade.svg", title: "Arcade", price: 90, extra: "2 months free" },
    { id: 5, img: "/assets/icon-advanced.svg", title: "Advanced", price: 120, extra: "2 months free" },
    { id: 6, img: "/assets/icon-pro.svg", title: "Pro", price: 150, extra: "2 months free" },
  ]);

  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState<Plan>(defaultPlan);
  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState<Plan>(defaultPlan);

  return (
    <PlansContext.Provider
      value={{
        monthlyPlans,
        setMonthlyPlans,
        yearlyPlans,
        setYearlyPlans,
        selectedMonthlyPlan,
        setSelectedMonthlyPlan,
        selectedYearlyPlan,
        setSelectedYearlyPlan
      }}
    >
      {children}
    </PlansContext.Provider>
  );
};

export default PlansContext;
