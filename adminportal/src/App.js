import { Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Navbars/NavBar";
import HomePage from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
       <MyNavbar />
       <HomePage />
       <Routes>
        <Route>

        </Route>
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
