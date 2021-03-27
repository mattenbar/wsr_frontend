import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';

function ArticleEditForm(props) {

    let categories = useSelector(state => {
        return (state.categories)
    })

    let postInfo = props.post.attributes
    let post_id = props.post.id

    const defaultPostProps = {
        title: postInfo.title,
        author: postInfo.author,
        content: postInfo.content,
        image: postInfo.image,
        category_id: postInfo.category_id
    }

    const [post, setPost] = useState(defaultPostProps)

    const handleChange = (e) => {
        console.log(e, e.target.name)
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = (e) => {
        // let post = {...post}
        // let currentState = post
        // currentState["image"] = event.target.files[0]
        // this.setState({
        //     post: currentState
        // })
        setPost({
            ...post,
            [e.target.image]: e.target.files[0]
        })

    }
    
    const handleEditorChange = (content, editor) => {
        // debugger
        // console.log(e, content)
        // // debugger
        //     // console.log("postbeforeinitialization", post)
        //     // console.log('Content was updated:', content);
        //     if (post !== undefined) {
        //         // let post = {...post}
        //         let currentState = post
        //         currentState["content"] = content
                
        //         // debugger
        //         setPost({
        //             ...post,
        //             currentState
        //         })
        //     }
        if (post !== undefined) {
            setPost({
                content
            })
        }
    }

    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        debugger

        // dispatch(editPost(post))

        // setPost(defaultPostProps)
        // props.setInEditMode(false)
    }

    let categoriesMapped

    if (categories !== undefined) {
        categoriesMapped = categories.map((category) => (
            <option
                key={category.attributes.id}
                value={category.attributes.id}
                name="category_id"
                onChange={handleChange}
            >
                {" "}
                {category.attributes.id} - {category.attributes.name}
            </option>
        ));
    }

    return (
        // console.log("props", props),
        (
            <div className="editPostInput">
                <h1>Edit Article</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="postForm">
                        <label>Title:&nbsp;</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            value={post.title}
                            name="title"
                        />
                    </div>
                    <div className="postForm">
                        <label>Author:&nbsp;</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            value={post.author}
                            name="author"
                        />
                    </div>
                    <select
                        value={post.category_id}
                        name="category_id"
                        onChange={handleChange}
                    >
                        <option>Choose Category...</option>
                        {categoriesMapped}
                    </select>
                    <div className="postForm">
                        <label>Image:&nbsp;</label>
                        <input
                            id="files-upload"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="postForm">
                        <label>Content:&nbsp;</label>
                        <Editor
                            apiKey="xxdtys70gcr66orzrsr2v65wsqqzeff19c37xij80zax9qck"
                            initialValue={post.content}
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
                            name="content"
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    );
}

export default ArticleEditForm;
