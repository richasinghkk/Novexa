import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition"
    >
      <FaArrowLeft />
      Back
    </button>
  );
}

export default BackButton;