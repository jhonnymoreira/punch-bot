const getEpisodeMagnet = page => {
  const MAGNET_PATTERN = /var torrentId = '(.+)';/

  return page.match(MAGNET_PATTERN)[1]
}

module.exports = getEpisodeMagnet
