let evt, ctx

const event = () => {
    return evt
}

const context = () => {
    return ctx
}

const invocationMiddleware = (opts = {}) => {
    const invocationMiddlewareBefore = async (request) => {
        evt = request.event
        ctx = {
            functionVersion: request.context.functionVersion,
            functionName: request.context.functionName,
            memoryLimitInMB: request.context.memoryLimitInMB,
            logGroupName: request.context.logGroupName,
            logStreamName: request.context.logStreamName,
            clientContext: request.context.clientContext,
            identity: request.context.identity,
            invokedFunctionArn: request.context.invokedFunctionArn,
            awsRequestId: request.context.awsRequestId,
            getRemainingTimeInMillis: request.context.getRemainingTimeInMillis,
        }
    }

    const invocationMiddlewareAfter = async (request) => {
        evt = null
        ctx = null
    }

    const invocationMiddlewareOnError = async (request) => {
        evt = null
        ctx = null
    }

    return {
        before: invocationMiddlewareBefore,
        after: invocationMiddlewareAfter,
        onError: invocationMiddlewareOnError,
    }
}

module.exports = invocationMiddleware
module.exports.mw = invocationMiddleware
module.exports.event = event
module.exports.context = context
