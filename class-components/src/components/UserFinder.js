import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";

import Users from "./Users";

const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];

class UserFinderNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

//   static getDerivedStateFromProps(props, state) {

//   }

  componentDidMount() {
    // send http request...
    this.setState({filteredUsers: DUMMY_USERS});
  }

  componentWillUnmount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({searchTerm: event.target.value});
  };

  render() {
    return (
      <Fragment>
        <input
          className={classes.finder}
          type="search"
          onChange={this.searchChangeHandler}
        />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

const UserFinder = (props) => {
  const [filteredUsers, setFilteredUsers] = useState(props.usersList);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      props.usersList.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <input
        className={classes.finder}
        type="search"
        onChange={searchChangeHandler}
      />
      <Users users={filteredUsers} />
    </Fragment>
  );
};

// export default UserFinder;
export default UserFinderNew;