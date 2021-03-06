/********** 1. 장바구니 담기 ************/

// 1. 장바구니 담기
exports.addCart = (connection, data)=> {
    return new Promise((resolve, reject)=> {
        const Query=`
        INSERT INTO 
        CART(cart_menu_image, cart_menu_name, cart_menu_count, cart_menu_total_price, menu_id, user_id)
        VALUES(?,?,?,?,?,?)
        `
        connection.query(Query,[data.menu_image, data.menu_name, data.menu_count, data.menu_total_price, data.menu_id, data.user_id],(err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}

// 1-2. 장바구니 중복체크
exports.doublecheck = (connection, data)=> {
    return new Promise((resolve, reject)=> {
        const Query=`
        SELECT * FROM CART
        WHERE user_id=${data.user_id} AND menu_id=${data.menu_id}
        `
        connection.query(Query,(err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}

// 2. 장바구니 리스트
exports.getCart = (connection, user_id)=> {
    return new Promise((resolve, reject)=> {
        const Query=`
        SELECT * FROM
        CART
        WHERE user_id=${user_id}
        `
        connection.query(Query,[user_id],(err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}

// 3. 장바구니 삭제
exports.deleteCart = (connection, cart_id)=> {
    return new Promise((resolve, reject)=> {
        const Query=`
        DELETE FROM CART
        WHERE cart_id=${cart_id}
        `
        connection.query(Query, [cart_id], (err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}

// 4. 레스토랑 아이디 가져오기
exports.getShopId = (connection, menu_id)=> {
    return new Promise((resolve, reject)=> {
        const Query= `
        SELECT shop_id
        FROM MENU
        WHERE menu_id=${menu_id}
        `
        connection.query(Query, [menu_id], (err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}