import React, { Component } from 'react'
import PropTypes from 'prop-types';

/*
export class TodoItem extends Component {
  render() {
    return (
      // <div style={{ backgroundColor: '#f4f4f4' }}>
      <div style={itemStyle}>
        <p>{this.props.todo.title}</p>
      </div >
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}
*/

export class TodoItem extends Component {
  getStyle = () => {
    /*
    if (this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
    */

    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div >
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem