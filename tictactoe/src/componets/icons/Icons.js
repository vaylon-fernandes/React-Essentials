import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({ choice }) => {
  switch (choice) {
    case "cross":
      return <FaTimes />;
    case "circle":
      return <FaRegCircle />;
    default:
      return <FaPen />;
  }
};

export default Icon;
