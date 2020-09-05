import { connect } from 'react-redux';
import IndexPageContent from '../components/index/IndexPageContent';
import { getAllTopic } from "../actions/index";
import { getTopicLists } from "../reducers/topic" ;
const mapStateToProps = (state)=>({
   data: getTopicLists(state)
})
const mapDispatchToProps = (dispatch)=>({
    // test: dispatch({type:"test"}),
    receiveAllTopic : (value)=>getAllTopic(value)(dispatch)
})
const IndexPContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPageContent)

export default IndexPContainer;