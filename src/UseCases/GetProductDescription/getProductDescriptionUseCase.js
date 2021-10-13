const { baseURL } = require('../../config')
const axios = require('axios')

const getProductListUseCase = async (data) => {
  const requestToApi = `${baseURL}/items/${data.id}/description`

  const { data: description } = await axios(requestToApi)

  const author = {
    name: 'Giovanna',
    lastName: 'Badaró',
  }
  const item = {
    id: data.id,
    title: data.title,
    price: {
      currency: 'ARS',
      amount: data.price,
      decimals: 2,
    },
    picture: data.pictures[0].secure_url,
    condition: data.condition === 'new' ? 'Nuevo' : 'Usado',
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.sold_quantity,
    description: description.plain_text,
  }

  const ItemsObj = Object.assign({ author: author }, { item: item })

  return ItemsObj
}
module.exports = getProductListUseCase
