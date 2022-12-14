export interface DataType {
  projectName: string;
  devPeriod: string;
  img: string;
  desc: string;
  front: string[];
  back: string[];
  link: string;
  code: string;
  doc: string;
}

export const projectsData: DataType[] = [
  {
    projectName: 'ANBD(아나바다)',
    devPeriod: '2022.09 ~ 2022.10',
    img: 'https://user-images.githubusercontent.com/56163157/207810195-2e45842c-7422-4751-b1f4-a37d93ba8a4a.gif',
    desc: '아나바다는 아껴쓰고 나눠쓰고 바꿔쓰고 다시쓰자의 줄임말입니다.\n집에서 사용하지 않는 레저용품을 유저간 채팅을 통해 대여를 해주는 서비스입니다.',
    front: [
      'JavaScript',
      'React',
      'Redux',
      'StyledComponents',
      'React Hook-form',
      'Stomp',
      'AWS',
    ],
    back: ['Java', 'Spring', 'JWT', 'MySQL', 'Stomp', 'AWS'],
    link: 'https://d1chxyssw587bm.cloudfront.net/',
    code: 'https://github.com/homile/seb39_main_054',
    doc: 'https://www.notion.so/cho-min-woo/SEB_main_project-71fbbc3952ae4b0da540a0b2b84b1537',
  },
  {
    projectName: 'StackOverFlow Clone',
    devPeriod: '2022.08 ~ 2022.09',
    img: 'https://user-images.githubusercontent.com/56163157/208228878-fc4608db-9317-4693-8d9e-c9d1f363e72d.png',
    desc: '코드스테이츠 메인 프로젝트 협업전 스택오버플로우 클론 코딩을 통한 협업 연습용 개발자 커뮤니티 사이트 클론 코딩입니다.',
    front: ['JavaScript', 'React', 'Redux', 'StyledComponents', 'AWS'],
    back: ['Java', 'Spring', 'JWT', 'MySQL', 'AWS'],
    link: 'http://seb39-054-deploy-test.s3-website.ap-northeast-2.amazonaws.com/',
    code: 'https://github.com/homile/stackoverflow-clone',
    doc: '',
  },
  {
    projectName: 'Study Haza',
    devPeriod: '2022.07 ~ 2022.08',
    img: 'https://user-images.githubusercontent.com/56163157/208228902-1b9c6ffb-35ec-4802-a47d-1429f0ee9681.png',
    desc: '개발 스터디를 하고 싶은 개발자들의 모임 \n개발자들의 스터디를 직접 모집하고 참가하는 사이트입니다.',
    front: [
      'TypeScript',
      'React',
      'Redux-toolkit',
      'StyledComponents',
      'vercel',
    ],
    back: ['Firebase(Firestore, Storage, Authentication)'],
    link: 'https://studyhaza.vercel.app/',
    code: 'https://github.com/homile/studyHaza',
    doc: 'https://cho-min-woo.notion.site/StudyHaza-1973422692b64e159d7051de0f50f2d6',
  },
];
