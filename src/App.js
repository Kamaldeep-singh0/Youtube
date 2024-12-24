import Header from "./Header";
import Body from "./Body";
import "./App.css";
import store from "./utils/store";
import { Provider } from "react-redux"
 
function App() {
  return (
    <Provider store= {store}>
    <div>
     <Header/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
