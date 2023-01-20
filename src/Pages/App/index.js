import { BrowserRouter,Route,Routes } from "react-router-dom";
import Vocabulary from "../Vocabulary";
import Levels from "../Levels";
import Units from "../Units";
export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Levels></Levels>}></Route>
            <Route path="/units" element={<Units></Units>}></Route>
            <Route path="/units/vocabulary" element={<Vocabulary></Vocabulary>}></Route>
        </Routes>
        </BrowserRouter>
    );
};