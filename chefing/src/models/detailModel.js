
//1. 메뉴 상세 보기 - 메인메뉴 리스트
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

//2. 메뉴 상세 보기 - 사이드메뉴 리스트
exports.getDetailSideMenu = (connection, data) => {
    return new Promise((resolve, reject)=> {
        const Query = `
        SELECT menu_id, menu_name, menu_image, menu_price
        FROM MENU
        WHERE menu_level=1 AND chef_id=${data.chef_id}
        `
        connection.query(Query, (err,result) => {
            err && reject(err)
            resolve(result)
        })
    })
}