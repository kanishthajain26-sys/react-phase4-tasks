import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

       
        <Route path="/" element={<Home />} />

      
        <Route path="/dashboard" element={<Sidebar />}>

          <Route index element={<Dashboard />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

     
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;