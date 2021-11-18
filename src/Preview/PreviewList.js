import React from "react";
import Container from '@mui/material/Container';
import { connect } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';

class PreviewList extends React.Component {

    render() {
        let list = [];
        this.props.componentsList.forEach((element,index) =>{
           list.push( <div  key={index} className = "ElementsContainer" >
                  <div className="EditView"><IconButton color="primary" size='small' onClick={()=>this.props.elementUp(index)} >
         <ArrowUpwardIcon />
     </IconButton>
    <IconButton color="primary" size='small' onClick={() => this.props.elementDown(index)}>
         <ArrowDownwardIcon />
     </IconButton>
     <IconButton color="primary" size='small' onClick={() => this.props.elementDelete(index)}>
         <ClearIcon />
     </IconButton>
       </div>  
     {element}
     </div>) 
        })
      //  if(this.props.isLoaded){
            return <Container className='PrewiewList'>
                {list}
            </Container>
      //  }
     //  return <Container className='PrewiewList'>
     //   Данные загружаются, подождите...
  // </Container>
    }
}


let mapStateToProps = function(state){
    return{
        componentsList: state.store.componentsList,
        isLoaded: state.store.isLoaded

    }
}

let mapDispatchToProps = function(dispatch){
    return{
        elementDown: (id)=>dispatch({
            type:'SWITCH_POS_DOWN',
            id
        
    })  ,
        elementUp: (id)=>dispatch({
            type:'SWITCH_POS_UP',
            id
        }) ,
        elementDelete: (id)=>dispatch({
            type:'DELETE_ELEMENT',
            id
        })
}
}
export default connect(mapStateToProps,mapDispatchToProps)(PreviewList);