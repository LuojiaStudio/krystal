/**
 * Created by Jsceoz on 2017/2/12.
 */
import React from 'react';

class CreateNewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: [],
            author: '',
            photographer: '',
            content: '',
            cover: 'dasd',
            tags_list: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleTagSelect = this.handleTagSelect.bind(this);
        this.handleEditorContentChange = this.handleEditorContentChange.bind(this);
        this.createNewArticle = this.createNewArticle.bind(this);
        this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this)
    }

    componentDidMount() {
        let editor = new window.wangEditor('js_editor');
        editor.config.uploadImgUrl = window.the_url + 'file/up/';
        editor.create();

        window.editor = editor;
        this.getTagsList();
    }

    getTagsList() {
        let self = this;
        fetch(window.the_url +"news/tag/").then(function (response) {
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

    handleCoverImageUpload() {
        console.log(document.getElementById('for_cover').files[0])
    }

    handleEditorContentChange() {
        let content = window.editor.$txt.html();
        this.setState({
            content: content
        })
    }

    handleTagSelect(event) {
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

    createNewArticle() {
        let content = window.editor.$txt.html();
        this.setState({
            content: content
        });
        let self = this;
        let article_payload = {
            title: self.state.title,
            author: self.state.author,
            cover: self.state.cover,
            tags: ['校园', '评论'],
            content: window.editor.$txt.html(),
            is_checked: true
        };
        // let data = new FormData();
        // data.append("json", JSON.stringify(article_paylaod));
        fetch(window.the_url + "news/article/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article_payload)
        }).then(function (response) {
            console.log(response)
        })
    }


    render() {
        return (
            <main className="new-news-page">
                <h2 className="main-page-headline">新建文章</h2>
                <form>
                    <div className="form-item">
                        <label htmlFor="for_title">标题：</label>
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
                        <label htmlFor="for_cover">封面图片：</label>
                        <input
                            id="for_cover"
                            name="cover"
                            type="file"
                            onChange={this.handleCoverImageUpload}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="for_author">作者：</label>
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
                        <label htmlFor="for_photographer">摄影记者：</label>
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
                        <label htmlFor="js_editor">正文：</label>
                        <div className="editor-wrapper">
                            <div
                                id="js_editor"
                                contentEditable="true"
                                className="editor"
                            >
                            </div>
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="for_tags">标签：</label>
                        <select
                            id="for_tags"
                            name="tags[]"
                            multiple
                            className="tag-select"
                            onChange={this.handleTagSelect}
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
                    <button className="submit-btn" value="确 定" onClick={this.createNewArticle}>确定</button>
                </div>
            </main>
        )
    }
}

export default CreateNewsPage;