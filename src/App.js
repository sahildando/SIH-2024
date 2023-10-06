import './App.css';
import { ChakraProvider, CheckboxGroup } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeartDiseaseForm from './components/Form';
import Home from './components/Home';
import Recommendations from './components/Recommendations';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<HeartDiseaseForm />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>  
  );
}

export default App;
