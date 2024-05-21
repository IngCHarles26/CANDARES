import { Outlet } from "react-router-dom";
import Header from "./Header";

function Auth() {

  return (
    <>
      <Header />
      <div className="mx-auto w-full rounded p-3 mt-8 
        md:max-w-xl">
        <Outlet />
      </div>
    </>
  );
}

export default Auth;