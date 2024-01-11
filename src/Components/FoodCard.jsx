import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {CDN_URL} from "../Utils/constants"

export function FoodCard({ resData }) {
  // console.log(CDN_URL);
  const{cloudinaryImageId, name, avgRating, sla, cuisines, locality}=resData?.info
  return (
    <Card className="w-full max-w-[18rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={
            CDN_URL + cloudinaryImageId
          }
          alt="ui/ux review check"
          className="bg-red-100 h-48 object-cover w-full"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex flex-col items-left justify-between">
          <Typography variant="h6" color="blue-gray" className="font-bold " style={{
            maxWidth: "23ch",
                overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            {name}
          </Typography>
          <div className="flex justify-between">
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              {avgRating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography>{sla.slaString}</Typography>
          </div>
        </div>
        <Typography
          color="gray"
          className="bg-red-1000 text-sm"
          style={{
            maxWidth: "25ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {cuisines.join(", ")}
        </Typography>
        <Typography color="gray" className="bg-red-1000 text-sm" style={{
            maxWidth: "25ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
          {locality}
        </Typography>
      </CardBody>
    </Card>
  );
}
