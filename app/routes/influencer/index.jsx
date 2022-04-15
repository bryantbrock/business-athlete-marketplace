import {useMatches} from 'remix'

export default function Index() {
  const {data: {influencer}} = useMatches().find(item => item.data?.influencer)

  return (
    <div>
      <h1>Dashboard for {influencer.name}</h1>
    </div>
  )
}