import classes from './User.module.css';
import { Component } from 'react';

// Class based component
// Component has a props property
class User extends Component {

  // Run for every component instance
  componentWillUnmount() {
    console.log('User will unmount');
  }
  render () {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Functional component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
