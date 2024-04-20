import { StarIcon } from "@heroicons/react/16/solid";

const RatingStar = ({ count }: { count: Number }) => {
  return (
    <div className="flex mb-1">
      {Array.from({ length: count.valueOf() }).map((_, index) => (
        <StarIcon className="text-yellow-400 w-4" key={index} />
      ))}
    </div>
  );
};

export default RatingStar;
