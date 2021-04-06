import React from "react";
import { connect } from "react-redux";
import { editPost } from "../../actions/editPost";
import { Editor } from "@tinymce/tinymce-react";
import { withRouter } from "react-router-dom";
import history from '../../history';

class ArticleClassEditForm extends React.Component {
    // post = this.props.post

    state = {
        post: {
            title: this.props.post.attributes.title,
            content: this.props.post.attributes.content,
            author: this.props.post.attributes.author,
            image: this.props.post.attributes.image,
            category_id: this.props.post.attributes.category_id,
        }
    };

    handlePostChange = (event) => {
        let post = { ...this.state.post };
        let currentState = post;
        let { name, value } = event.target;
        currentState[name] = value;
        this.setState({
            post: currentState,
        });
    };

    handleImageChange = (event) => {
        let post = { ...this.state.post };
        let currentState = post;
        currentState["image"] = event.target.files[0];
        this.setState({
            post: currentState,
        });
    };

    handleEditorChange = (content, editor) => {
        let post = { ...this.state.post };
        let currentState = post;
        currentState["content"] = content;
        this.setState({
            post: currentState,
        });
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        let postData = this.state.post
        let post_id = this.props.post.id
        postData["id"] = post_id
        this.props.dispatchEditPost(postData, post_id);

        this.setState({
            post: {
                title: this.props.post.attributes.title,
                content: this.props.post.attributes.content,
                author: this.props.post.attributes.author,
                image: {},
                category_id: this.props.post.attributes.category_id,
            }
        });

        this.props.setInEditMode(false)
        
        window.location.reload()

    };

    render() {
        let c = this.props.categories.map((category) => (
            <option
                key={category.attributes.id}
                value={category.attributes.id}
                name="category_id"
                onChange={this.handleChange}
            >
                {" "}
                {category.attributes.id} - {category.attributes.name}
            </option>
        ));

        if (c) {
            return (
                <div className="postInput">
                    <h1>Edit Post</h1>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="postForm">
                            <label>Title</label>
                            <input
                                onChange={this.handlePostChange}
                                type="text"
                                value={this.state.post.title}
                                name="title"
                            />
                        </div>
                        <div className="postForm">
                            <label>Author</label>
                            <input
                                onChange={this.handlePostChange}
                                type="text"
                                value={this.state.post.author}
                                name="author"
                            />
                        </div>
                        <select
                            value={this.state.post.category_id}
                            name="category_id"
                            onChange={this.handlePostChange}
                        >
                            <option>Choose Category...</option>
                            {c}
                        </select>
                        <div className="postForm">
                            <label>Image</label>
                            <input
                                id="files-upload"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={this.handleImageChange}
                            />
                        </div>
                        <div className="postForm">
                            <label>Content</label>
                            <Editor
                                apiKey="xxdtys70gcr66orzrsr2v65wsqqzeff19c37xij80zax9qck"
                                initialValue={
                                    this.props.post.attributes.content
                                }
                                init={{
                                    selector: "textarea",
                                    height: 500,
                                    menubar: "insert",
                                    default_link_target: "_blank",
                                    plugins: [
                                        "advlist autolink lists link image charmap print preview anchor",
                                        "searchreplace visualblocks code fullscreen",
                                        "insertdatetime media table paste code help wordcount",
                                        "image",
                                        "media",
                                        "link",
                                        "imagetools",
                                    ],
                                    toolbar:
                                        "undo redo | formatselect | link | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | media | removeformat | help ",
                                }}
                                onEditorChange={this.handleEditorChange}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

function mSTP(state) {
    return {
        posts: state.posts,
        categories: state.categories,
    };
}

function mDTP(dispatch) {
    return {
        dispatchEditPost: (post) => dispatch(editPost(post))
    };
}

export default withRouter(connect(mSTP, mDTP)(ArticleClassEditForm));
