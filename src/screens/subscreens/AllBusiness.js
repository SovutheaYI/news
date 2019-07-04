import React from 'react';
import {
    FlatList
} from 'react-native';

import BusNews from './../BusNews';
import { getBusNews } from './../../FetchArticle';

export default class AllBusiness extends React.Component {

    constructor(props) {
        super(props);
        this.state = {articles: [], refreshing: true};
        this.fetchNews = this.fetchNews.bind(this);
      }
    
      componentDidMount() {
        this.fetchNews();
      }
    
      fetchNews() {
        getBusNews()
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
                renderItem={({item}) => <BusNews article={item}/>}
                keyExtractor={(item, index) => index}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
          />
        );
    }
}
