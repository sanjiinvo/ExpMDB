const Post = require('../models/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('errors'),{title:'error',})
}

const getPost = (req, res) => {
    const title = 'PostsById';
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('post'), {post, title}))
        .catch((error) => {
            handleError(res, error);})
};

const deletePost = (req, res) => {
    const title = 'PostsById';
    Post
        .findByIdAndDelete(req.params.id)
        .then( result =>{
            res.sendStatus(200);
        })
        .catch((error) => {
            handleError(res, error);})
}
const getEditPost = (req, res) => {
    const title = 'Edit Post';
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('edit-post'), {post, title}))
        .catch((error) => {
            handleError(res, error);})
        }
const editPost = (req, res) => {
    const {title, text, author} = req.body;
    const {id} = req.params;
    Post
        .findByIdAndUpdate(id, {title, text, author})
        .then(result => res.redirect(`/posts/${id}`))
        .catch((error) => {
            handleError(res, error);})
}
const getPosts = (req, res) => {
    const title = 'Posts';
    Post
        .find()
        .sort({createdAt: -1})
        .then((posts) => res.render(createPath('posts'), {posts, title}))
        .catch((error) => {
            handleError(res, error);})
        }
const getAddPost = (req, res) => {
    const {title, text, author} = req.body;
    const post = new Post({title, text, author});
    post.save()
    .then((result)=> res.redirect('/'))
    .catch((error) => {
        handleError(res, error);})
}
const addPost = (req, res) => {
    const title = 'AddPost';
    res.render(createPath('add-post'),{title})
}

module.exports = {
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getPosts,
    getAddPost,
    addPost
};