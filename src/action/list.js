const baseUrl="http://localhost:3004/commentlist";

export function FetchDataList() {
  return (dispatch) => {
    dispatch(datafetchbegin());
    return fetch(baseUrl, {
      method: "get",
    })
      .then((result) => result.json())
      .then((data) => {
        console.log("api res", data);
        dispatch(datafetchSuccess(data));
      });
  };
}

export const datafetchbegin = () => ({
  type: "FETCH_BEEGIN",
});

export const datafetchSuccess = (data) => ({
  type: "DATA_FETCH",
  payload: data,
});

export function AddCommentInList(mycomment) {
  console.log("adddata", mycomment);

  return (dispatch) => {
    return fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(mycomment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log("api add data res", data);
        dispatch(FetchDataList());
      });
  };
}

export function UpdateLikeOrDisLike(count, commentId) {
  return (dispatch) => {
    return fetch(baseUrl+"/" + commentId, {
      method: "PATCH",
      body: JSON.stringify(count),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log("api add data res", data);
        dispatch(FetchDataList());
      });
  };
}
