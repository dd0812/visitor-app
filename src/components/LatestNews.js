import * as React from 'react';
import axios from 'axios';
import './App.css';
import { List, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
        
export default class LatestNews extends React.Component{
    state = {
        newsApi : []
    }
       
    componentDidMount() {
        const KEY = 'b13d0afb31724d0183b396f570fb6f03';
        axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'bitcoin',
                sortBy: 'publishedAt',
                apiKey: KEY
           }
        })
        .then((response) => {
        // console.log(response.data.articles[0].urlToImage);
        // console.log(response);
        const newsApi = response.data.articles;
        console.log(newsApi);
            this.setState({
                newsApi
            });
        })
        .catch((error) => {
            console.log(error);
        })
    };

    newsList = (newsApi) =>{
        const renderedList = newsApi.map((item) => {
            return (
                <List.Item className='news-item'>
                    <Image src={item.urlToImage || 'data:,'} alt='Image not found'/>
                    <List.Content>
                        <List.Header as='a'>{item.title}</List.Header>
                        <List.Description>{item.description}</List.Description>
                    </List.Content>
                </List.Item>
            );
        });
        return renderedList;
    }

    render(){
        // console.log(this.state.newsApi);
        return (
        <div className = 'container'>
            <div className = 'row'>
                <List>
                    {this.newsList(this.state.newsApi)}
                </List>
            </div>
        </div>    
        );
    }
}
