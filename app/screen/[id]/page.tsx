import { screens } from '@/config/screens'
import ScreenPageClient from './screen-page-client'

export function generateStaticParams() {
  return screens.map((screen) => ({ id: screen.id }))
}

export default function ScreenPage({ params }: { params: { id: string } }) {
  return <ScreenPageClient id={params.id} />
}
