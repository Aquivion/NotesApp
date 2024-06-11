import NoteList from '../Notes/NoteList/NoteList'
import { useIonicStorageQuery } from '../../Storage/useIonicStorageQuery'

const HomeContent: React.FC = () => {
	const { length } = useIonicStorageQuery()

	return (
		<div className="flex h-full">
			{length > 0 ? (
				<NoteList />
			) : (
				<div className="flex w-full justify-center items-center">
					<p>You haven't created any notes yet</p>
				</div>
			)}
		</div>
	)
}

export default HomeContent
