import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type SortingProps = {
  setStoreItems: any;
  storeItems: any;
};
export default function Sorting({ setStoreItems, storeItems }: SortingProps) {
  const [choice, setChoice] = React.useState(0);

  React.useEffect(() => {
    console.log("sorting ");
  }, [choice]);

  const handleChange = (event: SelectChangeEvent) => {
    const currChoice = Number(event.target.value);

    if (currChoice === 0) {
      storeItems.sort((a: any, b: any) => {
        return a.id - b.id;
      });
    } else if (currChoice === 1) {
      storeItems.sort((a: any, b: any) => {
        return a.price - b.price;
      });
    } else if (currChoice === 2) {
      storeItems.sort((a: any, b: any) => {
        return b.price - a.price;
      });
    }

    setChoice(currChoice);
    setStoreItems(new Array(...storeItems));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(choice)}
          label="Choice"
          onChange={handleChange}
        >
          <MenuItem value={0}>Remove All Filters</MenuItem>
          <MenuItem value={1}>Price(Lowest to Highest)</MenuItem>
          <MenuItem value={2}>Price(Highest to Lowest)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
