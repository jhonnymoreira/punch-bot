const parseEndpointResponse = require('../../punch-bot/parseEndpointResponse')

describe('parseEndPointResponse', () => {
  it('returns a JSON of parsed response', () => {
    const response = '{ "a": 1, "b": 2, "c": true }'
    const parsedResponse = parseEndpointResponse(response)
    const expected = {
      a: 1,
      b: 2,
      c: true
    }

    expect(parsedResponse).toEqual(expected)
  })

  it('throws if the response isn\'t a valid JSON String', () => {
    const response = '{ a: 1,  b: 2, c: true }'

    expect(() => parseEndpointResponse(response)).toThrow()
  })
})
