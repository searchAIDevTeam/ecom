import Card from "./card";

export const SelectedItemsRow = ({ selectedItems }) => {
  return (
    <div className="grid grid-cols-1 mt-2 h-full fade-in">
      {selectedItems.map((selectedItem) => (
        <Card
          key={selectedItem._id}
          title={selectedItem.productTitle}
          price={selectedItem.perUnitPrice}
          desc={selectedItem.subcategory}
          imgSrc={selectedItem.images}
          rating={selectedItem.ratings}
          id={selectedItem._id}
          setPopupVisible={setPopupVisible}
          cssClass={"card1flex"}
        />
      ))}
    </div>
  );
};
