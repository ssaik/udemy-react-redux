    import React, { Component } from 'react';

    import CounterControl from '../../components/CounterControl/CounterControl';
    import CounterOutput from '../../components/CounterOutput/CounterOutput';
    
    import { connect } from 'react-redux'
    
    class Counter extends Component {
        // state = {
        //     counter: 0
        // }
    
        // counterChangedHandler = ( action, value ) => {
        //     switch ( action ) {
        //         case 'inc':
        //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
        //             break;
        //         case 'dec':
        //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
        //             break;
        //         case 'add':
        //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
        //             break;
        //         case 'sub':
        //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
        //             break;
        //     }
        // }
    
        render () {
            return (
                <div>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl label="Increment" clicked={this.props.onIncrement} />
                    <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                    <CounterControl label="Add 5" clicked={this.props.onADD}  />
                    <CounterControl label="Subtract 5" clicked={this.props.onSUBTRACT}  />
                    {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                    <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}

                    <hr />
                    <button onClick={this.props.onResult} >"click me"</button>
                    <ul>
                        {this.props.storedScore.map(res => (
                            <li key={res.id}>
                                {res.val}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
    
    const mapStateToProps = state => {
        return {
            
            storedScore : state.score,
            ctr : state.counter
            // This state.counter is coming from Reducer.js
        }
    }
    
    //Dispatch actions by "mapDispatchToProps", It sends actions to Reducer.
    //So you will not write actions in containers
    const mapDispatchToProps = dispatch => {
        return {
            onIncrement : () => dispatch({type: 'INCREMENT'}),
            onDecrement : () => dispatch({type: 'DECREMENT'}),
            onADD : () => dispatch({type: 'ADD', val: 5}),
            onSUBTRACT : () => dispatch({type: 'SUBTRACT', val : 5}),
            onResult : () => dispatch({type: 'RESULT'})
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Counter);