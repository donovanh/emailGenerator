import React, { Component } from 'react';
import Article from "./Article"

export default class Articles extends Component {
  constructor(props) {
    super();
    var defaultArticle = {
      title: 'Example article title',
      area: 'Project name',
      description: 'Description text'
    };
    this.state = {
      defaultArticle: defaultArticle,
      articles: [ defaultArticle ]
    }
  }

  create() {

  }

  update(article, i) {
    var arr = this.state.articles;
    arr[i] = article;
    this.setState({articles: arr});
  }

  remove(i) {
    var arr = this.state.articles;
    arr.splice(i, 1);
    this.setState({articles: arr});
  }

  eachArticle(article, i) {
    console.log(article, i);
    return (
      <Article
        index={i}
        onChange={this.update.bind(this)}
        onRemove={this.remove.bind(this)}
        title={article.title}
        area={article.area}
        description={article.description}
      />
    );
  }

  render() {
    return (
      <div>
        <h2>This week</h2>
        {this.state.articles.map(this.eachArticle.bind(this))}
      </div>
    );
  };

}
