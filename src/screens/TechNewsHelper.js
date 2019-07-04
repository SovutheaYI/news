import React from 'react';
import { FlatList } from 'react-native';


import { getTechNews } from './../FetchArticle';
import TechNews from './TechNews';


export default class TechNewsHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {articles: [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getTechNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({item}) => <TechNews article={item}/>}
        keyExtractor={(item, index) => index}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }

}

