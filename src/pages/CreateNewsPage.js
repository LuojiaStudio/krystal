/**
 * Created by Jsceoz on 2017/2/12.
 */
import React from 'react';

class CreateNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [],
            tags: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        var editor = new window.wangEditor('editor');
        editor.config.uploadImgUrl = 'http://127.0.0.1:8000/file/up/';
        editor.create()
    }

    handleChange(event) {
        console.log(arguments);
        // let obj = {};
        // obj[name] = 'dasdas';
        this.setState({
            title: event.target.value
        })
    }

    handleSelect(event) {
        let options = event.target.options;
        let value = [];
        for (let  i = 0; i < options.length; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
                this.setState({
                    tags: value
                });
            }
        }
    }


    render() {
        return (
            <main className="new-news-page">
                <h2 className="main-page-headline">新建文章</h2>
                <form action="/">
                    <div className="form-item">
                        <label htmlFor="">标题：</label>
                        <input type="text" className="main-input" onChange={this.handleChange} value={this.state.title}/>
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
                        <textarea name="" id="editor" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">标签：</label>
                        <select name="tags[]" multiple className="tag-select" onChange={this.handleSelect}>
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

export default CreateNewsPage;