import { Link } from "react-router-dom";

function FeatureCard({
  title,
  description,
  icon,
  color,
  link = "#",
}) {
  return (
    <Link to={link}>
      <div
        className={`
          ${color}
          rounded-2xl
          p-6
          shadow-lg
          cursor-pointer
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-2xl
          hover:-translate-y-2
        `}
      >
        <div className="text-5xl text-white mb-5">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="text-gray-200 mt-3 leading-7">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default FeatureCard;