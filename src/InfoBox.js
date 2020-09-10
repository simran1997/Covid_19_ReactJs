import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import "./InfoBox.css";

function InfoBox({ title, active, isRed, cases, total, ...props }) {
  return (
    // <div>
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox__cases ${
            title == "Recovered" && "infoBox__casesRecovered"
          }`}
        >
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
    // </div>
  );
}

export default InfoBox;
