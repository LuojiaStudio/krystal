/**
 * Created by Jsceoz on 2017/2/12.
 */
import React from 'react';

class NewNews extends React.Component {
    render() {
        return (
            <main className="new-news-page">
                <h2 className="main-page-headline">新建文章</h2>
                <form action="/">
                    <div className="form-item">
                        <label htmlFor="">标题：</label>
                        <input type="text" className="main-input"/>
                        <span className="form-item-note">输入标题输入标题</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">副标题：</label>
                        <input type="text" className="main-input"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">作者：</label>
                        <input type="text" className="main-input"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">正文：</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">标签：</label>
                        <select name="category[]" multiple className="tag-select">
                            <option value='php'>php 教程</option>
                            <option value='java' selected>java 教程</option>
                            <option value='mysl'>mysql 教程</option>
                            <option value='js'>js 教程</option>
                            <option value='html'>html 教程</option>
                            <option value='php'>php 教程</option>
                            <option value='java' selected>java 教程</option>
                            <option value='mysl'>mysql 教程</option>
                            <option value='js'>js 教程</option>
                            <option value='html'>html 教程</option>
                        </select>
                        <span className="form-item-note">输入标题输入标题</span>
                    </div>
                    <div className="form-item">
                        <input type="submit" className="submit-btn" value="确 定" />
                    </div>
                </form>
            </main>
        )
    }
}

export default NewNews;