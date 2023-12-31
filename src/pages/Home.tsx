import { useState } from "react";
import Item from "../components/Item";
import storeItemsInitial from "../data/items.json";
import Grid from "@mui/material/Grid";
import Sorting from "../components/Sorting";

const Home = () => {
  const [storeItems, setStoreItems] = useState(storeItemsInitial);

  return (
    <>
      <Sorting setStoreItems={setStoreItems} storeItems={storeItems} />
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        justifyContent={"center"}
        height={"70%"}
      >
        {storeItems.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Item data={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
