import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./core/Main";
import EnglishDash from "./language/english/EnglishDash";
import SuomiDash from "./language/finnish/SuomiDash";
import Elainlaakari from "./language/finnish/ammatti/Elainlaakari";
import Header from "./core/Header";

const routeConfig = [
  { path: "/", component: Main },

  { path: "/SuomiDash", component: SuomiDash },
  { path: "/EnglishDash", component: EnglishDash },

  { path: "/Elainlaakari", component: Elainlaakari },
];

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
