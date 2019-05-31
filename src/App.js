import React from "react";
import MainCont from './MainCont'
import list from "./list.json";

import "./App.css";

function App() {
    return (
        <div className="App">
            <MainCont list={list.bili}></MainCont>
        </div>
    );
}

export default App;
