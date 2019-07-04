import React from 'react';
import {
    FlatList
} from 'react-native';

import SportNews from './../SportNews';
import { getFood } from './../../FetchArticle';

export default class Food extends React.Component {

    constructor(props) {
        super(props);
        this.state = {articles: [], refreshing: true};
        this.fetchNews = this.fetchNews.bind(this);
      }
    
      componentDidMount() {
        this.fetchNews();
      }
    
      fetchNews() {
        getFood()
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
                renderItem={({item}) => <SportNews article={item}/>}
                keyExtractor={(item, index) => index}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
          />
        );
    }
}
