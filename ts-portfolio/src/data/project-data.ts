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
    desc: '아나바다는 아껴쓰고 나눠쓰고 바꿔쓰고 다시쓰자의 줄임말이며 집에서 사용하지 않는 레저용품을 유저간 채팅을 통해 대여를 해주는 서비스입니다.',
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
];
