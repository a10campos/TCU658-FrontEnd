import { BrowserRouter,Route,Routes } from "react-router-dom";
import Vocabulary from "../Vocabulary";
import Levels from "../Levels";
import Home from "../Home";
import Units from "../Units";
import TestPage from "../TestPage";
import Themes from "../Themes";
export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/levels" element={<Levels></Levels>}></Route>
            <Route path="/levels/:level_id" element={<Units></Units>}></Route>
            <Route path="/levels/:level_id/:unit_id" element={<Themes></Themes>}></Route>
            <Route path="/levels/:level_id/:unit_id/:theme_id" element={<Vocabulary></Vocabulary>}></Route>
            <Route path="/levels/:level_id/:unit_id/:theme_id/test" element={<TestPage></TestPage>}></Route>
        </Routes>
        </BrowserRouter>
    );
};