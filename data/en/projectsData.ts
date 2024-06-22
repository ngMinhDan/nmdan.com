import type { Project } from '~/types/data'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'Virtual Assistant - ViVi',
    description: `ViVi: Virtual Assistant is an Intelligent Voice Control System developed by VinBigData (Vingroup)`,
    imgSrc: '/static/images/vivi.jpg',
    url: 'https://vinbigdata.com/vinbase/vivi',
    builtWith: ['Python', 'NLP', 'TTS', 'ASR', 'Dialog', 'LLM', 'Android'],
  },
  {
    type: 'self',
    title: 'Go Base Service',
    imgSrc: '/static/images/golang.png',
    url: 'https://github.com/ngMinhDan/go-base-service',
    repo: 'tiny-retry',
    builtWith: ['Golang', 'Postgres', 'Elasticsearch', 'Redis', 'Kafka', 'Docker'],
  },
  {
    type: 'self',
    title: 'Python Base Service',
    imgSrc: '/static/images/python.jpg',
    url: 'https://github.com/ngMinhDan/python-base-service',
    builtWith: ['Python', 'MongoDB', 'Redis', 'Elasticsearch', 'Docker'],
  },
]
