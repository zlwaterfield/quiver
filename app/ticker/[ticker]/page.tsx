import { useRouter } from 'next/navigation'

export default function Stock({ params }: { params: { ticker: string } }) {
  return (
    <div>
      <h1>{params.ticker}</h1>
    </div>
  )
}