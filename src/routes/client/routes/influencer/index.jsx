import {useMatches} from 'remix'

export default function Index() {
  const {data: {influencer}} = useMatches().find(item => item.data?.influencer)

  return (
    <div>
      <h2>Dashboard for {influencer.name}</h2>
    </div>
  )
}