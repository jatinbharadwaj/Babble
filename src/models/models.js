const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'mysql',
    database:'babbledb',
    username:'babbleuser',
    password:'babblepass',
})
const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
  const COL_IDS_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    ForeignKey: true,
  }
  const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false,
  }
  const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false,
  }
  
  const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF,
  })
  
  const Posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
  })
  
  const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
      type: Sequelize.DataTypes.TEXT('tiny'),
    },
  })
  

const Followers = db.define('follow',{
    id:COL_ID_DEF,
    ids:COL_IDS_DEF
})

const Following = db.define('followers',{
    id:COL_ID_DEF,
    ids:COL_IDS_DEF
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

Users.hasMany(Followers)
Followers.belongsTo(Users)

Users.hasMany(Following)
Following.belongsTo(Users)

module.exports = {
    db,Users,Posts,Comments,Followers,Following
}