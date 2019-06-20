import React, { Component } from 'react';
import { fetchApi, nextPage, openLink }  from './common';

class Anime extends Component {
  constructor() {
    super();
    this.state = {
      api: 'https://hn.algolia.com/api/v1/search_by_date?query=comics&tags=story',
      results: [],
      topTen: []
    }
  }
  async componentWillMount() {
    let result = await fetchApi(this.state.api);
    this.setState({results: result});
  }

  render() {
    let results = this.state.results;
    let hits = results.hits;
    if (hits) {
      return (
        <div className="align-left">
          <div className="App">
            <h2>{hits.map((item) => (<span className="list" key={item.url}>
              <span onClick={()=> openLink(item.url)}>{item.title}</span>
              <br/>-By {item.author}</span>))}
            </h2>
            <button onClick={()=> nextPage(this) }>Next>></button>
          </div>
          <div className="i-frame"></div>
        </div>
      );
    } else {
      return (<div className="App">Loading Please Wait</div>);
    }
  }
}
export default Anime;
