import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const ErrorPage = () => {
  return (
    <div className="h-[calc(100vh_-_100px)] min-h-[400px] px-4 sm:px-[7%] flex justify-center items-center flex-col text-Primary">
      <h1 className="text-5xl md:text-8xl font-semibold">404</h1>
      <p className="text-3xl my-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-xl mb-4">
        It might have been moved or deleted. Double-check the URL or try
        navigating back.
      </p>
      <Link to="/" className="text-lg">
        Return to Home
      </Link>
    </div>
  );
};

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <ErrorPage />
    </>
  );
}
