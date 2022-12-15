import { Footer } from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Home from "./pages/Home";
import Store from "./pages/Store/Store";
import Library from "./pages/LibraryPage/Library";

function App() {
  return (
    <div className="App">
      <Header/>
{/*       <Home/>
      <Store/>
      <Library/> */}
      <Footer/>
    </div>
  );
}

export default App;
