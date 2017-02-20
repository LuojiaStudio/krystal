/**
 * Created by Jsceoz on 2017/2/12.
 */
import React from 'react';

class NewsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_editing: false,
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
        this.handleCoverImageUpload = this.handleCoverImageUpload.bind(this);
        this.setNewsInitialData = this.setNewsInitialData.bind(this);
        this.setNewsInitialTags = this.setNewsInitialTags.bind(this)
    }


    componentDidMount() {
        let editor = new window.wangEditor('js_editor');
        editor.config.uploadImgUrl = window.the_url + 'file/up/';
        editor.create();

        window.editor = editor;
        this.getTagsList();
        this.setNewsInitialData();
        this.setNewsInitialTags();
    }

    setNewsInitialData() {
        let self = this;
        if (this.props.params.id) {
            fetch(window.the_url +"news/article/" + this.props.params.id + "/").then(function (response) {
                response.json().then(function (data) {
                    console.log(data);
                    self.setState({
                        author: data.author,
                        title: data.title,
                        cover: data.cover,
                        photographer: data.photographer,
                        content: data.content,
                        tags: data.tags,
                        is_editing: true
                    });
                    window.editor.$txt.html(self.state.content)
                })
            })
        }
    }

    setNewsInitialTags() {
        //TODO：
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
        console.log(document.getElementById('for_cover').files[0]);

        let formData = new FormData();
        let file = document.getElementById('for_cover').files[0];
        formData.append('wangEditorH5File', file, file.name);

        fetch("http://127.0.0.1:8000/file/up/", {
            method: "POST",
            body: formData
        }).then(function (response) {
            response.text().then(function (data) {
                console.log(data)
            })
        })
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
            tags: self.state.tags,
            content: window.editor.$txt.html(),
            is_checked: true
        };
        let url = '';
        let method = '';
        if (this.state.is_editing) {
            url = window.the_url + "news/article/" + this.props.params.id + "/";
            method = "PUT"
        }
        else {
            url = window.the_url + "news/article/";
            method = "POST"
        }
        fetch(url, {
            method: method,
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
                        <img src={this.state.cover} alt={this.state.title}/>
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
                                    <option className="tag-option" value={tag.id}>{tag.name}</option>
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

export default NewsPanel;