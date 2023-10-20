import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const Navigate = useNavigate();
  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        onClick={() => Navigate(-1)}
      >
        &larr; Go back
      </button>
    );
  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
