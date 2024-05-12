import React from 'react';

import './App.css';
import { NavbarComp } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddOnsProvider } from './context/AddonContext';
import { PlansProvider } from './context/PlanContext';
import AddOns from './pages/AddOns';
import NotFound from './pages/NotFound';
import PersonalInfo from './pages/PersonalInfo';
import SelectPlan from './pages/PlanSelect';
import Summary from './pages/Summary';

import ThankYou from './pages/ThankYou';



function App() {
  return (
    <PlansProvider>
    <AddOnsProvider>
      <BrowserRouter>
        <div className="App">
          <NavbarComp />
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/selectplan" element={<SelectPlan />} />
            <Route path="/addons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AddOnsProvider>
  </PlansProvider>
  );
}

export default App;
