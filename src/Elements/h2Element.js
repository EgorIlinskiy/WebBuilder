import React from "react";
import {connect} from 'react-redux'
import './Elements.css'


class HeaderH2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'H2 заголовок',
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

        return <div className = 'h1Container'
        onMouseEnter = { this.inHover }
        onMouseLeave = { this.outHover } >
            <div style = {
                { display: this.state.isHover ? 'block' : 'none' }
            }
        className = "EditView" >

            </div> <input type = 'text'
        value = { this.state.value }
        onChange = { this.inputHandler }
        onFocus = { this.inFocus }
        onBlur = { this.outFocus }
        className = 'h2View'
        style = {
            {}
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
export default connect(mapStateToProps,mapDispatchToProps)(HeaderH2);

