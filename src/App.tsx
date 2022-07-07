import React from 'react';
import Menu from "./menu/Menu";
import {Route, Routes} from "react-router-dom";
import EditorContainer from "./EditorContainer/EditorContainer";

function App() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/:noteId" element={
                    <EditorContainer />
                }/>
            </Routes>
        </>
    );
}

export default App;
