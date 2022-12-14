import Profile from "./Components/Profile/Profile";
import { Footer } from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
// import Home from "./Pages/Home";
// import SignInUp from "./Pages/SignInUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      {/* <Home /> */}
      {/* <SignInUp /> */}
      <Footer />
    </div>
  );
}

export default App;
