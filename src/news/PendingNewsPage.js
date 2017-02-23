/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';

class PendingNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: [],
            next_page: '',
            previous_page: ''
        };

        this.getNextPage = this.getNextPage.bind(this);
        this.getPreviousPge = this.getPreviousPge.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillMount() {
        this.getTags();
        this.getPublishedNews();
    }

    getPublishedNews() {
        let self = this;
        fetch("//127.0.0.1:8000/news/article/?is_checked=false").then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    news_arr: data.results,
                    previous_page: data.previous,
                    next_page: data.next
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

    getPreviousPge() {
        let self = this;
        fetch(this.state.previous_page).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    news_arr: data.results,
                    previous_page: data.previous,
                    next_page: data.next
                })
            })
        })
    }

    getNextPage() {
        let self = this;
        fetch(this.state.next_page).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    news_arr: data.results,
                    previous_page: data.previous,
                    next_page: data.next
                })
            })
        })
    }

    handleDelete(e) {
        let self = this;
        fetch( window.the_url + "news/article/" + e.target.dataset.id + "/", {
            method: "DELETE",
        }).then(function (response) {
            console.log(response.status);
            if (response.status === 204) {
                self.getPublishedNews()
            }
        })
    }
    render() {
        return (
            <main className="published-news-page">
                <h2 className="main-page-headline">待审核文章</h2>
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
                                    <a href={"#/news/edit-news/" + news.id} className="table-action-btn">查看</a>
                                    <a onClick={this.handleDelete} data-id={news.id} className="table-action-btn">删除</a>
                                </td>
                            </tr>
                        ))
                    }
                </table>
                <div className="btn" onClick={this.getPreviousPge}>上一页</div>
                <div className="btn" onClick={this.getNextPage}>下一页</div>
            </main>
        )
    }
}

export default PendingNewsPage;