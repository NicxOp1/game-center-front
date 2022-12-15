import ComponentRoutes from "./ComponentRoutes";
import Layout from "./layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "./Redux/Actions/userActions";
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
