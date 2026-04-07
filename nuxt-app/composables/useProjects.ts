export interface Project {
  id: number
  category: string
  title: string
  description: string
  image: string
  link?: string
}

export const useProjects = () => {
  // Real project data
  const projects = ref<Project[]>([
    {
      id: 1,
      category: 'Rental Service',
      title: 'Evola E-Bikes',
      description: 'Electric bike and battery rental service in Wroclaw with full suspension and hardtail options, weekly service, and clear rental terms.',
      image: '/images/projects/evola.jpg',
      link: 'https://evola.netlify.app/'
    },
    {
      id: 2,
      category: 'Healthcare',
      title: 'Recovery Astana',
      description: 'Comprehensive addiction treatment center in Astana offering detoxification, rehabilitation, psychotherapy, and long-term recovery support.',
      image: '/images/projects/recovery.jpg',
      link: 'https://recoveryastana.netlify.app/'
    },
    {
      id: 3,
      category: 'Elderly Care',
      title: 'Dobroe Serdce',
      description: 'Private comfortable pension for elderly people in Astana providing 24/7 qualified care, medical supervision, and individual attention.',
      image: '/images/projects/dobroe-serdce.jpg',
      link: 'https://dobroe-serdce.netlify.app/'
    },
  ])

  const getProjectById = (id: number) => {
    return projects.value.find(p => p.id === id)
  }

  const getAllProjects = () => {
    return projects.value
  }

  return {
    projects: readonly(projects),
    getProjectById,
    getAllProjects,
  }
}
