import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import { GoTrashcan } from 'react-icons/go'

const AlbumsListItem = ({ album }) => {
    const header = <div>
        <Button><GoTrashcan/></Button>
        {album.title}
    </div>

    return (
    <ExpandablePanel header={header}>
        List of photos
    </ExpandablePanel>
    )
}

export default AlbumsListItem