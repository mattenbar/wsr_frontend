import React from "react";
import { connect } from "react-redux";
import { editStatshot } from "../../actions/editStatshot";
import { Editor } from "@tinymce/tinymce-react";
import { withRouter } from "react-router-dom";

class StatshotClassEditForm extends React.Component {

    state = {
        statshot: {
            content: this.props.statshot.attributes.content,
            image: this.props.statshot.attributes.image,
        }
    };

    handleImageChange = (event) => {
        let statshot = { ...this.state.statshot };
        let currentState = statshot;
        currentState["image"] = event.target.files[0];
        this.setState({
            statshot: currentState,
        });
    };

    handleEditorChange = (content, editor) => {
        let statshot = { ...this.state.statshot };
        let currentState = statshot;
        currentState["content"] = content;
        this.setState({
            statshot: currentState,
        });
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        let statshotData = this.state.statshot
        let statshot_id = this.props.statshot.id
        statshotData["id"] = statshot_id
        this.props.dispatchEditStatshot(statshotData);

        this.setState({
            post: {
                content: this.props.statshot.attributes.content,
                image: {},
            }
        });

    };

    render() {
        return (
            <div className="postInput">
                <h1>Edit Statshot</h1>
                <form onSubmit={this.handleOnSubmit}>
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
                                this.props.statshot.attributes.content
                            }
                            init={{
                                selector: "textarea",
                                width: 1280,
                                height: 1280,
                                menubar: "insert",
                                default_link_target: "_blank",
                                image_title: true,
                                image_caption: true,
                                image_advtab: true,
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount",
                                    "image",
                                    "media",
                                    "link",
                                    "imagetools",
                                    'paste',
                                    'code',
                                ],

                                toolbar: [
                                    "undo redo | styleselect | paste pastetext | link | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image media | removeformat | preview | code | help "
                                    ],
                            }}
                            onEditorChange={this.handleEditorChange}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
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
        dispatchEditStatshot: (statshot) => dispatch(editStatshot(statshot))
    };
}

export default withRouter(connect(mSTP, mDTP)(StatshotClassEditForm));
