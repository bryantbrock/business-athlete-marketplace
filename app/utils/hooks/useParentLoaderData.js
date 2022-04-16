import {useMatches} from 'remix'

export const useParentLoaderData = ({key}) => {
  const match = useMatches().find(({data}) => data && data[key])

  return match ? {[key]: match.data[key]} : {}
}