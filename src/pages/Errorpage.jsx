import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

 
  console.error(error);

  return (
    <div>
      <NavBar />
      <main>
        <h1>Oops! Something went wrong.</h1>
      </main>
    </div>
  );
};

export default ErrorPage;

