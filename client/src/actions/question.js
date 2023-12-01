import * as api from '../api'

export const askQuestion = (questionData, navigate ) => async (dispatch) =>{
 try {
    const  { data } = await api.postQuestion(questionData)
    dispatch({ type: "POST_QUESTION", payload: data })
    dispatch( fetchAllQuestions() )
    navigate('/')
 } catch (error) {
    console.log(error)
 }
}

export const fetchAllQuestions = () => async (dispatch) => {
   try {
      console.log("fetched data")
      const { data } = await api.getAllQuestions()
      dispatch({ type: 'FETCH_ALL_QUESTIONS',payload: data })
   } catch (error) {
      console.log(error)
   }
}

export const deleteQuestion = ( id, navigate ) => async (dispatch) => {
   try {
      const { data } = api.deleteQuestion(id)
      dispatch(fetchAllQuestions())
      navigate('/')
   } catch (error) {
      console.log(error)
   }
}

export const voteQuestion = (id, value, userId ) => async(dispatch) => {
   try {
      const { data } = await api.voteQuestion( id, value, userId )
      dispatch(fetchAllQuestions())
   } catch (error) {
      console.log(error)
   }
}

export const postAnswer = (answerData) => async (dispatch) => {

   try {
      const { id, noOfanswers, answerBody, userAnswered, userId } = answerData
      const {data } = await api.postAnswer( id,noOfanswers, answerBody, userAnswered, userId)
      dispatch({ type: 'POST_ANSWERS', payload: data })
      dispatch(fetchAllQuestions())
   } catch (error) {
      console.log(error)
      
   }
}

export const deleteAnswer = (id, answerId, noOfanswers) => async( dispatch) => {
   try {
      //console.log(answerId)
      const { data } = await api.deleteAnswer(id, answerId, noOfanswers)
      dispatch(fetchAllQuestions())
   } catch (error) {
      console.log(error)
   }
}
