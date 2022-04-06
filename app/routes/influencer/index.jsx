import {useMatches} from 'remix'

export default function Index() {
  const {data: {influencer}} = useMatches().find(item => item.data?.influencer)

  return (
    <div>
      Dashboard for {influencer.name}
    </div>
  )
}