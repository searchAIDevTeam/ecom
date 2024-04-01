import React, { useEffect, useState } from "react";
import ListContent from "./ListContent";

import { wallpaperCategoryData } from "@/Model/Dropdown/CategoryData/WallpaperCategoryData";
import { flooringCategoryData } from "@/Model/Dropdown/CategoryData/FlooringCategoryData";
import { blindsCategoryData } from "@/Model/Dropdown/CategoryData/BlindsCategoryData";
import { curtainsCategoryData } from "@/Model/Dropdown/CategoryData/CurtainsCategoryData";
import { inspirationCategoryData } from "@/Model/Dropdown/CategoryData/InspirationCategoryData";

const Displaybox = ({ defaultLinkIndex }) => {
  let asideCategory;

  switch (defaultLinkIndex) {
    case 0:
      asideCategory = flooringCategoryData;
      break;
    case 1:
      asideCategory = wallpaperCategoryData;
      break;
    case 2:
      asideCategory = inspirationCategoryData;
      break;
    case 3:
      asideCategory = curtainsCategoryData;
      break;
    case 4:
      asideCategory = blindsCategoryData;
      break;
    default:
      asideCategory = wallpaperCategoryData;
  }

  return (
    <main className="w-3/4 p-4 noto-sans-200">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {asideCategory.map((item, index) => (
          <div>
            <h2 className="text-gray-400 text-xl font-semibold mb-2">
              {item.categoryHeading}
            </h2>
            {<ListContent items={item.categoryData} />}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Displaybox;
