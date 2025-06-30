// Create a "like" component
// A heart icon that logs when clicked
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./Exercise_2.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Exercise_2 = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <div>
        <CiHeart className="iconHeart" onClick={toggle} />
      </div>
    );
  return (
    <div>
      <FaHeart className="iconHeart" onClick={toggle} />
    </div>
  );
};

export default Exercise_2;
