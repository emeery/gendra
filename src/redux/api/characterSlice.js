import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiCharacterSlice = createApi({
//   reducerPath: 'characterApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'ttps://rickandmortyapi.com/api/character'
//   }),
//   tagTypes: ['Characters'],
//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => '/posts',
//     }),
//   }),
// });

const initialState = {
  info: null,
  results: [],
  active: null,
  error: null
}

export const getCharacters = createAsyncThunk(
  'getCharacters',
  async (url = 'https://rickandmortyapi.com/api/character/') => {
      const get = await fetch(url)
          .then(response => response.json())
          .then(data => data)
          .catch(error => {
              alert(error);
              return error;
          });
      return get
  }    
);


const charactersSlice = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {

  },
  // extraReducers(builder) {
  //     builder.addCase(
  //         fetchPullCharacters.fulfilled, (state, action) => {
  //             state.info = action.payload.info;
  //             state.results = action.payload.results;
  //             state.error = null;
  //         }
  //     );
  //     builder.addCase(
  //         fetchPullCharacters.rejected, (state, action) => {
  //             state.error = action.payload;
  //         }
  //     );
  //     builder.addCase(
  //         fetchCharacter.fulfilled, (state, action) => {
  //             state.active = action.payload;
  //         }
  //     )
  // },
});

export default charactersSlice.reducer;

