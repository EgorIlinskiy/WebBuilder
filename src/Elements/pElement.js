import React from "react";
import {connect} from 'react-redux'
import './Elements.css'


class TextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '\tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            isHover: false,
            inFocus: false,
            isDisabled: false,
            id: this.props.elementsCnt
        }

    }
    inHover = () => {
        this.setState({ isHover: true })
    }
    outHover = () => {
        if (!this.state.inFocus) {
            this.setState({ isHover: false })
        }
    }
    inputHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    inFocus = () => {
        this.setState({
            inFocus: true
        })
    }
    outFocus = () => {
        this.setState({
            inFocus: false
        })
    }
    fAdd = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                fsize: prevState.fsize + 1
            }
        })
    }
    fMinus = () => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    fsize: prevState.fsize - 1
                }
            })
        }
    render() {

        return <div onMouseEnter = { this.inHover }
        onMouseLeave = { this.outHover } 
        className='TextAreaContainer'
        >
            <div style = {
                { display: this.state.isHover ? 'block' : 'none' } }
        className = "EditView" >

            </div> <textarea type = 'text'
        value = { this.state.value }
        onChange = { this.inputHandler }
        onFocus = { this.inFocus }
        onBlur = { this.outFocus }
        className = 'TextArea'
        style = {
            {  }
        }
        disabled = { this.props.isDisabled }
        />

        </div>

    }


}


let mapStateToProps = function(state){
    return{
        isDisabled: state.store.isDisabled
    }
}

let mapDispatchToProps = function(dispatch){
    return{
}
}
export default connect(mapStateToProps,mapDispatchToProps)(TextArea);

