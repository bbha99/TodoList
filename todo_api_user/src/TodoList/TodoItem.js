import React from "react";
import { Grid, Paper, Button } from "@mui/material";
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

// const useStyles = styled('div')({
//   root: {
//     height: "3em",
//     padding: "2em",
//     margin: "1em"
//   }
// })

// const useStyles = styled('div')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
//   padding: 8,
//   borderRadius: 4,
// });

const styling = {
  height: "3em",
  padding: "2em",
  margin: "1em"
};

export default function TodoItem(props) {

  function handleDelete() {
    console.log("Yoiu clicked delete")
    props.deleteItem(props.item)
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={9}>
        <Paper elevation={1} sx={styling}>
          {props.item.task}
          <hr />
          <Button variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={handleDelete}>
              Delete
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}