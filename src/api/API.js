import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer _gLL_NKddcJN-cwdtzzfskcBzfS6qfZnGJTY--xvSMmQ0pgY8S1h6bnT7BRuIikPzxBHSzMQkD0ujKMojJHnpvUodLZT1FmFQlybLMNInq4Q53YB2CwsDjGYzIGOXXYx'
  }
})
