import { createContext, useState } from "react";

const AppContext = createContext();
const [bmi, setBMI] = useState(null);
const calculateBMI = () => {};

const BMIProvider = ({ children }) => {
  return;
  <AppContext.Provider value={{ bmi, calculateBMI }}>
    {children}
  </AppContext.Provider>;
};

export { BMIProvider, AppContext };
