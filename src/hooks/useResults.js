import { useEffect, useState } from 'react'
import API from '../api/API'
import { NavigationContext } from 'react-navigation'
import Axios from 'axios'

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchWord) => {
    try {
      const response = await API.get('/search', {
        params: {
          limit: 50,
          term: searchWord,
          location: 'New York'
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('fertility')
  }, []);

  return [searchApi, results, errorMessage]
}
