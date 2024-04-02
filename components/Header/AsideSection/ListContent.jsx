import Image from "next/image";
import React from "react";

const ListContent = ({ items }) => {
  return (
    <>
      <ul className="space-y-1">
        {items.map((value) => (
          <li key={value.id} className="text-md font-bold p-2">
            {value.image === undefined ? (
              <>{value.text}</>
            ) : (
              <>
                {/* <Image src={src} alt="image" width={50} height={50} /> */}
                <div className="flex  ">
                  <img
                    src={value.image}
                    alt="pic"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="pl-4">{value.text}</p>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListContent;
