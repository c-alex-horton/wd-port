import nexersys from 'public/project-images/nexersys.png'
import quieezy from 'public/project-images/quieezy.png'
import weatherby from 'public/project-images/weatherby.png'

const projects = [
    {
        name: 'Nexersys Web Store',
        image: nexersys,
        skills: ['React', 'Next', 'Strapi', 'TypeScript'],
        github: '',
        link: 'https://prod.web.nexersys.com/',
    },
    {
        name: 'Quieezy',
        image: quieezy,
        skills: ['React', 'Next', 'Next-Auth', 'TypeScript'],
        github: 'https://github.com/c-alex-horton/quieezy',
        link: 'https://quieezy.calebhorton.dev/',
    },
    {
        name: 'Weatherby',
        image: weatherby,
        skills: ['React', 'TypeScript', 'LocalState', 'Consume API'],
        github: 'https://github.com/c-alex-horton/weatherbyv2',
        link: '',
    },
]

export default projects