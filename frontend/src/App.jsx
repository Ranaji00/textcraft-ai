import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Home2 from "./pages/Home2";
import User from "./pages/User";
import Edit from "./pages/Edit";
import Gallery from "./pages/Gallery";
import Subscription from "./pages/Subscription";
// import Header from './components/Header'
// import Section01 from './components/Section01'
// import Section02 from './components/Section02'
// import Footer from './components/Footer'
import ProtectedRoute from "./components/ProtectedRoutes"; // Import ProtectedRoute

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Register" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Public routes - No login required */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/genimg" element={<Home2 />} />

        {/* Protected routes - Login required */}
        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subs"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* <Header />
    <div className=' w-full bg-zinc-900 lg:-top-28 top-[-54px] lg:h-[700px] h-[500px] relative z-20 overflow-hidden flex  justify-center items-end  '>
      <video className=" object-cover w-full  px-1 h-[500px] lg:h-[700px]  brightness-75 "src="./images/Homepage_001.mp4"   autoPlay muted playsInline loop></video>
      <Section01/>
    </div>
    <div>
      <Section02/>
    </div>
    <Footer/> */}
    </>
  );
};

export default App;

// import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Home2 from './pages/Home2';
// import User from './pages/User';
// import Edit from './pages/Edit';
// import ProtectedRoute from './components/ProtectedRoutes'; // Import ProtectedRoute

// const App = () => {
//   console.log('App rendered'); // This log shows that the App is rendering

//   return (
//     <Routes>
//       <Route path="/Register" element={<Login />} />
//       <Route path="/" element={<Home />} />

//       {/* Protect /genimg route using ProtectedRoute */}
//       <Route
//         path="/genimg"
//         element={
//           <ProtectedRoute>
//             <Home2 />  {/* This page is only accessible if logged in */}
//           </ProtectedRoute>
//         }
//       />

//       <Route path="/profile" element={<User />} />
//       <Route path="/edit" element={<Edit />} />
//     </Routes>
//   );
// };

// export default App;
