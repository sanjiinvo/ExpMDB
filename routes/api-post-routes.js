const express = require('express');
const router = express.Router();
const { getPost,
     deletePost,
      getEditPost,
       editPost,
        getPosts,
         getAddPost,
          addPost
        } = require('../controllers/post-controller')

//Get all posts
router.get('/api/posts', getPosts)
    
//Add new post
router.get('/api/post', addPost)

//Get post by id
router.get('/api/post/:id', getPost)

//Delete post by id
router.delete('/api/post/:id', deletePost)

//Update post by id
router.put('/api/post/:id',editPost)


router.get('/edit/:id', getEditPost)




router.post('/add-post', getAddPost) 




module.exports = router;