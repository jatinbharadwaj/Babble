const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'mysql',
    database:'babbledb',
    username:'babbleuser',
    password:'babblepass',
})
//++++++++++++++++++++++COMMON CONSTRAINTS++++++++++++++++++++++++++++
  const COL_ID_PRIMARY_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
  const COL_ID_FOREIGN_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    foreignKey: true
  }
  const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
  }
  const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
  }
  const COL_COUNT_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    allowNull:false
  }
  

  //++++++++++++++++++++DEFINE MODELS+++++++++++++++++++++++++//
  
  // ----------------- USER---------------------------------
  const Users = db.define('user', {
    id: COL_ID_PRIMARY_DEF,
    username: COL_USERNAME_DEF,
    description: { type: Sequelize.DataTypes.TEXT, allowNull:true },
    followersCount: {type:Sequelize.DataTypes.INTEGER,allowNull:false,defaultValue:0 },
    friendsCount:  {type:Sequelize.DataTypes.INTEGER,allowNull:false,defaultValue:0},
    postsCount:  {type:Sequelize.DataTypes.INTEGER,allowNull:false,defaultValue:0}
  })

  //------------------POSTS-------------------------------- 
  
  const Posts = db.define('post', {
    id: COL_ID_PRIMARY_DEF,
    title: COL_TITLE_DEF,
    body: { type: Sequelize.DataTypes.TEXT, allowNull: false },
    likesCount:{type:Sequelize.DataTypes.INTEGER,allowNull:false,defaultValue:0 }
  })
  // --------------------Comments---------------------------
  const Comments = db.define('comment', {
    id: COL_ID_PRIMARY_DEF,
    title: COL_TITLE_DEF,
    body: {
      type: Sequelize.DataTypes.TEXT('tiny'),
    },
    likesCount: {type:Sequelize.DataTypes.INTEGER,allowNull:false,defaultValue:0 },
  })

  // -------------------FOLLOW & FRIENDS--------------------
  
  const Followers = db.define('follow',{
    id: COL_ID_PRIMARY_DEF,
    followid: {type:Sequelize.DataTypes.INTEGER,allowNull:false,defaultValue:0 }
  })
  

// const Followers = db.define('follow',{
//     uid: {type: Sequelize.DataTypes.INTEGER,autoIncrement: false, primaryKey: true},
//     fid:COL_ID_FOREIGN_DEF
// })

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

Users.hasMany(Followers)
Followers.belongsTo(Users)

// Users.hasMany(Following)
// Following.belongsTo(Users)

module.exports = {
    db,Users,Posts,Comments,
    Followers
}