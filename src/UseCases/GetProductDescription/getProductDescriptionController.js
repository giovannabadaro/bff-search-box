const { baseURL } = require('../../config')
const getProductDescriptionUseCase = require('./getProductDescriptionUseCase')
const axios = require('axios')

const getProductListController = async (request, response) => {
  const { id } = request.params
  console.log(id)
  const requestToApi = `${baseURL}/items/${id}`

  if (!id) {
    return response.status(404).json({ message: 'Not Found!' })
  }

  try {
    const { data } = await axios(requestToApi)

    const itemsObject = await getProductDescriptionUseCase(data)

    response.status(200).json(itemsObject)
  } catch (e) {
    return response.status(400).json({
      message: e.message || 'Unexpected error.',
    })
  }
}

module.exports = getProductListController
