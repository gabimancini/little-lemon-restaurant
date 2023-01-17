
import './App.css';
import Routing from "./routes/Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
      <Footer />
      </>
  );
}

export default App;
