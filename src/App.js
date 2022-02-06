import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import EnrollCourse from './pages/EnrollCourse/EnrollCourse/EnrollCourse';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import SignUp from './pages/Login/SignUp/SignUp';
import OurCourses from './pages/OurCourses/OurCourses';
import UserDetails from './pages/UserDetails/UserDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<SignUp></SignUp>} />
          <Route path="allcourses" element={<OurCourses></OurCourses>} />
          <Route path="allcourses/:courseId" element={<PrivateRoute><EnrollCourse /></PrivateRoute>} />
          <Route path="user" element={<UserDetails></UserDetails>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
