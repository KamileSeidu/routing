import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "./MainNavigation";

function Error() {
  const error = useRouteError();

  // Default message and title
  let title = "An error occured!";
  let message = "Something went wrong";

  // Keeps the error title and throws a new message!
  if (error.status === 500) {
    message = error.data.message;
  }

  // throws a new message and title when the error is 404
  // Default status for path that is not defined or supported.
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
