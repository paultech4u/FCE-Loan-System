import { LinearProgress, withStyles, Box } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);

export function ProgressStatus(props) {
  return (
    <Box width="100%" mr={1}>
      <BorderLinearProgress variant="determinate" {...props} />
    </Box>
  );
}
