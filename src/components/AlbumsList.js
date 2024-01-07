import { useFetchAlbumsQuery } from "../store"
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'

const AlbumsList = ({user}) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)

  return (
    <div>
        <div>
            Albums for {user.name}
        </div>
        <div>
            {isLoading
                ? <Skeleton times={3}/>
                : error
                    ? <div>Error loading albums.</div>
                    : data.map(album => {
                        const header = album.title
                        return (
                            <ExpandablePanel key={album.id} header={header}>
                                List of albums
                            </ExpandablePanel>
                        )
                    })
            }
        </div>
    </div>
  )
}

export default AlbumsList