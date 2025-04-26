interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Secure Messaging Apps',
    description: `A comparison of secure messaging apps from a security and privacy point of view.`,
    imgSrc: '/static/images/securemess.png',
    href: 'https://securemessagingapps.com',
  },
  {
    title: 'CIAM Blog',
    description: `A blog about customer identity and access management.`,
    imgSrc: '/static/images/ciam.png',
    href: 'https://ciamblog.net',
  },
]

export default projectsData
