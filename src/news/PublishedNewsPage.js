/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';
import Loading from '../components/Loading';
import SnackBar from '../components/SnackBar';

class PublishedNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news_arr: [],
            next_page: '',
            previous_page: '',
            loading: false
        };

        this.getNextPage = this.getNextPage.bind(this);
        this.getPreviousPge = this.getPreviousPge.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.loading = this.loading.bind(this)
    }

    componentWillMount() {
        this.getTags();
        this.getPublishedNews();
    }

    getPublishedNews() {
        this.loading();
        let self = this;
        fetch(window.api_url + "news/article/?is_checked=true").then(function (response) {
           response.json().then(function (data) {
               self.setState({
                   news_arr: data.results,
                   previous_page: data.previous,
                   next_page: data.next,
                   loading: false
               })
           })
        })
    }

    getTags() {
        let self = this;
        fetch(window.api_url +"news/tag/").then(function (response) {
            response.json().then(function (data) {
                let tag_list = [];
                for (let i = 0; i < data.results.length; i++) {
                    tag_list[data.results[i].id] = data.results[i].name;
                }
                self.setState({
                    tags_list: tag_list,
                })
            })
        })
    }

    getPreviousPge() {
        this.loading();
        let self = this;
        fetch(this.state.previous_page).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    news_arr: data.results,
                    previous_page: data.previous,
                    next_page: data.next,
                    loading: false
                })
            })
        })
    }

    getNextPage() {
        this.loading();
        let self = this;
        fetch(this.state.next_page).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    news_arr: data.results,
                    previous_page: data.previous,
                    next_page: data.next,
                    loading: false
                })
            })
        })
    }

    handleDelete(e) {
        let self = this;
        fetch( window.api_url + "news/article/" + e.target.dataset.id + "/", {
            method: "DELETE",
        }).then(function (response) {
            console.log(response.status);
            if (response.status === 204) {
                self.getPublishedNews()
            }
        })
    }

    loading() {
        this.setState({
            loading: true
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
                                    <a href={"#/news/edit-news/" + news.id} className="table-action-btn">编辑</a>
                                    <a onClick={this.handleDelete} data-id={news.id} className="table-action-btn">删除</a>
                                </td>
                            </tr>
                        ))
                    }
                </table>
                <button className="btn" onClick={this.getPreviousPge}>上一页</button>
                <button className="btn" onClick={this.getNextPage}>下一页</button>
                <Loading
                    open={this.state.loading}
                />
            </main>
        )
    }
}

export default PublishedNewsPage;