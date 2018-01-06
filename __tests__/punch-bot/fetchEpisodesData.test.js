const fetchEpisodesData = require('../../punch-bot/fetchEpisodesData')

describe('fetchEpisodesData', () => {
  it('returns the episode data from Object', () => {
    const data = {
      e: [
        { a: 1 },
        { b: 2 },
        { c: true }
      ]
    }
    const episodes = fetchEpisodesData(data)
    const expected = [
      { a: 1 },
      { b: 2 },
      { c: true }
    ]

    expect(episodes).toEqual(expected)
  })
})
