const getSearcheItemsUseCase = async (data) => {
  const {
    results,
    filters: [filteredCategories],
  } = data

  const author = {
    name: 'Giovanna',
    lastName: 'Badaró',
  }

  const categories = filteredCategories?.values[0]?.path_from_root?.map(
    (category) => category.name
  )

  const tranformPicture = (item) =>
    item.pictures && item.pictures.length
      ? item.pictures[0].secure_url
      : item.thumbnail.replace(/-I\./, '-X.')

  const resultItems = results?.map((resultItem) => ({
    id: resultItem.id,
    title: resultItem.title,
    price: {
      currency: 'ARS',
      amount: resultItem.price,
      decimals: 2,
    },
    picture: tranformPicture(resultItem),
    condition: resultItem.condition === 'new' ? 'Nuevo' : 'Usado',
    free_shipping: resultItem.shipping.free_shipping,
  }))

  const ItemsObj = Object.assign(
    { author: author },
    { categories: categories },
    { items: resultItems }
  )

  return ItemsObj
}
module.exports = getSearcheItemsUseCase
