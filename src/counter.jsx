import React, { Component } from 'react'

const ErrorComponent = () => { <div>{props.ignore}</div> }

export default class Counter extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props)

        this.state = {
            counter: 0,
            seed: 0,
            initializing:true
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state from props')
        console.log(state.seed)
        console.log(props.seed)
        console.log('---------------')
        
        if (props.seed && state.seed !== props.seed)     
            {
            return {
                counter: props.seed,
                seed: props.seed
            }
        }

        return null
    }

    shouldComponentUpdate(nextProps, prevProps) {
        console.log(this.props.ignoreProp)
        console.log(nextProps.ignoreProp)
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log( 'should Component update -- Do not render')
            return false
        } else {
            console.log( 'should Component update -- render')
            return true
        }
    }

    render() {
        console.log('render')
        if (this.state.initializing) {
            return <div>Initializing ...</div>
        } else {
            if (this.props.errorComponent && this.state.error) {
                return (<div>{this.state.error.message}</div>)
            } else {
                return (
        
                    <div>
                        <div style={{ display: 'flex', gap: '32px' }}>
                            <button onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>decrement</button>
                        </div>
                        <h1>Counter {this.state.counter}</h1>
                        {this.props.errorComponent ? <ErrorComponent></ErrorComponent> : null}
                    </div>
                )
            }
        }
    }
    componentDidMount() {
        console.log('component did mount')
        setTimeout(() => {
           this.setState({initializing:false}) 
        },500)
        console.log('-----------------------')
    }
    
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentg did update')
    }

    componentDidCatch(error, info) {
        console.log(error, info)
        this.setState({error,info})
        
    }

    componentWillUnmount() {
        console.log('component will unMount')
    }

     
}
