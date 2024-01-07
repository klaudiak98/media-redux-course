import PhotosListItem from './PhotosListItem'
import { useFetchPhotosQuery, useAddPhotosMutation } from '../store'
import Button from './Button'
import Skeleton from './Skeleton'

const PhotosList = ({ album }) => {
  const { data, isFetching, error} = useFetchPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotosMutation()

  const handleAddPhoto = () => {
    addPhoto(album)
  }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {
          isFetching
          ? <Skeleton className="h-8 w-8" times={4}/>
          : error
            ? <div>Error fetching photos</div>
            : data.map(photo => (
              <PhotosListItem key={photo.id} photo={photo}/>
            ))
        }
      </div>
    </div>
  )
}

export default PhotosList