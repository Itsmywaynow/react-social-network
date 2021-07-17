const initialState = {
    stories: [
      {
        id: 1,
        videoUrl: 'https://pbs.twimg.com/media/EhRMmBqVkAIKPRT.png',
        userName: 'Kevin',
        isChecked: false
      },
      {
        id: 2,
        videoUrl: 'https://zoovet52.ru/wp-content/uploads/2019/12/49e284ec413bd9bb7fd7b12d4b3cc409.jpg',
        userName: 'Olive',
        isChecked: false
      },
      {
        id: 3,
        videoUrl: 'https://i.pinimg.com/736x/4e/4b/d2/4e4bd28682470bd8df1de323267c6de8.jpg',
        userName: 'Hernandez',
        isChecked: false
      },
      {
        id: 4,
        videoUrl: 'https://i.pinimg.com/236x/a6/af/1e/a6af1e398341b6940e453576d9f130a7.jpg',
        userName: 'Todd',
        isChecked: false
      }
  ],
  posts: [
    {
      id: 1,
      backgroundImg: 'https://dzenhotel.ru/wp-content/uploads/2019/01/Kitajskij-novyj-god-skidka-50-protsentov.jpg',
      tags: ['2021', 'newyear', 'chinese'],
      postText: 'Happy New Year!',
      isLiked: false,
      comments: []
    },
    {
      id: 2,
      backgroundImg: '',
      tags: ['2021', 'newyear', 'chinese'],
      postText: 'Idc what to write',
      isLiked: false,
      comments: []
    }
  ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fsdf":
      
      break;
  
    default:
      return state;
  }
} 

export default newsReducer