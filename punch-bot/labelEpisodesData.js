const labelEpisodesData = episodesData =>
  episodesData.map(episodeData => {
    const EPISODE_BASE_URL = 'https://punchsub.com/download-vip2/'
    const [id, chapter] = episodeData.slice(0)

    return {
      id,
      chapter,
      link: `${EPISODE_BASE_URL}${id}`
    }
  })

module.exports = labelEpisodesData
