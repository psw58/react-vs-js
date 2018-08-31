import React from 'react'

export class FilteredList extends React.Component{
  constructor(props) {
    super(props);
    //create a state variable that holds the data query
    this.state = {
      initialItems: this.props.items,
      items: []
    };
  }  

  filterList(event){
    const searchKey = event.target.value;
    var results = this.state.initialItems.filter(function(element) {
        var fullName = element.firstName+ " " + element.lastName;
        return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
    });   
    if (searchKey){ 
      this.setState({items: results});
    }else{
      this.setState({items: []});
    }
  }

  render(){
    return (
      <div>    
        <div className="filter-list">
          <input className="search" type="text" placeholder="Search Employees" 
            onChange={(reactEvent) => this.filterList(reactEvent)}
          />
          <List items={this.state.items}/>
        </div>
      </div>
    );
  }

};

class List extends React.Component{
  render(){
    return (
      <div>
      {
        this.props.items.map(function(el, i) {
          return <div className="row" key={i}>
          <div className="col-md-6">
              <div className="contact-box center-version">
                  <a href="#profile.html">
                      <img alt="image" className="img-circle" src={el.picture}></img>
                      <h3 className="m-b-xs"><strong> {el.firstName} {el.lastName}</strong></h3>            
                  </a>
                 <div className="contact-box-footer">
                      <div className="m-t-xs btn-group">
                          <a className="btn btn-xs btn-white"><i className="fa fa-phone"></i> Call </a>
                          {el.phone}
                      </div>
                  </div>
          
              </div>
          </div>
      </div>
        })
       }
      </div>
    )  
  }
};