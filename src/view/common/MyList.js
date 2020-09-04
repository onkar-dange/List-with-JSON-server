import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {
  FetchDataList,
  AddCommentInList,
  UpdateLikeOrDisLike,
} from "../../action/list";
import MYNavigationbar from "../MYNavigationbar";

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: "",
      comment: "",
    };
    this.Updatelikes = this.Updatelikes.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(FetchDataList());
  }

  changeComment = (event) => {
    var val = event.target.value;
    this.setState({ comment: val });
  };

  addComment = (event) => {
    var comment = this.state.comment;
    var mycomment = {};
    mycomment.comment = comment;
    mycomment.likes = 0;
    mycomment.dislikes = 0;

    this.props.dispatch(AddCommentInList(mycomment));
  };

  Updatelikes(event) {
    var commentId = event.target.getAttribute("data-id");
    var type = event.target.getAttribute("data-type");
    var countLikesOrdislike = event.target.getAttribute("data-" + type);

    var udatedCount = {};

    udatedCount[type] = parseInt(countLikesOrdislike) + 1;
    this.props.dispatch(UpdateLikeOrDisLike(udatedCount, commentId));
    console.log("check", type, countLikesOrdislike, udatedCount);
  }

  render() {
    var allList = this.props.Mylist;
    console.log("allList", allList);

    if (!allList.loading) {
      var load = <h3>loading comments...</h3>;
    }

    if (allList.loading) {
      var mydata = allList.api_data;
      mydata.sort(function (a, b) {
        return parseFloat(b.likes) - parseFloat(a.likes);
      });
      console.log("mydata", mydata);
      var list = mydata.map((item) => (
        <div key={item.id} className="list">
          <div className="thumb">
            <span
              onClick={this.Updatelikes}
              className="glyphicon glyphicon-thumbs-up"
              data-likes={item.likes}
              data-id={item.id}
              data-type="likes"
              aria-hidden="true"
            > </span>
             <span>  {item.likes} </span>
          </div>
          <div className="thumb">
            <span
              className="glyphicon glyphicon-thumbs-down"
              onClick={this.Updatelikes}
              data-dislikes={item.dislikes}
              data-id={item.id}
              data-type="dislikes"
              aria-hidden="true"
            ></span>
            <span>  {item.dislikes} </span>
          </div>
          <span><b> {item.comment}</b></span>
        </div>
      ));
    }

    return (
      <div className="sec_div">
        <MYNavigationbar />

        <div className="table_sec">
          <input
            onChange={this.changeComment}
            type="text"
            value={this.state.comment}
            className="input_design form-control"
          />
          <button className="btn btn-info btn-lg" onClick={this.addComment}>
            Submit
          </button>

          {allList.loading ? <div className="">{list}</div> : load}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Mylist: state.AllComentsList,
  };
};
export default connect(mapStateToProps)(MyList);
