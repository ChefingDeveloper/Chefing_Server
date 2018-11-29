exports.getMainList = (connection) => {
  return new Promise((resolve,reject)=> {
    const Query = `SELECT 
    menu_id, menu_name, menu_price, menu_image, shop_location_name, chef_image, chef_name, chef_id, shop_id
     FROM MENU`
    connection.query(Query, (err, data) => {
      err && reject(err)
      resolve(data)
    })
  })
}

