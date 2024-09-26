const Item = ({ name, isPacked }) => {
  return (
    <li
      style={{
        display: "flex",
        color: isPacked ? "green" : "red",
        fontSize: "20px",
      }}
    >
      <span style={{ minWidth: "100px", width: "100%" }}>{name}</span>{" "}
      {isPacked ? "✔" : "⚠"}
    </li>
  );
};
const ItemList = ({ isPacked }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "200px" }}>
        <h2 style={{ margin: 0 }}>Cooking station list items</h2>
        <span>You must following these ingredient for better flavor</span>
      </div>
      <ul>
        <Item name={"Tomato"} isPacked={true} />
        <Item name={"Banana"} isPacked={true} />
        <Item name={"Onion"} isPacked={false} />
        <Item name={"Spices"} isPacked={true} />
      </ul>
    </div>
  );
};

export default ItemList;
