const initialState = {
    
    mainPosts: [{
        id: 1,
        User: {
            id:1,
            nickname: 'hoho',
        },
        content: '첫번째 게시글 #해시 #익스',
        Images: [
            {src: 'https://farm66.staticflickr.com/65535/50663712178_ee47e092af_b.jpg'},
            {src: 'https://farm66.staticflickr.com/65535/50661309313_aae10373c1_b.jpg'},
            {src: 'https://farm66.staticflickr.com/65535/50664045327_e389774287_b.jpg'},
        ],
        Comments: [{
                User: {
                    nickname: 'jong'
                },
                content: 'wow'
            }, {
                User: {
                    nickname: 'hwan',
                },
                content: 'hohohoh'
            }]
    }],
    imagePaths: [],
    postAdded: false,
  
}

// action 
const ADD_POST = "ADD_POST"

export const addPost = {
    type: ADD_POST
}


//가짜 객체 바꿀 액션
const dummyPost = {
    User: {
        id: 1,
        nickname: 'first'
    },
    Images: [],
    Comments: [],
}




const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: 
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }

        default:
            return state
    }
}

export default reducer;