import React from "react";
import {
  Box,
  Paper,
  Card,
  CardContent,
  IconButton,
  Typography,
  CardActions,
  makeStyles,
  CardMedia,
  useTheme,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import DepositeImg from "../assets/deposit.jpg";

function Saving(params) {
  const theme = useTheme();
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
            width: 870,
            height: 200,
            marginBottom: 20,
          }}
        />
        <Box display="flex">
          <Box display="flex" flex={1}>
            {[
              {
                type: "Target Savings",
                text: "Click to reach a specific savings target",
              },
              { type: "Flex Savings", text: "Click to save to flex savings" },
              {
                type: "Pay Back Loan",
                text: "Click to pay back loan",
              },
            ].map(({ type, text }, index) => (
              <CardItem key={index} type={type} text={text} />
            ))}
          </Box>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              width: 400,
              height: 400,
              padding: 10
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              p={10}
              bgcolor={theme.palette.primary.main}
            >
              <Typography variant="h5" style={{ color: "white" }}>
                Transaction History
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              flex={1}
            >
              <Typography>No History</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Saving;

const CardItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardMedia className={classes.cardMedia} image={DepositeImg} title="Loan" />
      <CardContent>
        <Typography variant="h6">{props.type}</Typography>
        <Typography>{props.text}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton color="primary">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  cardContainer: {
    width: 280,
    height: 400,
    marginRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardActions: {
    justifyContent: "flex-end",
  },
  cardMedia: {
    height: 200,
  },
}));
