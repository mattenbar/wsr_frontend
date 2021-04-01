import React from "react";
import { connect } from "react-redux";
import { editPointcp } from "../../actions/pointcp/editPointcp";
import { Editor } from "@tinymce/tinymce-react";
import { withRouter } from "react-router-dom";
import history from '../../history';

class PointcpEditForm extends React.Component {

    state = {
        pointcp: {
            topic: this.props.pointcpArticle.topic,
            end_date: this.props.pointcpArticle.end_date,
            titleOne: this.props.pointcpArticle.titleOne,
            contentOne: this.props.pointcpArticle.contentOne,
            authorOne: this.props.pointcpArticle.authorOne,
            imageOne: this.props.pointcpArticle.imageOne,
            titleTwo: this.props.pointcpArticle.titleTwo,
            contentTwo: this.props.pointcpArticle.contentTwo,
            authorTwo: this.props.pointcpArticle.authorTwo,
            imageTwo: this.props.pointcpArticle.imageTwo,
        },
    };

    handlePointcpChange = (event) => {
        let pointcp = { ...this.state.pointcp };
        let currentState = pointcp;
        let { name, value } = event.target;
        currentState[name] = value;
        this.setState({
            pointcp: currentState,
        });
    };

    handleImageOneChange = (event) => {
        let pointcp = { ...this.state.pointcp };
        let currentState = pointcp;
        currentState["imageOne"] = event.target.files[0];
        this.setState({
            pointcp: currentState,
        });
    };

    handleImageTwoChange = (event) => {
        let pointcp = { ...this.state.pointcp };
        let currentState = pointcp;
        currentState["imageTwo"] = event.target.files[0];
        this.setState({
            pointcp: currentState,
        });
    };

    handleEditorOneChange = (content, editor) => {
        let post = { ...this.state.pointcp };
        let currentState = post;
        currentState["contentOne"] = content;
        this.setState({
            pointcp: currentState,
        });
    };

    handleEditorTwoChange = (content, editor) => {
        let post = { ...this.state.pointcp };
        let currentState = post;
        currentState["contentTwo"] = content;
        // debugger
        this.setState({
            pointcp: currentState,
        });
    };

    handlePointcpSubmit = (event) => {
        event.preventDefault()

        let pointcpData = this.state.pointcp
        let pointcp_id = this.props.pointcp_id
        pointcpData["id"] = pointcp_id

        this.props.dispatchEditPointcp(pointcpData)

        this.setState({
            pointcp: {
                topic: this.props.pointcpArticle.topic,
                end_date: this.props.pointcpArticle.end_date,
                titleOne: this.props.pointcpArticle.titleOne,
                contentOne: this.props.pointcpArticle.contentOne,
                authorOne: this.props.pointcpArticle.authorOne,
                imageOne: {},
                titleTwo: this.props.pointcpArticle.titleTwo,
                contentTwo: this.props.pointcpArticle.contentTwo,
                authorTwo: this.props.pointcpArticle.authorTwo,
                imageTwo: {},
            }
        })

        this.props.setInEditMode(false)
    
    }

    render() {
        return (
            <div className="pointcpInput">
                <h1>Input Point Counterpoint</h1>
                <form onSubmit={this.handlePointcpSubmit}>
                    <div>
                        <label>End Date</label>
                        <input
                            type="date"
                            onChange={this.handlePointcpChange}
                            name="end_date"
                            value={this.state.pointcp.end_date}
                        />
                    </div>
                    <div>
                        <label>Topic</label>
                        <input
                            type="text"
                            onChange={this.handlePointcpChange}
                            name="topic"
                            value={this.state.pointcp.topic}
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Title One</label>
                        <input
                            onChange={this.handlePointcpChange}
                            type="text"
                            value={this.state.pointcp.titleOne}
                            name="titleOne"
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Author One</label>
                        <input
                            onChange={this.handlePointcpChange}
                            type="text"
                            value={this.state.pointcp.authorOne}
                            name="authorOne"
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Image One</label>
                        <input
                            id="files-upload"
                            type="file"
                            accept="image/*"
                            onChange={this.handleImageOneChange}
                            name="imageTwo"
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Content One</label>
                        <Editor
                            apiKey="xxdtys70gcr66orzrsr2v65wsqqzeff19c37xij80zax9qck"
                            initialValue={this.state.pointcp.contentOne}
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
                                ],
                                toolbar:
                                    "undo redo | formatselect | link | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | media | removeformat | help ",
                            }}
                            onEditorChange={this.handleEditorOneChange}
                        />
                    </div>
                    <br />
                    <br />
                    <div className="pointcpForm">
                        <label>Title Two</label>
                        <input
                            onChange={this.handlePointcpChange}
                            type="text"
                            value={this.state.pointcp.titleTwo}
                            name="titleTwo"
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Author Two</label>
                        <input
                            onChange={this.handlePointcpChange}
                            type="text"
                            value={this.state.pointcp.authorTwo}
                            name="authorTwo"
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Image Two</label>
                        <input
                            id="files-upload"
                            type="file"
                            accept="image/*"
                            onChange={this.handleImageTwoChange}
                            name="imageTwo"
                        />
                    </div>
                    <div className="pointcpForm">
                        <label>Content Two</label>
                        <Editor
                            apiKey="xxdtys70gcr66orzrsr2v65wsqqzeff19c37xij80zax9qck"
                            initialValue={this.state.pointcp.contentTwo}
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
                                ],
                                toolbar:
                                    "undo redo | formatselect | link | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | media | removeformat | help ",
                            }}
                            onEditorChange={this.handleEditorTwoChange}
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
        pointcp: state.pointcp,
    };
}

function mDTP(dispatch) {
    return {
        dispatchEditPointcp: (pointcpData) => dispatch(editPointcp(pointcpData)),
    };
}

export default withRouter(connect(mSTP, mDTP)(PointcpEditForm));
