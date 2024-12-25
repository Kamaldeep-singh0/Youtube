import Header from "./Header";
import Body from "./Body";
import "./App.css";
import store from "./utils/store";
import { Provider } from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from "./body/MainContainer";
import WatchPage from "./watch page/WatchPage";

 const appRouter = createBrowserRouter([{
       path:"/",
       element :<Body/>,
       children:[
       {
        path:"/",
        element :<MainContainer/>,
       },
       {
        path:"watch",
        element :<WatchPage/>,
       }
       ]
 }])

 
function App() {
  return (
    <Provider store= {store}>
    <div>
     <Header/>
     <RouterProvider router = {appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
