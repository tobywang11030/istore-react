import React, { Component } from 'react';
import axios from 'axios';



export default class Navigation extends Component {
  constructor(){
    super();
    this.state = {
      category: []
    }
  }

  componentWillMount() {
    this.getCategory();
  }

  getCategory() {
    const callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/category';
    axios.get(callURL)
      .then(res => {
        this.setState({
          category: res.data.category
        });
      });
  }

  render() {
    return ( 
      <div className="is-header-anything">
       <div className="yCmsContentSlot">
          <div className="is-header-navgation">
            {
              this.state.category.map((item, index) => {
                return <a key = {index} href={item.path}>{item.name}</a>
              })
            }
          </div>
        </div>
    </div>
    )
  }

}

