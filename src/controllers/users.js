const { Users, db } = require('../models/models')
const { genRandomUsername } = require('../utils/username')
const bcrypt = require('bcrypt')

  async function createNewUser(username,description,email,password){
    
    const user = await Users.create({
    username,
    description,
    email,
    password
  }).catch((err)=>{
    console.error(new Error('USERNAME OR PASSWORD ALREADY EXISTS'))
    console.error(err);
    return err;
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
  createNewUser,
  getUserById,
  getUserByUsername,
}























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
