import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Login from "./components/login_register/Login"
import Register from "./components/login_register/Register"
import Materi from "./components/materi/Materi";
import Materi_HTML from "./components/materi/belajar_HTML/Materi_HTML"
import DokumenPertama from "./components/materi/belajar_HTML/DokumenPertama"
import Paragraph from "./components/materi/belajar_HTML/Paragraph"
import Image from "./components/materi/belajar_HTML/Image"
import Section from "./components/materi/belajar_HTML/Section"
import Navigation from "./components/materi/belajar_HTML/Navigation"
import Footer from "./components/materi/belajar_HTML/Footer";
import CSS_Internal from "./components/materi/belajar_CSS/CSS_Internal";
import CSS_Inline from "./components/materi/belajar_CSS/CSS_Inline";
import CSS_Eksternal from "./components/materi/belajar_CSS/CSS_Eksternal";
import WidhtAndHeight from "./components/materi/belajar_CSS/WidhtAndHeight";
import MarginAndPadding from "./components/materi/belajar_CSS/MarginAndPadding";
import Float from "./components/materi/belajar_CSS/Float";
import CSS_Navigation from "./components/materi/belajar_CSS/CSS_Navigation";
import InstallReactjs from "./components/materi/belajar_Javascript/InstallReactjs";
import Mengenaljsx from "./components/materi/belajar_Javascript/Mengenaljsx";
import ReactDOMRender from "./components/materi/belajar_Javascript/ReactDOMRender";
import DesignWeb from "./components/materi/belajar_Javascript/DesignWeb";
import SlicingComponent from "./components/materi/belajar_Javascript/SlicingComponent";
import PropsComponent from "./components/materi/belajar_Javascript/PropsComponent";
import EventsArgumentsEvents from "./components/materi/belajar_Javascript/EventsArgumentsEvents";
import SintakDasarPHP from "./components/materi/belajar_PHP/SintakDasarPHP";
import KomentarPadaPHP from "./components/materi/belajar_PHP/KomentarPadaPHP";
import VariabelPadaPHP from "./components/materi/belajar_PHP/VariabelPadaPHP";
import TipeDataPHP from "./components/materi/belajar_PHP/TipeDataPHP";
import OperatorPHP from "./components/materi/belajar_PHP/OperatorPHP";
import IfElse from "./components/materi/belajar_PHP/IfElse";
import Switch from "./components/materi/belajar_PHP/Switch";
import WhileAndDoWhile from "./components/materi/belajar_PHP/WhileAndDoWhile";
import ForAndForeach from "./components/materi/belajar_PHP/ForAndForeach";

function App() {  
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route> 
        <Route path="/Materi" element={<Materi/>}></Route>
        {/* Materi HTML */}
          <Route path="/Materi_HTML" element={<Materi_HTML/>}></Route>
          <Route path="/DokumenPertama" element={<DokumenPertama/>}></Route>
          <Route path="/Paragraph" element={<Paragraph/>}></Route>
          <Route path="/Image" element={<Image/>}></Route>
          <Route path="/Section" element={<Section/>}></Route>
          <Route path="/Navigation" element={<Navigation/>}></Route>
          <Route path="/Footer" element={<Footer/>}></Route>
        {/* End Materi HTML */}

        {/* Materi CSS */}
          <Route path="/CSS_Internal" element={<CSS_Internal/>}></Route>
          <Route path="/CSS_Inline" element={<CSS_Inline/>}></Route>
          <Route path="/CSS_Eksternal" element={<CSS_Eksternal/>}></Route>
          <Route path="/WidhtAndHeight" element={<WidhtAndHeight/>}></Route>
          <Route path="/MarginAndPadding" element={<MarginAndPadding/>}></Route>
          <Route path="/Float" element={<Float/>}></Route>
          <Route path="/CSS_Navigation" element={<CSS_Navigation/>}></Route>
        {/* End Materi CSS */}

        {/* Materi Javascript */}
          <Route path="/InstallReactjs" element={<InstallReactjs/>}></Route>
          <Route path="/Mengenaljsx" element={<Mengenaljsx/>}></Route>
          <Route path="/ReactDOMRender" element={<ReactDOMRender/>}></Route>
          <Route path="/DesignWeb" element={<DesignWeb/>}></Route>
          <Route path="/SlicingComponent" element={<SlicingComponent/>}></Route>
          <Route path="/PropsComponent" element={<PropsComponent/>}></Route>
          <Route path="/EventsArgumentsEvents" element={<EventsArgumentsEvents/>}></Route>
        {/* End Materi Javascript */}

        {/* Materi PHP */}
          <Route path="/SintakDasarPHP" element={<SintakDasarPHP/>}></Route>
          <Route path="/KomentarPadaPHP" element={<KomentarPadaPHP/>}></Route>
          <Route path="/VariabelPadaPHP" element={<VariabelPadaPHP/>}></Route>
          <Route path="/TipeDataPHP" element={<TipeDataPHP/>}></Route>
          <Route path="/OperatorPHP" element={<OperatorPHP/>}></Route>
          <Route path="/IfElse" element={<IfElse/>}></Route>
          <Route path="/Switch" element={<Switch/>}></Route>
          <Route path="/WhileAndDoWhile" element={<WhileAndDoWhile/>}></Route>
          <Route path="/ForAndForeach" element={<ForAndForeach/>}></Route>
        {/* End Materi PHP */}

        
      </Routes>
    </Router>
  )
}

export default App
