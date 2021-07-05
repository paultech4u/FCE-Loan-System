import React from "react";
import {
  Box,
  Paper,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActions,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

function Loan(params) {
  return (
    <Box p={40} display="flex" flex={1}>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        justifyContent="space-evenly"
      >
        <Paper
          style={{
            width: 1000,
            height: 200,
            marginBottom: 20,
          }}
        />
        <Box display="flex" flex={1}>
          {[
            { type: "Soft Loan", text: "Click to take a soft loan" },
            { type: "Soft Loan", text: "Click to take a soft loan" },
            { type: "Soft Loan", text: "Click to take a soft loan" },
          ].map(({ type, text }, index) => (
            <CardItem key={index} type={type} text={text} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Loan;

const CardItem = (props) => {
  return (
    <Card style={{width: 330, height: 500, marginRight: 20}}>
      <CardContent>
        <Typography>{props.type}</Typography>
        <Typography>{props.text}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
};
