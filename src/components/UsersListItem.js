import { GoTrashcan } from "react-icons/go"
import Button from "./Button"
import { removeUser } from "../store"
import { useThunk } from "../hooks/useThunk"
import ExpandablePanel from "./ExpandablePanel"

const UsersListItem = ({ user }) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header = <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
          <GoTrashcan/>
      </Button>
      {error && <div>Error deleteing user.</div>}
      {user.name}
    </>

  return (
    <ExpandablePanel header={header}>
      content
    </ExpandablePanel>
  )
}

export default UsersListItem