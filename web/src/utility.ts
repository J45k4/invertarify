import { useRouter } from 'next/router'

export const getPathParam = (field: string) => {
	const router = useRouter()

	return router.query[field] as string
}