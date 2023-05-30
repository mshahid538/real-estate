import { Box } from "@mui/material";
import React from "react";
import Card from "../Card/Card";

function Home({ setFilter }) {
  return (
    <div style={{ display: "flex" }} onClick={() => setFilter(true)}>
      <Box mt={10}>
        <Card />
      </Box>
    </div>
  );
}

export default Home;
