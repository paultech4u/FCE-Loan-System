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
import LoanImage from "../../assets/loan.jpg";
import { AddCreditCard } from "../../components/AddCreditCard"

function Wallet(params) {
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
              { type: "Soft Loan", text: "Click to take a soft loan" },
              { type: "Long Loan", text: "Click to take a Long loan" },
              { type: "Purchase", text: "Click here to purchase" },
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

export default Wallet;

const CardItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardMedia className={classes.cardMedia} image={LoanImage} title="Loan" />
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
