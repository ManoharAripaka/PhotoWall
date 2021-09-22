import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
    name : "store",
    initialState :{
        enable : false,
        data : [
                {
                    url:"https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.1605559903.fit_scale.size_760x427.png",
                    comments:[{name:"guest1",com:"hi"},{name:"guest1",com:"helloo"},{name:"guest1",com:"welcome"},{name:"guest1",com:"holaaaa"}],
                    tag:"Google Photo"
                },
                {
                    url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    comments:[{name:"guest1",com:"hi"},{name:"guest1",com:"helloo"},{name:"guest1",com:"welcome"}],
                    tag: "Loperamide, sold under the brand name Imodium, among others"
                },
                {
                    url:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    comments:[{name:"guest1",com:"hi"},{name:"guest1",com:"helloo"}],
                    tag: ""
                },
                {
                    url:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
                    comments:[{name:"guest1",com:"hi"},{name:"guest1",com:"helloo"}],
                    tag: ""
                },
                {
                    url:"https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.1605559903.fit_scale.size_760x427.png",
                    comments:[{name:"guest1",com:"hi"},{name:"guest1",com:"helloo"}],
                    tag: ""
                }
            ]
        },
    reducers: {
        add: (state,action) => {
            state.data.push({url:action.payload.url,comments:[],tag:action.payload.caption})
        },

        comment: (state,action) => {
            state.data[action.payload.val].comments.push({name : action.payload.name, com : action.payload.com})
        },
        remove: (state,action) => {
            state.data.splice(action.payload.e,1)
        },
        change: (state) => {
            state.enable = !state.enable
        }
    }
})
export const { add, comment, remove, change } = postSlice.actions
export default postSlice.reducer