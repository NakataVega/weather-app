import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props){
    super(props)

    this.state = {
      activo: true
    }
  }

  estaActivo = () => {
    //return this.props.activo ? "Activo" : "Inactivo"
    return this.state.activo ? "Activo" : "Inactivo"
  }

  onClickHandler = () => {
    //this.state.activo = !this.state.activo
    this.setState({
      activo: !this.state.activo
    })
  }

  componentDidMount(){
    console.log("El componente se ha montado")
  }
  
  componentDidUpdate(prevProbs, prevState){
    console.log("El componente se ha actualizado", prevProbs, prevState)
  }

  componentWillUnmount(){
    console.log("El componente se va a desmontar")
  }

  render(){
    return (
      <div>
        <button 
          onClick={this.onClickHandler}
        >Cambiar estado</button>
        <h1>
          {
            this.estaActivo()
          }
        </h1>
      </div>
    )
  }
}

export default ErrorBoundary