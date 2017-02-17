/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';

var $ = window.$;

class PublishedNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: []
        }
    }

    componentWillMount() {
        this.getTags();
        this.getPublishedNews();
    }

    getPublishedNews() {
        let self = this;
        fetch("http://127.0.0.1:8000/news/article/").then(function (response) {
           response.json().then(function (data) {
               console.log(data.results);
               self.setState({
                   news_arr: data.results
               })
           })
        })
    }

    getTags() {
        let self = this;
        fetch(window.the_url +"news/tag/").then(function (response) {
            response.json().then(function (data) {
                let tag_list = [];
                for (let i = 0; i < data.results.length; i++) {
                    tag_list[data.results[i].id] = data.results[i].name;
                }
                self.setState({
                    tags_list: tag_list
                })
            })
        })
    }


    render() {
        return (
            <main className="published-news-page">
                <h2 className="main-page-headline">已发表文章</h2>
                <table className="news-table">
                    <tr>
                        <th>ID</th>
                        <th>标题</th>
                        <th>作者</th>
                        <th>摄影作者</th>
                        <th>标签</th>
                        <th>发布日期</th>
                        <th>操作</th>
                    </tr>
                    {
                        this.state.news_arr.map(news => (
                            <tr>
                                <td>{news.id}</td>
                                <td>{news.title}</td>
                                <td>{news.author}</td>
                                <td>{news.photographer}</td>
                                <td>{news.tags.map(tag_id => (
                                    this.state.tags_list[tag_id] + '/'
                                ))}</td>
                                <td>{news.create_time}</td>
                                <td>
                                    <a href="#" className="table-action-btn">编辑</a>
                                    <a href="#" className="table-action-btn">删除</a>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </main>
        )
    }
}

export default PublishedNewsPage;