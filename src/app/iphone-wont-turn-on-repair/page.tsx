import type { Metadata } from 'next'
import { IPHONE_PROBLEMS } from '@/data/problems'
import ProblemPage from '@/components/sections/ProblemPage'

const problem = IPHONE_PROBLEMS.find(p => p.slug === 'iphone-wont-turn-on-repair')!

export const metadata: Metadata = {
  title: problem.metaTitle,
  description: problem.metaDescription,
  alternates: { canonical: `https://www.itechrepairs.com.au/${problem.slug}` },
}

export default function Page() {
  return <ProblemPage problem={problem} />
}
