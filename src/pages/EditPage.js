import React from "react";
import Grid from '@mui/material/Grid';
import PreviewList from "../Preview/PreviewList";
import ControlComponent from "../Control/ControlComponent";

class EditPage extends React.Component {



    render() {
      return <Grid container spacing={2}>
      <Grid item xs={8}>
        <PreviewList/>
      </Grid>
      <Grid item xs={4}>
        <ControlComponent/>
      </Grid>
      </Grid>
    }
}

export default EditPage;