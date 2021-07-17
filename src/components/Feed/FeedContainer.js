import { connect } from "react-redux";
import Feed from "./Feed";

const mapStateToProps = (state) => {
  return{
    stories: state.news.stories,
    posts: state.news.posts
  }
}

export default connect(mapStateToProps,{})(Feed)