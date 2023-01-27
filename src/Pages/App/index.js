import { BrowserRouter,Route,Routes } from "react-router-dom";
import Vocabulary from "../Vocabulary";
import Levels from "../Levels";
import Units from "../Units";
import TestPage from "../TestPage";
export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Levels></Levels>}></Route>
            <Route path="/units" element={<Units></Units>}></Route>
            <Route path="/units/vocabulary" element={<Vocabulary></Vocabulary>}></Route>
            <Route path="/units/vocabulary/test" element={<TestPage></TestPage>}></Route>
        </Routes>
        </BrowserRouter>
    );
};