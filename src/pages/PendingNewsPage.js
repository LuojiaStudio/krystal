/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';

class PendingNewsPage extends React.Component {
    render() {
        return (
            <main className="pending-news-page">
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
                    <tr>
                        <td>56465</td>
                        <td>新闻标题新闻标题新闻标题</td>
                        <td>小明</td>
                        <td>小明</td>
                        <td>校园/计算机学院</td>
                        <td>2017-11-16</td>
                        <td>
                            <a href="#" className="table-action-btn">编辑</a>
                            <a href="#" className="table-action-btn">删除</a>
                        </td>
                    </tr>
                    <tr>
                        <td>56465</td>
                        <td>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</td>
                        <td>小明</td>
                        <td>小明</td>
                        <td>校园/计算机学院</td>
                        <td>2017-11-16</td>
                        <td>
                            <a href="#" className="table-action-btn">编辑</a>
                            <a href="#" className="table-action-btn">删除</a>
                        </td>
                    </tr>
                </table>
            </main>
        )
    }
}

export default PendingNewsPage;