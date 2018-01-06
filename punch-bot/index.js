const rp = require('request-promise')
const getAnimeEndpoint = require('./getAnimeEndpoint')
const parseEndpointResponse = require('./parseEndpointResponse')
const fetchEpisodesData = require('./fetchEpisodesData')
const labelEpisodesData = require('./labelEpisodesData')

const punchBot = animeURL => {
  const animeEndpoint = getAnimeEndpoint(animeURL)

  rp(animeEndpoint)
    .then(parseEndpointResponse)
    .then(fetchEpisodesData)
    .then(labelEpisodesData)
}

module.exports = punchBot
