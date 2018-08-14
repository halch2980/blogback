const model = require('../Models/index');
const Post = model.posts;
const User = model.users;
const Sub = model.subscribers;
const Comment = model.comments;

const FeedController = {

    get: function (req, res) {
        let User_id = req.auth;
        let Following_id = [];
        let Following = [];
        let Posts = [];
        let Posts_id = [];
        let Comments = [];
        let FeedObj = [];
        let Feed = [];
        let CommentsToPost = [];
        let CommentToPost = {
            comment: null,
            children: null,
        };
        let offset = 0;
        let page = req.params.offset;

        if (page > 1) {
            offset = (offset - 1) * 10;
        }

        let Commentator = (array, com) => {
              if (com.parent_id !== null){

                  CommentToPost.children = CommentToPost;
                  CommentToPost.comment = null;


                  for (let j = array.length; j !== -1; j--){
                      if (com.parent_id == array[j].parent_id){
                          CommentToPost.children.push(array[j]);
                          array.slice(i, 1);
                      }
                  }

                  for (let j = array.length; j !== -1; j--){
                      if (com.parent_id == array[j].id){
                          CommentToPost.comment = array[j];
                      }
                  }


                  if (CommentToPost.comment.parent_id !== null){

                      return Commentator(array)

                  }

              } else {

                   CommentsToPost.push(CommentToPost)
                   return CommentToPost;

              }
        };

        Sub.findAll({
            where: {
                sub_id: User_id.id
            }
        }).then(sub => {
            for (var key in sub) {
                Following_id[key] = sub[key].user_id
            }
            User.findAll({
                where: {
                    id: Following_id,
                },
            }).then(users => {
                for (var key in users) {
                    Following[key] = users[key]
                }
                Post.findAll({
                    where: {
                        user_id: Following_id
                    },
                    order: [
                        ['created_at', 'DESC']
                    ],
                    limit: 10,
                    offset: offset,
                }).then(posts => {

                    for (var key in posts) {
                        Posts[key] = posts[key];
                        Posts_id[key] = posts[key].id
                    }
                    Comment.findAll({
                        where: {
                            post_id: Posts_id
                        },
                        order: [
                            ['created_at', 'DESC']
                        ]
                    }).then(comments => {
                        for (var key in comments) {
                            Comments[key] = comments[key]
                        }


                        for (var key in Posts) {
                            FeedObj[0] = Posts[key];

                            for (var userKey in Following) {
                                if (Following[userKey].id == Posts[key].user_id) {
                                    FeedObj[1] = Following[userKey];
                                    break
                                }
                            }
                            // for (var comKey in Comments) {
                            //     if (Comments[comKey].post_id == Posts[key].id) {
                            //         CommentsToPost.push(Comments[comKey])
                            //     }
                            // }
                            for (let i = Comments.length; i !== -1; i--){
                                if (Comments[i].post_id == Posts[key].id){
                                    Commetator(Comments, Comments[i])
                                }
                            }
                            FeedObj[2] = CommentsToPost;
                            CommentsToPost = [];
                            Feed[key] = FeedObj;
                            FeedObj = [];


                        }
                        res.send(Feed);
                    })
                })
            })
        });
    },
}

module.exports = FeedController;