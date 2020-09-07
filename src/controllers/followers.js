const{Users,db,followers, Followers} = require('../models/models')

async function createFollow(followid,userId){
    const follower = await Followers.create({
        followid,
        userId
    })
    return follower
}

async function getFollowerId(followid){
    if (!followid) throw new Error('user id not provided')
    if (typeof followid !== 'number') throw new Error('user id should be integer')
    
    return await Users.findOne({ where: { followid } })
}

// TEST

async function task(){
    console.log( await createFollow(2,1))
    console.log( await createFollow(2,3))
}

task()