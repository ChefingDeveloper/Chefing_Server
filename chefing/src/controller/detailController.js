const { respondJson, respondOnError } = require('../lib/response')
const dbConnection = require('../lib/dbConnection')
const detailData = require('../models/detailModel')
/************* 1. 메뉴 탭 ****************/
// 1-1. 메인메뉴 리스트 가져오기
exports.getMainMenuList = async (req, res) => {
    const connection = await dbConnection()
    const { chef_id } = req.params
    let mainMenuResult
    let data = {}
    data = {
        chef_id,
    }
    try {

        mainMenuResult = await detailData.getDetailMainMenu(connection, data)
        respondJson('success', mainMenuResult, res, 200)
        
    } catch (e) {

        console.log(e)
        respondOnError(e.message, res, 500)
        
    } finally {
        connection.release()
    }
}

// 1-2. 사이드메뉴 리스트 가져오기
exports.getSideMenuList = async (req, res) => {
    const connection = await dbConnection()
    const { chef_id } = req.params
    let sideMenuResult
    let data = {}
    data = {
        chef_id,
    }
    try {

        sideMenuResult = await detailData.getDetailSideMenu(connection, data)
        respondJson('success', sideMenuResult, res, 200)
        
    } catch (e) {

        console.log(e)
        respondOnError(e.message, res, 500)
        
    } finally {
        connection.release()
    }
}
/************* 2. 매장 탭 ****************/
exports.getShopInfo = async(req, res)=> {
    const connection = await dbConnection()
    const { shop_id } = req.params
    let shopInfoResult
    let data = {}
    data = {
        shop_id,
    }
    try {

        shopInfoResult = await detailData.getShopInfo(connection, data)
        respondJson('success', shopInfoResult, res, 200)
        
    } catch (e) {
        
        console.log(e)
        respondOnError(e.message, res, 500)

    } finally {
        connection.release()
    }
}

/************* 3. 셰프 탭 ****************/
exports.getChefInfo = async(req, res)=> {
    const connection = await dbConnection()
    const { chef_id } = req.params
    let chefInfoResult
    let data = {}
    data = {
        chef_id,
    }
    try {

        chefInfoResult = await detailData.getChefInfo(connection, data)
        respondJson('success', chefInfoResult, res, 200)
        
    } catch (e) {
        
        console.log(e)
        respondOnError(e.message, res, 500)

    } finally {
        connection.release()
    }
}