const HttpError = require('../../errors/http-error')
const ApiErrors = require('../../constants/API-errors')

const getPostTestResponse = (req, res, next) => {
    console.log(req.body)
    const requestText = req.body.text

    if (!requestText) {
        const error = new HttpError(
            ApiErrors.BAD_REQUEST,
            400
        )
        return res.json({ error })
    }

    res.status(200).json({ data: requestText })
}

module.exports = getPostTestResponse
