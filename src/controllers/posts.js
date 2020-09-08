
const { Posts, Users, db } = require('../models/models')

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    title,
    body,
    userId
  })
  return post
}

/**
 * showAllPosts({username: ''})
 * showAllPosts({title: ''})
 */
async function findAllPosts(query) {
  let where = {}
  if (query.userId) { where.userId = query.userId }
  
  const posts = await Posts.findAll({
    include: [ Users ],
    where
  })

  return posts
}

module.exports = {
  createNewPost,
  findAllPosts
}

/* Test Code */

// async function task() {
//   console.log(
//     await createNewPost(
//       1,
//       'This is a sample post',
//       'Body of the post goes here',2
//     )
//   ),
//   console.log(
//     await createNewPost(
//       2,
//       'Another sample post',
//       'Some body example here as well',1
//     )
//   )
//   // const posts = await showAllPosts()
//   for (let p of posts) {
//     console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n${p.likeCount} \n==========\n`)
//   }
// }
// task()

