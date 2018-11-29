/********** 메뉴 상세보기 ************/
exports.getMenu = (connection, data) => {
    return new Promise((resolve,reject)=> {
        const Query = `
        SELECT *
        FROM MENU
        WHERE menu_id=${data.menu_id}
        `
        connection.query(Query, (err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}