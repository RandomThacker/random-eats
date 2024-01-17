import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

function ShimmerCard() {
    return (
        <Card className="w-full max-w-[18rem] shadow-lg animate-pulse">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-56 place-items-center bg-gray-300"
          >
            <div className="bg-transparent"></div>
          </CardHeader>
          <CardBody>
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-3 w-56 rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="paragraph"
              className="mb-2 h-2 w-full rounded-full bg-gray-300"
            >
              &nbsp;
            </Typography>
          </CardBody>
        </Card>
      );
}


export function ShimmerContainer() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className='w-[100%] flex flex-wrap gap-16 justify-center py-10'>
      {data.map((index) => (
        <ShimmerCard key={index} resData={index} />
      ))}
    </div>
  );
}
