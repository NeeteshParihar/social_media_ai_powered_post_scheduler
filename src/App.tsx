import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Scheduler from "./pages/Scheduler";
import AIComposer from "./pages/AIComposer";
import Account from "./pages/Account";
import Layout from "./components/Layout";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/scheduler" element={<Scheduler />} />
                    <Route path="/ai-composer" element={<AIComposer />} />
                    <Route path="/accounts" element={<Account />} />
                </Route>
            </Routes>
        </>
    );
}
