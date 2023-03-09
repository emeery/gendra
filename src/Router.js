import Header from "./components/Header";
import List from './components/List';
import { Route, Navigate, Routes } from "react-router-dom";

const AppRouter = () => (
    <div>
      <Header />
      <Routes>
        <Route path="/" component={List}  />
        {/* <Navigate  to='/' />   */}
      </Routes>
    </div>
);
export default AppRouter;