const { respondJson, respondOnError } = require('../lib/response')
const dbConnection = require('../lib/dbConnection')
const menuData = require('../models/menuModel')

// 메뉴 정보 가져오기
exports.getMenu = async (req, res) => {
    const connection = await dbConnection()
    const { menu_id } = req.params
    let getMenuResult
    let data = {}
    data = {
        menu_id,
    }
    try {

        getMenuResult = await menuData.getMenu(connection, data)
        respondJson('success', getMenuResult, res, 200)
        
    } catch (e) {

        console.log(e)
        respondOnError(e.message, res, 500)
        
    } finally {
        connection.release()
    }
}