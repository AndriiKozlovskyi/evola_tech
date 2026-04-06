export interface Project {
  id: number
  category: string
  title: string
  description: string
  image: string
  link?: string
}

export const useProjects = () => {
  // Mock project data - will be replaced with API calls or Storyblok in Phase 7
  const projects = ref<Project[]>([
    {
      id: 1,
      category: 'Fintech',
      title: 'NeoBank Interface',
      description: 'A secure, high-performance banking dashboard for modern users.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuCHdOE6Ceh1VHX08RATs2StRyY4EQ47Snm-l6SSXLfKxT7ZoLJ2IEEZ12xPINb39Hu6IPkLdmSNvZNKVEpd-dlrdqcMva_y7aLdBiio5zxc8NzD6iXHKbRACukwOsoYhmHptLWxQyEdozMQMWf2pYL4eIWrv5kB18pSbRdIwXzFvbA6PqmRuaZoeqY_2Xk5THnU4hITaPqzjEtGYAMekdDpjQ1kRXC3OjymRJ2qY4nWxhgaXG9evcGwdn7Y8msDHUjXCWcceAXII',
      link: '#'
    },
    {
      id: 2,
      category: 'Data Science',
      title: 'Analytics Core',
      description: 'Predictive modeling engine for supply chain optimization.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF1xQDIu9G1k5LCwY7XpTY19PnQIszLLqf1izqZrA1nGXuwlAHP3Oubf0GfM_WiGmdDLvYpjGTfGhUI0cwjhsLmgmYQ0ZiboYvjW_qHXuJjKc4hznkcYB_68sr16xdlssoIaeoWvPdooY3uRFLPx1J6anHuldqu2bdoJe1HWc3ME2sif9sL8AgP7TxKtxUiAJ-UY_s9CR-E6Tp2KlBu4N-43x_tXyx0upYV8wCcT1XHG224zYJPZMMTCO-6goBk-pKVSERds50gqU',
      link: '#'
    },
    {
      id: 3,
      category: 'E-Commerce',
      title: 'Luxe Retail',
      description: 'Bespoke headless commerce solution for luxury brands.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmRJ2YW_2cvYKe328oYtgRttADRXJ8IiPaKx7rw-fQUy-pGJAVJBJoqcZrzm6ZbGjtlM3SllJm79Ufls910dUF-MJjAcMXf_V7qgvbTUk7KmA-J-J4GsqIvcAuRb4O9O4YilJjJ6WMCb7WY-t7l_CcMb8z6_DURm7zNXNQbRUkEExeC1cADffvFDEWO__gc2uaDr2SDcaNH_d3eEz4sPnwmTYofjY5OorTYLDkH-F76K6aHPtYp-m8CybPMGc1GMjUAwzrdHMQWIs',
      link: '#'
    },
    {
      id: 4,
      category: 'Infrastructure',
      title: 'Cloud Migrator',
      description: 'Seamless migration tool for legacy enterprise systems.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEzzN4ZWCS6Zml27X343oi0zak9fJDgPV9_y1VsmZQrppsO9Ajn2cnykdnse04svlya4y7AP8RL0ltEweWWjHBGIwFQ80HQbsYUPy_j4dARaoqN8USwxOjHyrAuZOrvJrLJhnPPq6rUcSwhG9OsbkKDnML8MAArEcCT-xLrTlNuHq0eUa6WMjvcEvMnKDdYXhoPyQMtevImoZuTOQoz_FLEB3546zCA244U-aYdcDY1oto_Cl6ttzccnIM224ndcomQQa78KJYCDY',
      link: '#'
    },
    {
      id: 5,
      category: 'SaaS',
      title: 'SyncFlow CRM',
      description: 'Intelligent customer relation management platform.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEnz1ap_OpChxP7gFZhCXR4bSVWrtlbOBo82WZeVxJwqWPAGVSTZs4FVgDGESMqtBcqX5hdkOFqc080gSgP5O2FSLXaO7r84K1Bt4o4EEn3kfZxgKRmkPgOrG_JHkpiogaRjjKPPiUGzXao7m3kPD0HbmQSR6Bid-gwScsAMP9ErXl0n3w_x84r-vtxX-YFE2Z_AQeOIZ8wF4LZxejzfFobgOHt_IhDvjPJDFJA_svlCS-2oOVwd_RMzZKpE4zs_rBpUuCTu19VZU',
      link: '#'
    },
    {
      id: 6,
      category: 'Security',
      title: 'ShieldGate Pro',
      description: 'Zero-trust network architecture for global firms.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgPq3NQnXvDB5adDChxzuHvUD-4nPqahf90YDgiOB4N5T968FgM5wLEMG6-OEpdWYrrCPKYKXWboZ4EzIycb0h8oj2uLtgodgflKevzsieoHGfuVLW5mJi2NgaHoupK8ha5fZnU-AZ2B0h5nQpCb4oIR2ADsTPQ4QJj_WXf5WODAea-qnjQJp0VHWGEq60-Ay2ANuO7LMj-10Oww_siCg1bUzR3TWEkhh-vEFZFW344kzSh-ZXiE11-LD5_3qaSJ94JUs55Vc5N8',
      link: '#'
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
