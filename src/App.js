import { Footer } from "./layout/footer/Footer"
import Header from "./layout/header/Header"
// import Home from "./Pages/Home";
import SignInUp from "./pages/SignInUp"


function App() {
  return (
    <div className="App">
      <Header />
      {/*<Home /> */}
      <SignInUp />
      <Footer />
    </div>
  );
}

export default App;
