import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' } //actionType 是必选字段 
// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state  // 每次返回新的state，不可直接对state进行修改。
  }
}

// Store
const store = createStore(counter) // 接受三个参数 reducer, [preloadedState], enhancer

// Map Redux state to component props
function mapStateToProps(state) { //  把state映射到props
  return {
    value: state.count   
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {  // 参数(dispatch,ownProps). dispatch 是触发 Action 的唯一方法。把action的方法映射到props
  return { 
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)   

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
