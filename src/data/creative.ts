export type Essay = {
  title: string
  description: string
  venue?: string
  link?: string
}

export type ReadingNote = {
  title: string
  description: string
  status: 'NOTE' | 'RECOMMENDATION' | 'CURRENTLY READING'
  link?: string
}

export type DesignWork = {
  title: string
  description: string
  image?: string
  link?: string
}

export type Photograph = {
  title: string
  description: string
  image: string
  link?: string
}

export const ESSAYS: Essay[] = [
  {
    title: 'Equality Beyond Paper',
    description: 'An essay on gender equality and the structural barriers that keep formal promises from becoming lived reality.',
    venue: 'Placed second in an essay competition; published at AfriYAN Ethiopia',
    link: 'https://hawi-s-essay-gender-equality-git-main-hawis-projects-4e20e58c.vercel.app/',
  },
  {
    title: 'A Lottery in Slow Motion',
    description: 'An essay examining housing and land policy through the slow, uneven distribution of opportunity.',
    link: 'https://my-essay.vercel.app/',
  },
]

export const READING_NOTES: ReadingNote[] = []
export const DESIGN_WORKS: DesignWork[] = []
export const PHOTOGRAPHS: Photograph[] = []