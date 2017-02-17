/**
 * Created by Jsceoz on 2017/2/12.
 */
import React from 'react';

class CreateNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            selected_tags: [],
            author: '',
            photographer: '',
            content: '',
            tags_list: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleEditorContentChange = this.handleEditorContentChange.bind(this)
    }

    componentDidMount() {
        let editor = new window.wangEditor('js_editor');
        editor.config.uploadImgUrl = 'http://127.0.0.1:8000/file/up/';
        editor.create();

        window.editor = editor;
        this.getTagsList();
    }

    getTagsList() {
        let self = this;
        fetch("http://127.0.0.1:8000/news/tag/").then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    tags_list: data.results
                })
            })
        })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleEditorContentChange() {
        console.log(window.editor.$txt.html());
        let content = window.editor.$txt.html();
        this.setState({
            content: content
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
                <form>
                    <div className="form-item">
                        <label htmlFor="">标题：</label>
                        <input
                            id="for_title"
                            name="title"
                            type="text"
                            className="main-input"
                            onChange={this.handleChange}
                            value={this.state.title}/>
                        <span className="form-item-note">输入标题输入标题</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">作者：</label>
                        <input
                            id="for_author"
                            name="author"
                            type="text"
                            className="main-input"
                            onChange={this.handleChange}
                            value={this.state.author}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">摄影记者：</label>
                        <input
                            id="for_photographer"
                            name="photographer"
                            type="text"
                            className="main-input"
                            onChange={this.handleChange}
                            value={this.state.photographer}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">正文：</label>
                        <div
                            id="js_editor"
                            contentEditable="true"
                        >
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">标签：</label>
                        <select
                            name="tags[]"
                            multiple
                            className="tag-select"
                            onChange={this.handleSelect}
                        >
                            {
                                this.state.tags_list.map(tag => (
                                    <option value={tag.id}>{tag.name}</option>
                                ))
                            }
                        </select>
                        <span className="form-item-note">输入标题输入标题</span>
                    </div>
                </form>
                <div className="form-item">
                    <button className="submit-btn" value="确 定" onClick={this.handleEditorContentChange}/>
                </div>
            </main>
        )
    }
}

export default CreateNewsPage;