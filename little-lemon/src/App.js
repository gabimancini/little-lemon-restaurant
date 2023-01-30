
import './App.css';
import Routing from "./routes/Routing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
   <>
   <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
      <Footer />
      </ChakraProvider>
      </>
  );
}

export default App;
