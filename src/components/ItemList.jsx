import { useEffect, useState } from "react";

const Items = [
  { name: "Tomato", isPacked: true },
  { name: "Banana", isPacked: true },
  { name: "Onion", isPacked: false },
  { name: "Spices", isPacked: true },
  { name: "Milk", isPacked: false },
  { name: "Butter", isPacked: true },
  { name: "Cheese", isPacked: true },
  { name: "Bread", isPacked: false },
];

const Item = ({ name, isPacked }) => {
  return (
    <li
      style={{
        display: "flex",
        color: isPacked ? "green" : "red",
        fontSize: "20px",
      }}
    >
      <span style={{ minWidth: "100px", width: "100%" }}>{name}</span>
      <span>{isPacked ? "✔" : "⚠"}</span>
    </li>
  );
};

const ItemList = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("This component is loaded!");

    return () => {
      console.log("This component is unloaded!");
    };
  }, []);

  const filterList = Items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <div
        style={{
          margin: "28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <label htmlFor="text" style={{ fontSize: "28px" }}>
          Search Ingredients
        </label>
        <input
          style={{ fontSize: "20px", borderRadius: "10px", padding: "8px" }}
          type="text"
          name="text"
          placeholder="Start typing here!"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <div style={{ maxWidth: "200px", marginTop: "12px" }}>
          <h2 style={{ margin: 0 }}>Cooking station list items</h2>
          <span>You must following these ingredient for incredible flavor</span>
        </div>
        <ul>
          {/* <Item name={"Tomato"} isPacked={true} />
        <Item name={"Banana"} isPacked={true} />
        <Item name={"Onion"} isPacked={false} />
        <Item name={"Spices"} isPacked={true} /> */}

          {filterList.map((item, index) => (
            <Item key={index} name={item.name} isPacked={item.isPacked} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemList;
