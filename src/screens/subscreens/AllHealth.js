import React from 'react';
import {
    FlatList
} from 'react-native';

import HealthNews from './../HealthNews';
import { getHealthNews } from './../../FetchArticle';

export default class AllHealth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {articles: [], refreshing: true};
        this.fetchNews = this.fetchNews.bind(this);
      }
    
      componentDidMount() {
        this.fetchNews();
      }
    
      fetchNews() {
        getHealthNews()
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
                renderItem={({item}) => <HealthNews article={item}/>}
                keyExtractor={(item, index) => index}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
          />
        );
    }
}
