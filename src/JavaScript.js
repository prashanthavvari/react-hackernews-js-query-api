import React, { Component } from 'react';

class JavaScript extends Component {
  constructor() {
    super();
    this.state = {
      api: 'https://hn.algolia.com/api/v1/search?query=javascript&tags=story',
      results: [],
      topTen: []
    }
    this.nextPage= this.nextPage.bind(this);
  }
  async fetchApi(url) {
    let result = await fetch(url);
    let json = await result.json();
    return json;
  }
  async nextPage() {
    let nbPage = this.state.results.nbPages || 0;
    let currentPage = this.state.results.page + 1;
    if (currentPage < nbPage) {
      let result = await this.fetchApi(this.state.api+'&page='+currentPage);
      this.setState({results: result});
    }
  }
  async componentWillMount() {
    let result = await this.fetchApi(this.state.api);
    this.setState({results: result});
  }

  render() {
    let results = this.state.results;
    let hits = results.hits;
    if (hits) {
      return (
        <div className="App">
          <h2>{hits.map((item) => (<span className="list" key={item.url}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a><br/>-By {item.author}</span>))}</h2>
          <button onClick={this.nextPage.bind(this)}>Next>></button>
        </div>
      );
    } else {
      return (<div className="App">Loading Please Wait</div>);
    }
  }
}
export default JavaScript;
