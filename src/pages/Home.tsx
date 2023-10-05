import Item from "../components/Item";
import storeItems from "../data/items.json";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 6, sm: 8, md: 12 }}
      justifyContent={"center"}
      // margin={"auto"}
    >
      {storeItems.map((item) => (
        <Grid item xs={4} key={item.id}>
          <Item data={item} key={item.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
