const { Users, db } = require('../models/models')
const { genRandomUsername } = require('../utils/username')

async function createAnonUser() {
  const user = await Users.create({
    username: genRandomUsername(),
    description: 'I WANNA BE A HOKAGE SOMEDAY',
  })
  return user
}
  async function createNewUser(username,description,followersCount,friendsCount,postsCount){
  const user = await Users.create({
    username,
    description,
    followersCount,
    friendsCount,
    postsCount
  })
  return user
}

async function getUserById(id) {
  if (!id) throw new Error('user id not provided')
  if (typeof id !== 'number') throw new Error('user id should be integer')
  
  return await Users.findOne({ where: { id } })
}

async function getUserByUsername(username) {
  return await Users.findOne({ where: { username } })
}

module.exports = {
  createAnonUser,
  getUserById,
  getUserByUsername,
}

/*  Test Code */


// async function task () {
//     console.log(await createAnonUser())
//     console.log('---------------------')
//     console.log(await createAnonUser())
//     console.log('---------------------')
//     console.log(await createAnonUser())
//     console.log('---------------------')
//     console.log(await createAnonUser())
//     console.log('---------------------')
// }
// task() 


// TEST CODE createNewUser()

// async function task(){
//   let x = genRandomUsername()
//   console.log(await createNewUser(x,`Description of ${x}`,2,3,4))
//   console.log("---------------------------------")
//   x = genRandomUsername()
//   console.log(await createNewUser(x,`Description of ${x}`,2,3,8))
//   console.log("------------------------")
//   x = genRandomUsername()
//   console.log(await createNewUser(x,`Description of ${x}`,9,1,2))
// }

// task()
