import dateBase from '../mysql'
const EnterArtical = dateBase.EnterArtical


EnterArtical.fetch = async function () {
    let r = {}
    await EnterArtical.findAll({
        // 获取所有信息
        limit: 24,

    }).then(function (result: any) {
        r = {
            status: 1,
            msg: "success",
            list: JSON.parse(JSON.stringify(result))  
        }
    }).catch(function (err: any) {
        r = {
            status: -1000,
            msg: "error",
            data: err  
        }
    })
    return r
};

export default EnterArtical





