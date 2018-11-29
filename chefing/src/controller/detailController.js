const { respondJson, respondOnError } = require('../lib/response')
const dbConnection = require('../lib/dbConnection')
const detailData = require('../models/detailModel')

// 1. 메뉴 상세화면 - 메인메뉴 리스트 가져오기
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

// 1. 메뉴 상세화면 - 사이드메뉴 리스트 가져오기
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