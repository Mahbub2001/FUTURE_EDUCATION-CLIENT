import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routers/Routes/Router";

function App() {
  return (
    <div className="m-container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
