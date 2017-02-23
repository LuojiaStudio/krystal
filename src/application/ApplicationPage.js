/**
 * Created by Jsceoz on 2017/2/22.
 */
import React from 'react';

class ApplicationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main className="page-wrapper">
                <main className="page-content">
                    <section>
                        <h5 className="main-page-headline">常用应用</h5>
                        <ul>
                            <li>
                                <a href="#/news" className="app-item">
                                    <img src="http://whusu.oss-cn-qingdao.aliyuncs.com/appicon/news.png" alt="新闻管理"/>
                                    <h6>新闻管理</h6>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h5 className="main-page-headline">所有应用</h5>
                        <ul>
                            <li>
                                <a href="#/news" className="app-item">
                                    <img src="http://whusu.oss-cn-qingdao.aliyuncs.com/appicon/news.png" alt="新闻管理"/>
                                    <h6>新闻管理</h6>
                                </a>
                            </li>
                        </ul>
                    </section>
                </main>
            </main>
        )
    }
}

export default ApplicationPage;