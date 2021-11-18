import React from "react";
import Container from '@mui/material/Container';
import './Control.css'
import HeaderH1 from "../Elements/h1Element";
import HeaderH2 from "../Elements/h2Element";
import TextArea from "../Elements/pElement";
import DivArea from "../Elements/divArea";
import {connect} from 'react-redux'


class ControlComponent extends React.Component{
    

    render(){
        return <Container className='ControlList'>
            <h3>
                Добавьте элеменент
            </h3>
            <div>
                H1 заголовок
                <button onClick={()=>this.props.addElement(<HeaderH1/>)}>
                    Добавить
                </button>
            </div>
            <div>
                H2 заголовок
                <button onClick={()=>this.props.addElement(<HeaderH2/>)}>
                    Добавить
                </button>
            </div> 
            <div>
                Абзац текста
                <button onClick={()=>this.props.addElement(<TextArea/>)}>
                    Добавить
                </button>
            </div>
            <div>
                Разделитель
                <button onClick={()=>this.props.addElement(<DivArea/>)}>
                    Добавить
                </button>
            </div>
            <span>
                Для изменения элемента просто нажмите на него
            </span>
        </Container>
    }    
}



let mapStateToProps = function(state){
    return{
        componentsList: state.store.componentsList
    }
}


let mapDispatchToProps = (dispatch)=>{
    return{
        addElement: (element)=>dispatch({
            type:'ADD_COMPONENT',
            element
        })
    } 
}
export default connect(mapStateToProps,mapDispatchToProps)(ControlComponent);
