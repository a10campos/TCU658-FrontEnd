import { BrowserRouter,Route,Routes } from "react-router-dom";
import Vocabulary from "../Vocabulary";
export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Vocabulary></Vocabulary>}></Route>
        </Routes>
        </BrowserRouter>
    );
};