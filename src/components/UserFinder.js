import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';
import Users from './Users';

class UserFinder extends Component  {
  // We can connect a class based component only to 1 context (func comp can have multiple contexts)
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers : [],
      searchTerm : ''
    }
  }

  // useEffect equivalent for initial rendered
  // Will only run once, when the component is initially rendered for the 1st time
  componentDidMount() {
    // https request
    this.setState({filteredUsers: this.context.users})
  }

  // useEffect equivalent
  // setState triggers this function (1:setState searchTerm,2:setState filteredUsers)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ 
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) 
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;