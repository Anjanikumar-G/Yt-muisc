import React from "react";

let SongCard = (props) => {
  return (
    <>
      <div className="p-2 m-2">
        <img
          className="w-44  rounded-lg "
          src={props?.list?.artist[0]?.image}
          alt="Image"
        />

        <div className="text-center py-2">
          <h1 className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">
            {props?.list?.title}
          </h1>
          <h1 className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">
            {props?.list?.artist[0]?.name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SongCard;
