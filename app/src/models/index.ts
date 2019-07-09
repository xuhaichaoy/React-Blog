import obj from '../config/mysql'
obj.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(() => {
        console.log('Unable to connect to the database')
    })

obj.sequelize
  .sync()
  .then(() => {
    console.log('init db ok')
  })
  .catch(() => {
    console.log('init db error')
  })




