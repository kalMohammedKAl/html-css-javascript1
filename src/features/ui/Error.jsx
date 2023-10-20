import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const erroe = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{erroe.data || erroe.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
