import {useState, useEffect, useCallback} from 'react'

export const useLoadData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [isError, setIsError] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    getUserInfo()
      .then((res) => setUserInfo(res.data.items))
      .catch((err) => {
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const onRefresh = useCallback(() => {
    setIsError(false)
    setRefreshing(true)
    getUserInfo()
      .then((res) => setUserInfo(res.data.items))
      .catch((err) => setIsError(true))
      .finally(() => {
        setRefreshing(false)
      })
  }, [])
  return {isLoading, isError, refreshing, userInfo, onRefresh}
}
