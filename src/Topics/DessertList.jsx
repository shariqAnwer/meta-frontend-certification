function DessertsList(props) {
  const sortCalories = (a, b) => a.calories - b.calories;
  const itemList = props?.data
    .filter((items) => {
      return items.calories < 500;
    })
    .sort(sortCalories)
    .map((item) => {
      return (
        <li>
          {item.name} - {item.calories}
        </li>
      );
    });

  console.log(itemList);
  return <ul>{itemList}</ul>;
}

export default DessertsList;
