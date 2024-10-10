import React from "react";
import { Header } from "./layout/Header"; 
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

function App() {
  return (
    <div className="App">
        <React.Fragment>
          <Header />
          <Main />
          <Footer />
        </React.Fragment>
    </div>
  );
}

export default App;
