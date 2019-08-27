import * as bodyParser from "body-parser";
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

export default urlencodedParser