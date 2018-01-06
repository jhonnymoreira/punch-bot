const getAnimeEndpoint = require('../../punch-bot/getAnimeEndpoint')

describe('getAnimeEndpoint', () => {
  it('parses a PunchSub URL and returns its endpoint', () => {
    const animeURL = 'https://punchsub.com/#listar/400/episodios/fullhd/1'
    const animeEndpoint = getAnimeEndpoint(animeURL)
    const expected = 'https://punchsub.com/listar/400/episodios/fullhd'

    expect(animeEndpoint).toEqual(expected)
  })
})