exports.getDetailMainMenu = (connection, data) => {
    return new Promise((resolve,reject)=> {
        const Query = `
        SELECT menu_id, menu_name, menu_image, menu_price
        FROM MENU
        WHERE menu_level=0 AND chef_id=${data.chef_id}
        `
        connection.query(Query, (err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}