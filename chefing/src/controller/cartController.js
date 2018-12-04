const { respondJson, respondOnError } = require('../lib/response')
const dbConnection = require('../lib/dbConnection')
const cartData = require('../models/cartModel')

// 1. 장바구니 담기
exports.addCart = async (req, res)=> {
    const connection = await dbConnection()

    const { menu_image } = req.body
    const { menu_name } = req.body
    const { menu_count } = req.body
    const { menu_total_price } = req.body
    const { menu_id } = req.body
    const { user_id } = req.body

    let addCartResult
    let data ={}
    data = {
        menu_image,
        menu_name,
        menu_count,
        menu_total_price,
        menu_id,
        user_id,
    }

    try {

        addCartResult = await cartData.addCart(connection,data)
        respondJson('success', addCartResult.message, res, 200)
        
    } catch (e) {

        respondOnError(e.message, res, 500)  
        
    } finally {
        connection.release()
    }
}

// 2. 장바구니 리스트
exports.getCart = async (req, res)=> {
    const connection = await dbConnection()
    const { user_id } = req.body 
    let getCartResult

    try {

        getCartResult = await cartData.getCart(connection, user_id)
        respondJson('success', getCartResult, res, 200)
        
    } catch (e) {

        respondOnError(e.message, res, 500)
        
    } finally {

        connection.release()

    }
}

// 3. 장바구니 삭제
exports.deleteCart = async (req, res)=> {
    const connection = await dbConnection()
    const { cart_id } = req.params
    let deleteCartResult

    try {
        
        deleteCartResult = await cartData.deleteCart(connection, cart_id)
        respondJson('success', deleteCartResult.message, res, 200)
        
    } catch (e) {

        respondOnError(e.message, res, 500)
        
    } finally {

        connection.release()

    }
}