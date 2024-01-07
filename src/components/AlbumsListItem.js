import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import { GoTrashcan } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store'
import PhotosList from './PhotosList'

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, result] = useRemoveAlbumMutation()

    const handleAlbumRemove = () => {
        removeAlbum(album)
    }

    const header = <>
        <Button className="mr-2" loading={result.isLoadin} onClick={handleAlbumRemove}>
            <GoTrashcan/>
        </Button>
        {album.title}
    </>

    return (
    <ExpandablePanel header={header}>
        <PhotosList album={album}/>
    </ExpandablePanel>
    )
}

export default AlbumsListItem