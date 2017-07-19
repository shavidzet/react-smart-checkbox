import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group'
import _ from 'lodash'

export default class extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  }
  constructor (props) {
    super(props)
    this.handleFatherChange = this.handleFatherChange.bind(this)
    this.handleChildChange = this.handleChildChange.bind(this)
    this.state = {
      children: [],
      father: false
    }
  }
  componentDidMount () {
    this.handleChildChange(this.props.initialValues)
  }
  handleFatherChange (e) {
    const children = (this.state.children.length === this.props.options.length)
                      ? []
                      : this.props.options
    this.setState({
      children: e.target.checked ? children : [],
      father: !this.state.father
    })
  }
  handleChildChange (children) {
    this.setState({
      children: children,
      father: children.length
    })
    this.refs.CheckboxParent.indeterminate = children.length > 0 && children.length !== this.props.options.length
  }
  componentWillUpdate (nextProps, nextState) {
    const stateDiff = !_.isEqualWith(this.state, nextState)
    if (stateDiff) {
      this.props.onChange(nextState.children)
    }
  }
  render () {
    return (
      <div>
        <label className='Roles-fatherLabel'>
          <input
            type='checkbox'
            checked={this.state.father}
            onChange={this.handleFatherChange}
            ref='CheckboxParent'
          />
          <span>{this.props.name}</span>
        </label>
        <ul>
          <CheckboxGroup
            name={this.props.name}
            value={this.state.children}
            onChange={this.handleChildChange}
          >
            {this.props.options.map((item, index) =>
              <li key={index}>
                <label>
                  <Checkbox value={item} />{item}
                </label>
              </li>
            )}
          </CheckboxGroup>
        </ul>
      </div>
    )
  }
}
