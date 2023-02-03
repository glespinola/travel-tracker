import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

