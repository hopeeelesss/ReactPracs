import './App.css';
import MainPage from "./components/MainPage";
import Anekdot from "./components/Anekdot";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        // <MainPage/>
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path="/anek/fish" element={<Anekdot theme="Рыбалка"/>}/>
            <Route exact path="/anek/shtirlits" element={<Anekdot theme="Штирлиц"/>}/>
            <Route exact path="/anek/narik" element={<Anekdot theme="Наркоманы"/>}/>
        </Routes>
    );
}

export default App;
