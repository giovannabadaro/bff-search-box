const { baseURL, region } = require('../../config')
const getSearcheItemsUseCase = require('./getSearchedItemsUseCase')
const axios = require('axios')

const getSearchedItemsController = async (request, response) => {
  const { q } = request.query
  const requestToApi = `${baseURL}/sites/${region}/search?q=${q}&limit=4`
  console.log(requestToApi)

  if (!q) {
    return response.status(404).json({ message: 'Not Found!' })
  }

  try {
    const { data } = await axios(requestToApi)

    const itemsObject = await getSearcheItemsUseCase(data)

    response.status(200).json(itemsObject)
  } catch (e) {
    return response.status(400).json({
      message: e.message || 'Unexpected error.',
    })
  }
}

module.exports = getSearchedItemsController
