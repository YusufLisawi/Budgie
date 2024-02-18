// app.
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Analytics from "./components/Analytics/Analytics";
import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";

const App: React.FC = () => {
    return (
        <Router>
            <AppProvider>
                <div className="app flex h-screen">
                    <Sidebar />
                    <div className="flex-1 flex place-content-center py-3 overflow-hidden">
                        <div className="content shadow-lg bg-white rounded-2xl p-4">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/analytics" element={<Analytics />} />
                                {/* Обратите внимание, что exact был удален, т.к. в React Router v6 он не используется */}
                                <Route path="*" element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </AppProvider>
        </Router>
    );
}

export default App;
