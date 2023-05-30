import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";

function AddSubBtn() {
  const [counter, setCounter] = useState(4);
  return (
    <ButtonGroup
      size="large"
      aria-label="small outlined button group"
      color="inherit"
    >
      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>

      {<Button disabled>{counter} guests</Button>}

      {
        <Button
          disabled={counter <= 0}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </Button>
      }
    </ButtonGroup>
  );
}

export default AddSubBtn;
