import NoteList from '../Notes/NoteList/NoteList'
import { useIonicStorageQuery } from '../../Storage/useIonicStorageQuery'

const HomeContent: React.FC = () => {
	const { length } = useIonicStorageQuery()

	return <div className="flex h-full">{length > 0 ? <NoteList /> : <p>You haven't created any notes yet</p>}</div>
}

export default HomeContent
