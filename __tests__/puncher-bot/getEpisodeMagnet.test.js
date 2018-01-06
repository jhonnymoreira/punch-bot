const getEpisodeMagnet = require('../../punch-bot/getEpisodeMagnet')

describe('getEpisodeMagnet', () => {
  it('returns ' , () => {
    const page = `<script type="text/javascript" >
      var torrentId = 'magnet:?xt=urn:btih:40448d478d9203a3919b0900e7fbb9e8748dcdf9&dn=ubuntu-17.10-desktop-amd64.iso&tr=http%3A%2F%2Fipv6.torrent.ubuntu.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftorrent.ubuntu.com%3A6969%2Fannounce&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com';
    </script>`
    const episodeMagnet = getEpisodeMagnet(page)
    const expected = 'magnet:?xt=urn:btih:40448d478d9203a3919b0900e7fbb9e8748dcdf9&dn=ubuntu-17.10-desktop-amd64.iso&tr=http%3A%2F%2Fipv6.torrent.ubuntu.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftorrent.ubuntu.com%3A6969%2Fannounce&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'

    expect(episodeMagnet).toEqual(expected)
  })
})
