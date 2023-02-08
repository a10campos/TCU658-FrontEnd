import { BrowserRouter,Route,Routes } from "react-router-dom";
import Vocabulary from "../Vocabulary";
import Levels from "../Levels";
import Units from "../Units";
import TestPage from "../TestPage";
import Themes from "../Themes";
export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Levels></Levels>}></Route>
            <Route path="/:level_id" element={<Units></Units>}></Route>
            <Route path="/:level_id/:unit_id" element={<Themes></Themes>}></Route>
            <Route path="/:level_id/:unit_id/:theme_id" element={<Vocabulary></Vocabulary>}></Route>
            <Route path="/:level_id/:unit_id/:theme_id/test" element={<TestPage></TestPage>}></Route>
        </Routes>
        </BrowserRouter>
    );
};