import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryContent = (props) => {
  const {
    key,
    categoryGap,
    containerPadding,
    headingStyle,
    headingSize,
    headingColor,
    gapHeadingItems,
    itemsGap,
    textStyle,
    textSize,
    textColor,
    containerBgColor,
  } = props;

  const heading = props.categoryHeading;

  const categoryData = props.categoryData;
  console.log(categoryData)
  const router = useRouter();
  const handleClick = (cat)=>{
    // console.log(ca)
    console.log("cat is ",cat)
    router.push("/products/"+cat.text+"/"+heading+"/"+props.parentCategory)
  }
  return (
    <div
       className={`flex flex-col ${categoryGap} ${containerPadding} ${gapHeadingItems} ${containerBgColor}`}>
      <div className={`${headingStyle} ${headingSize} ${headingColor}`}>
        <h2>{heading}</h2>
      </div>
      <div className={`flex flex-col ${itemsGap}`}>
        {categoryData.map((dataItem) => {
          return (
            <div className={`flex gap-1`} onClick={
              ()=>handleClick(dataItem)
            }>
                {dataItem.image?<Image src={dataItem.image} width={20} height={20} alt="image" className="rounded-full" />:<p>{""}</p>}
              <p className={`${textStyle} ${textSize} ${textColor}`}>{dataItem.text}</p>
            </div>
          );
        })}
        
        <p className="gray-text cursor-pointer">8 More</p>
      </div>
    </div>
  );
};

CategoryContent.propTypes = {
    categoryGap: PropTypes.string,
    containerPadding: PropTypes.string,
    headingStyle: PropTypes.string,
    headingSize: PropTypes.string,
    headingColor: PropTypes.string,
    gapHeadingItems: PropTypes.string,
    itemsGap: PropTypes.string,
    textStyle: PropTypes.string,
    textSize: PropTypes.string,
    textColor: PropTypes.string,
    containerBgColor: PropTypes.string,
};
  

CategoryContent.defaultProps = {
    categoryGap: "space-x-1",
    containerPadding: "p-1",
    headingStyle: "not-italic",
    headingSize: "font-md",
    headingColor: "text-black",
    gapHeadingItems: "space-y-5",
    itemsGap: "space-y-3",
    textStyle: "not-italic",
    textSize: "text-sm",
    textColor: "text-black",
    containerBgColor: "bg-white"
};

export default CategoryContent;