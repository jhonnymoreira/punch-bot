const labelEpisodesData = require('../../punch-bot/labelEpisodesData')

describe('labelEpisodesData', () => {
  it('returns each episode data with "id", "chapter", and "link"', () => {
    const data = [
      ['405', '1', '1280x720'],
      ['406', '2', '1280x720'],
      ['407', '3', '1280x720']
    ]
    const labeledEpisodesData = labelEpisodesData(data)
    const expected = [
      {
        id: '405',
        chapter: '1',
        link: 'https://punchsub.com/download-vip2/405'
      },
      {
        id:'406',
        chapter: '2',
        link: 'https://punchsub.com/download-vip2/406'
      },
      {
        id: '407',
        chapter: '3',
        link: 'https://punchsub.com/download-vip2/407'
      }
    ]

    expect(labeledEpisodesData).toEqual(expected)
  })
})
