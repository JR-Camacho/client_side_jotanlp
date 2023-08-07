import { FaceFrownIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { ExclamationTriangle, HandThumbsDown, HandThumbsUp, Heart } from "react-bootstrap-icons";

const LoadingAndErrorCard = ({ errorMessage, isError, loading }) => {
  return (
    <div className="w-full lg:w-2/5 h-[300px] lg:h-auto lg:min-h-[350px] bg-[#1e293b] text-white flex flex-col justify-center items-center">
      {loading && !isError ? (
        <Typography className="text-4xl font-bold">Analizing...</Typography>
      ) : !isError && !loading ? (
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between">
            <FaceSmileIcon
              height={150}
              width={150}
              className="text-green-400"
            />
            <FaceFrownIcon height={100} width={100} className="text-red-300" />
          </div>
          <div className="w-full flex justify-center">
            <Heart
              height={150}
              width={150}
              className="text-red-400"
            />
          </div>
          <div className="w-full flex justify-between">
            <HandThumbsUp
              height={100}
              width={100}
              className="text-green-400"
            />
            <HandThumbsDown height={150} width={150} className="text-red-300" />
          </div>
        </div>
      ) : null}
      {isError && (
        <>
          <Typography className="text-3xl text-red-500">
            {errorMessage}
          </Typography>
          <ExclamationTriangle height={100} width={100} color="red" />
        </>
      )}
    </div>
  );
};

export default LoadingAndErrorCard;
