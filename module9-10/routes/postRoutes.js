let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

router.post('/', (req, res) => {
    Controllers.postController.createPost(req.body, res)
})

router.delete('/:postId', (req, res) => {
    Controllers.postController.deletePost(req.params.postId, res)
})



module.exports = router;