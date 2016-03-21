import React, { Component } from 'react';
import Article from "./Article"

export default class Articles extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [
        {
          title: 'Example article title',
          area: 'Project name',
          description: 'Description text'
        },
        {
          title: 'Example article title',
          area: 'Project name',
          description: 'Description text'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>This week</h2>
        {this.state.articles.map(function(article, i) {
          return (
              <Article
                title={article.title}
                area={article.area}
                description={article.description}
              />
            );
        })}
      </div>
    );
  };

}
