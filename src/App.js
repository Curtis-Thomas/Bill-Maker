import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./core/Main";

import Header from "./core/Header";
import { Box } from "@mui/material";
import VeterinaryBill from "./category/veterinary/veterinaryBill/VeterinaryBill";
import VeterinaryDash from "./category/veterinary/VeterinaryDash";

const routeConfig = [
  { path: "/", component: Main },

  { path: "/VeterinaryDash", component: VeterinaryDash },

  { path: "/VeterinaryBill", component: VeterinaryBill },
];

function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: "#161211",
          minHeight: "100vh",
          pl: 5,
          pr: 5,
          pt: 5,
          pb: 5,
        }}
      >
        <Header />
        <Routes>
          {/* Render the routes based on the routeConfig */}
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
