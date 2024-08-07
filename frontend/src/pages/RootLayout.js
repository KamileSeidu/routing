import { Outlet } from "react-router-dom";
import MainNagation from "../components/MainNavigation";
function RootLayout() {
  return (
    <>
      <MainNagation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
