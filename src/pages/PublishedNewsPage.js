/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';

class PublishedNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: []
        }
    }

    componentWillMount() {
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
                                <td>{news.tags}</td>
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