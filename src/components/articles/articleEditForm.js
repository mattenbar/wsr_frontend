import React, { useState } from "react";
import { useSelector } from 'react-redux';

function ArticleEditForm(props) {

    let categories = useSelector(state => {
        return (state.categories)
    })

    const defaultPostProps = {
        title: '',
        author:'',
        content:'',
        image:'',
        // category_id
    }

    const [post, setPost] = useState(defaultPostProps)

    const handleChange = () => {

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
        console.log(props),
        (
            <div className="editPostInput">
                {/* <h1>Edit Article</h1>
                <form onSubmit={this.handlePostSubmit}>
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
                        <label>Content</label>
                        <Editor
                            apiKey="xxdtys70gcr66orzrsr2v65wsqqzeff19c37xij80zax9qck"
                            initialValue="<p>This is the initial content of the editor</p>"
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
                            onEditorChange={this.handleEditorChange}
                        />
                    </div>

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

                    <button type="submit">Submit</button>
                </form> */}
            </div>
        )
    );
}

export default ArticleEditForm;

{
    /* <img
src={post.attributes.image}
alt="post-image"
className="individualPostImage"
/>
<h2 className="individualPostTitle">
{post.attributes.title}
</h2>
<h3 className="individualPostAuthor">
BY {post.attributes.author}
</h3>
<h3 className="individualPostDate">
{moment
    .parseZone(post.attributes.created_at)
    .format("MMMM DD, YYYY")}
</h3>
<p className="individualPostContent" dangerouslySetInnerHTML={{ __html: post.attributes.content }}></p> */
}
