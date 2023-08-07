import React, { Component } from 'react'
import Counter from './counter'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent:false

    }

    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })
    
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random })
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) })
    this.toggleErrorComponent = () => this.setState({showErrorComponent : !this.state.showErrorComponent})
  }
  render() {
    return (
      <div style={{display:'flex', flexDirection:'column', width:'100%', gap:'32px' }}>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>unMount</button>
        <button onClick={this.ignoreProp} disabled={!this.state.mount}>ignoreProp</button>
        <button onClick={this.seedGenerator} disabled={!this.state.mount}>Generate seed</button>
        <button onClick={this.toggleErrorComponent} >toggle Error</button>
        <div>{this.state.mount ? <Counter errorComponent={this.state.showErrorComponent}  ignoreProp={this.state.ignoreProp} seed={this.state.seed}></Counter> : null}</div>
      </div>
    )
  }
}
