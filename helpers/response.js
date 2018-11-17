module.exports.SuccessfulResponseBuilder = function (result, code = 0, message = "OK") {
    return {
        code,
        message,
        result
    }
}

module.exports.UnsuccessfulResponseBuilder = function (result, code, message) {
    return {
        code,
        message,
        result
    }
}

module.exports.ExceptionResponseBuilder = function (exception, code = -1, message="Service Exception") {
    return {
        code,
        message: `${ message }: ${ exception.message }`,
        result: null
    }
}