import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <div className="siteSearch is-header-search">
      <form name="search_form_SearchBox" method="get" action="/search/">
        <label className="control-label skip" for="input_SearchBox">Search</label>
        <div className="input-group">
          <input id="input_SearchBox" class="siteSearchInput form-control" type="text" name="text" value="" maxlength="100" placeholder="搜索商品或卖家" />
          <div className="input-group-btn">
            <button className="siteSearchSubmit" type="submit">
              <span className="istore-icon-search"><i class="fas fa-search"></i></span>
            </button>
          </div>
        </div>
      </form>
    </div>
    )
  }

}

