import "./App.css";
import Cardreact from "./components/Card";
import Caroselreact from "./components/Carousel";
import Navbarreact from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Productcategory from "./components/Product category";
import { cloths } from "./Data/Data";
import { electronics } from "./Data/Data";

function App() {
  return (
    <div className="App">
      <Navbarreact />
      <Caroselreact />
      <Productcategory Tittle={"CLOTHS"}/>
      <Cardreact prod={cloths}/>
      <Productcategory Tittle={"ELECTONICS"}/>
      <Cardreact prod={electronics}/>
      
    </div>
  );
}

export default App;
