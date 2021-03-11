import { testFunction, testValue } from './server-middleware-util'

export default function (req, res, next) {
    res.end(JSON.stringify({
        testFunction: testFunction(),
        testValue: testValue,
    }))
}
