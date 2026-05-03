export interface Project {
  id: number
  category: string
  title: string
  description: string
  image: string
  link?: string
}

export const useProjects = () => {
  const { t, tm, rt } = useI18n()

  const projects = computed<Project[]>(() => {
    const translated = tm('portfolio.projects') as any[]
    return translated.map((p: any) => ({
      id: Number(rt(p.id)),
      category: rt(p.category),
      title: rt(p.title),
      description: rt(p.description),
      image: ['/images/projects/evola.jpg', '/images/projects/recovery.jpg', '/images/projects/dobroe-serdce.jpg'][Number(rt(p.id)) - 1],
      link: ['https://evola.netlify.app/', 'https://freedomastana.netlify.app/', 'https://dobroe-serdce.netlify.app/'][Number(rt(p.id)) - 1],
    }))
  })

  const getProjectById = (id: number) => {
    return projects.value.find(p => p.id === id)
  }

  const getAllProjects = () => {
    return projects.value
  }

  return {
    projects,
    getProjectById,
    getAllProjects,
  }
}
