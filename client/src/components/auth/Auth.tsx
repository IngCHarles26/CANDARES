import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="py-10">
      <h1 className="text-4xl my-10 font-extrabold text-center">
        CAND
        <span className="font-normal">ARES</span>
    </h1>
      <Outlet />
    </div>
  );
}

export default Auth;