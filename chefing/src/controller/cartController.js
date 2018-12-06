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

// 1-2. 장바구니 중복체크
exports.doublecheck = async (req, res) => {
    const connection = await dbConnection()
    const { user_id } = req.body
    const { menu_id } = req.body

    let doubleCheckResult
    let data = {}
    data ={

        user_id,
        menu_id,
    }

    try {

        doubleCheckResult = await cartData.doublecheck(connection, data)
        if(doubleCheckResult[0]==null){
            console.log('장바구니 중복 안됨')
            res.status(200).send({
                message: "success",
                duplicate_id: 0
            })
        }else{
            console.log('장바구니 중복 됨')
            res.status(200).send({
                message: "duplicate",
                duplicate_id: 1
            })
        }
           
        
        
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

// 4. 레스토랑 아이디 가져오기
exports.getShopId = async(req, res)=> {
    const connection = await dbConnection()
    const { menu_id } = req.params
    let getShopIdResult

    try {

        getShopIdResult = await cartData.getShopId(connection, menu_id)
        respondJson('success', getShopIdResult, res, 200)
        
    } catch (e) {

        respondOnError(e.message, res, 500)
        
    } finally {
        connection.release()
    }
}