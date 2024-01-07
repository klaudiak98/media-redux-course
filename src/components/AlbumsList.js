import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from './Skeleton'
import Button from './Button'
import AlbumsListItem from './AlbumsListItem'

const AlbumsList = ({user}) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, result] = useAddAlbumMutation()

    const handleAddAlbum = () => {
        addAlbum(user)
    }

  return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button loading={result.isLoading} onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        <div>
            {isLoading
                ? <Skeleton className="h-10 w-full" times={3}/>
                : error
                    ? <div>Error loading albums.</div>
                    : data.map(album => (
                        <AlbumsListItem key={album.id} album={album}/>
                    ))
            }
        </div>
    </div>
  )
}

export default AlbumsList