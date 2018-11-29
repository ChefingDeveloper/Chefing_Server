const { respondJson, respondOnError } = require('../lib/response')
const dbConnection = require('../lib/dbConnection')
const mainData = require('../models/mainModel')

// 1. 메인화면 메뉴리스트 가져오기
exports.getMainList = async (req, res) => {
  const connection = await dbConnection()
  let mainResult // 메뉴리스트
  try {
    mainResult = await mainData.getMainList(connection)
    respondJson('success', mainResult, res, 200)
  } catch (e) {

    console.log(e)
    respondOnError(e.message, res, 500)
    
  } finally {
    connection.release()
  }
}