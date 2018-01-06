const getAnimeEndpoint = animeURL =>
  animeURL.replace('#', '').replace(/\/\d+$/, '')

module.exports = getAnimeEndpoint
