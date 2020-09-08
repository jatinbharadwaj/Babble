const { Posts, Users, db, Comments } = require('../models/models')

async function createNewComment(title,body,userId,postId){
    const comment = Comments.create({
        title,
        body,
        userId,
        postId
    })
    return comment
}

async function findAllComments(query){
    let where = {}

    if(query.userId && query.postId){
        where.userId = query.userId
        where.postId = query.postId
    }

    const comments = await Comments.findAll({
        include:[Users,Posts],
        where
    })

    return comments
}

module.exports = {
    createNewComment,
    findAllComments
}

// TEST 

// async function task(){
//     console.log(
//         await createNewComment(
//             'title1',
//             'body1',
//             4,
//             1,
//             1
//         )
//     )
//     console.log(
//         await createNewComment(
//             'title2',
//             'body2',
//             2,
//             1,
//             2
//         )
//     )
// }

// task()