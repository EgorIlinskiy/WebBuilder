import React from "react";
import Grid from '@mui/material/Grid';

class DivArea extends React.Component {
    constructor(props){
        super(props);
        this.state={
            left: 'My name is'
        }
    }


    Clic=()=>{
        this.setState({
            left:"kekushki"
        })
    }

    render() {
      return <Grid container spacing={2}>
      <Grid item xs={6}>
      <div className='DivPreviewContainer' onClick={this.Clic}>
       {this.state.left}
          </div>
      </Grid>
      <Grid item xs={6}>
          <div className='DivPreviewContainer'>
            {(!this.props.right) ? 'Нажмите и добавьте элемент' : ''}
          {this.props.right}
          </div>
      </Grid>
      </Grid>
    }
}

export default DivArea;