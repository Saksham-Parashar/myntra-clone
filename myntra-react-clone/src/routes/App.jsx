import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/fetchItems";

function App() {
  return (
    <>
      <Header />
      <FetchItems></FetchItems>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
