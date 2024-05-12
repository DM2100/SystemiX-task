import React, { createContext, useState, ReactNode } from "react";

interface AddOn {
  id: number;
  value: string;
  desc: string;
  price: number;
}

interface AddOnsContextType {
  addOns: AddOn[];
  setAddOns: React.Dispatch<React.SetStateAction<AddOn[]>>;
  selectedAddOnsValue: AddOn[];
  setSelectedAddOnsValue: React.Dispatch<React.SetStateAction<AddOn[]>>;
}

const defaultValues: AddOnsContextType = {
  addOns: [],
  setAddOns: () => {},
  selectedAddOnsValue: [],
  setSelectedAddOnsValue: () => {}
};

const AddOnsContext = createContext<AddOnsContextType>(defaultValues);

export const AddOnsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [addOns, setAddOns] = useState<AddOn[]>([
    {
      id: 1,
      value: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      value: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      value: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ]);

  const [selectedAddOnsValue, setSelectedAddOnsValue] = useState<AddOn[]>([]);

  return (
    <AddOnsContext.Provider
      value={{
        addOns,
        setAddOns,
        selectedAddOnsValue,
        setSelectedAddOnsValue
      }}
    >
      {children}
    </AddOnsContext.Provider>
  );
};

export default AddOnsContext;
