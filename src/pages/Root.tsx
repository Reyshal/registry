import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import { LoaderSpinner } from "../components/LoaderSpinner";

export default function Root() {
  const navigation = useNavigation();

  return (
    <div className="container px-20 mx-auto">
      <Header />
      {navigation.state === "loading" ? (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <LoaderSpinner />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
