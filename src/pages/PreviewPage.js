import React from "react";
import {connect} from 'react-redux'
import Container from '@mui/material/Container';


class PreviewPage extends React.Component{

    render(){
        let list =[]
        this.props.componentsList.forEach((element,index)=>{
            list.push( <div  key={index} className = "ElementsContainer" >      
                                 {element}
                     </div>) 
        })
        return <Container className='PrewiewList'>
            {list}
        </Container>
        
        
    }
}



let mapStateToProps = function(state){
    return{
        componentsList: state.store.componentsList,
        isDisabled: state.store.isDisabled,
        isLoaded: state.store.isLoaded
    }
}

let mapDispatchToProps = function(dispatch){
    return{
}
}
export default connect(mapStateToProps,mapDispatchToProps)(PreviewPage);