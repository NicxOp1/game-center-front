import ComponentRoutes from "./ComponentRoutes";
import Layout from "./layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "./Redux/Actions/userActions";
/* import { Footer } from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Home from "./pages/Home"; */

function App() {
  //Keep log
  let { logWithToken } = userActions;
  // let { role, logged } = useSelector(state=>state.userReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      dispatch(logWithToken(token.token.user));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Layout>
        <ComponentRoutes />
      </Layout>
    </>
  );
}

export default App;
