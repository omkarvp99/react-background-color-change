import React, { useEffect } from "react";
import "./pannel.css";

import Togglebtn from "./Togglebtn";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function Pannel({ back }) {
  useEffect(() => {
    console.log({ back });
  }, [back]);

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const colorText = {
    color: "white",
    backgroundColor: back,
  };
  const colorText2 = {
    backgroundColor: back,
  };
  return (
    <div
      className="App__rightSide"
      style={back === "#000000" ? colorText : colorText2}
    >
      <div className="rightside__childs">
        <div>
          <div className="col-1">
            <h4>Button Group 1</h4>
            <Button
              variant="contained"
              color="primary"
              backgroundColor="#5E4FDB"
            >
              Button
            </Button>
            <Button variant="outlined" color="primary">
              Button
            </Button>
            <Button variant="text" backgroundColor="#5E4FDB">
              Button
            </Button>
          </div>
          <div className="middle__childs">
            <Checkbox
              defaultChecked
              indeterminate
              color="secondary"
            />
            <Checkbox defaultChecked color="primary" />
            <AddBoxIcon color="primary" style={{ padding: "8px" }} />
          </div>
        </div>
        <div>
          <h4>Button Grooup 2</h4>
          <Togglebtn textShow="true" />
          <Togglebtn textShow="true" />
          <Togglebtn />
          <Togglebtn textShow="true" backColor={"F3F2FC"} />
        </div>
      </div>
    </div>
  );
}
