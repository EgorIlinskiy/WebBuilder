import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import './Navigation.css'

class PagesLinks extends React.Component {
     
 // componentDidMount(){
 //   const URL = 'https://webbuilder-806c3-default-rtdb.firebaseio.com/list.json'
 //   fetch(URL)
 //   .then(response => response.json())
 //   .then((data) => this.props.setLoadData(data)) 
//  }
  postData = ()=>{
    console.log(this.props.componentsList)
    const URLPOST = 'https://webbuilder-806c3-default-rtdb.firebaseio.com/list/-MoYmTHpWetSpLzviYX-'
    fetch(URLPOST, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({componentsList:this.props.componentsList})
      }).then(response => {
          alert(response.json())
      })
      .catch(error =>{alert("Произошла ошибка " + error)})
  }

  render() {

    return (
      <div className="NavBar">
        <NavLink to="/" exact="true" className="PageLink" onClick={()=>{ this.props.setDisable(true)}} activeClassName="active">Главная</NavLink>
        <NavLink to="/edit" className="PageLink"  onClick={()=>{ this.props.setDisable(false)}} activeClassName="active">Редактировать</NavLink>
        <NavLink to="/preview" className="PageLink"  onClick={()=>{ this.props.setDisable(true)}} activeClassName="active">Просмотр</NavLink>
        <button onClick={(this.postData)}>Сохранить данные на сервер</button>
      </div>
    );
    
  }

}
    
let mapStateToProps = function(state){
    return{
    }
}

let mapDispatchToProps = function(dispatch){
    return{
        setDisable: (bool)=>dispatch({
            type:'SWITCH_DISABLED',
            bool
        
    })
}
}
export default connect(mapStateToProps,mapDispatchToProps)(PagesLinks);
