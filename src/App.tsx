import React from 'react';

import './App.css';
import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import Letter from "./components/letter";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Layout from "./components/layout";
import LayoutComponent from "./components/layout";

function App() {
    const [theme, colorMode] = useMode()


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayoutComponent>
                <div className="app">

                    <Routes>
                        <Route element={<PrivateRoute/>}>
                            <Route path="/" element={<Home/>}/>
                        </Route>
                        <Route path="login" element={<AuthRootComponent/>}/>
                        <Route path="register" element={<AuthRootComponent/>}/>
                        <Route path="letter" element={<Letter />}/>
                    </Routes>
                </div>
                </LayoutComponent>
            </ThemeProvider>


        </ColorModeContext.Provider>

    );
}

export default App;
