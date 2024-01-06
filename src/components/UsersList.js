import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from '../store'
import Skeleton from "./Skeleton"

const UsersList = () => {
  const dispatch = useDispatch()
  const { isLoading, data, error } = useSelector((state) => (
    state.users
  ))

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  if (isLoading) {
    return <Skeleton times={5} className="h-10 w-full"/>
  }

  if (error) {
    return <div>Error fetching data...</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default UsersList