import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/home";
import RootLayout from "./components/rootlayout.jsx";
import About from "./pages/about";
import Latest from "./pages/Latest";
function App() {




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element></Route>
        </Route>
    </div>
  );
}

export default App;
!