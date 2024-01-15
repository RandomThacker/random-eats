import { Typography } from "@material-tailwind/react";
import { ShimmerContainer } from "./ShimmerContainer";

function ImagePlacehoderSkeleton() {
  return (
    <div className="flex animate-pulse flex-wrap items-center gap-8 w-[100%] my-5">
      <div className="w-[76%]">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-3 w-[100%] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[100%] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[100%] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[100%] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>

        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-[100%] rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
      <div className="grid h-24 w-36 place-items-center rounded-lg bg-gray-300"></div>
    </div>
  );
}

export default function ShimmerMenu() {
  return (
    <div className="w-[100%] flex flex-col align-middle justify-center">
        <div className="w-[50%] mx-auto block">
        <ImagePlacehoderSkeleton />
        <ImagePlacehoderSkeleton />
        <ImagePlacehoderSkeleton />
        <ImagePlacehoderSkeleton />
        <ImagePlacehoderSkeleton />
        </div>
    </div>
  );
}
