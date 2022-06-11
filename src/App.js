import * as React from "react";
import Navbar from "./Components/Navbar/navBar";
import FirstSection from "./Components/firstSection/firstSection.js";
import SecondSection from "./Components/secondSection/secondSection.js";
import SideBar from "./Components/SideBar/sidebar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SideBar />
      <FirstSection />
      <SecondSection />
    </React.Fragment>
  );
}

export default App;
