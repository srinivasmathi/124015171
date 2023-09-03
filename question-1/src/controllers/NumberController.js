const NumberService = require("../services/NumberService");

const numberService = new NumberService();

const get = async (req, res) => {
    try {
        let response = await numberService.getNumbers(req.query.url);
        return res.status(200).json({
            numbers: response
        });
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            numbers: []
        });
    }
}

module.exports = {
    get
}