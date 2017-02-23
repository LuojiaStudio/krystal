/**
 * Created by Jsceoz on 2017/2/22.
 */
import React from 'react';

class FeedPage extends React.Component {
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
                        <h5>通知公告</h5>
                    </section>
                    <section>
                        <h5>系统更新</h5>
                    </section>
                    <section>
                        <h5>我发起的工作</h5>
                    </section>
                    <section>
                        <h5>待处理的工作</h5>
                    </section>
                </main>
            </main>
        )
    }
}

export default FeedPage;