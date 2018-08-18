import React from 'react';
import {FilteredList} from "./filteredList";

//an ajax query using fetch
export class ReactService extends React.Component {
  constructor(props) {
    super(props);
    //create a state variable that holds the data query
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(`./data/data.json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else { 
        return ( <FilteredList items={items}/> );
    }
  }

}