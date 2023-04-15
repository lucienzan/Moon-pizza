import { computed, ref } from 'vue'
export default function basketList() {
  let basket = ref([])

  let AddToBasket = function (item, option) {
    let IsExist = basket.value.find(function (x) {
      return x.name == item.name && x.size == option.size
    })
    if (IsExist) {
      return IsExist.quantity++
    }
    basket.value.push({
      name: item.name,
      price: option.price,
      size: option.size,
      quantity: 1
    })
  }

  function ToDecreament(item) {
    item.quantity--
    if (item.quantity === 0) {
      RemoveItem(item)
    }
  }

  function RemoveItem(item) {
    basket.value.splice(basket.value.indexOf(item), 1)
  }

  function ToIncreament(item) {
    item.quantity++
  }

  const GetTotal = computed(() => {
    let totalCount = 0
    basket.value.forEach((item) => {
      totalCount += item.quantity * item.price
    })
    return totalCount.toFixed(2)
  })
  return {
    AddToBasket,
    basket,
    ToDecreament,
    ToIncreament,
    GetTotal
  }
}
