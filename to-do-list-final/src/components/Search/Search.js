import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import axiosClient from "../../api/axiosClient";

function Search({ showModal, setShowModal }) {
  const { register, handleSubmit } = useForm();

  const location = useLocation();

  const [toDo, setToDo] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = process.env.REACT_APP_BASE_URL;
  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const onHandleSearch = async (data, e) => {
    e.preventDefault();
    try {
      const payload = data.nameTodo;
      const searchTodoURL = `${url}/search/${payload}`;
      const response = await axiosClient.get(searchTodoURL, config);
      setLoading(true);
      console.log(searchTodoURL);
      console.log(response);
      setToDo([...response.data]);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div>
      {showModal && (
        <form
          onSubmit={handleSubmit(onHandleSearch)}
          style={{ padding: "50px" }}
        >
          <label>Search todo</label>
          <div className="text__field-container">
            <div className="text__field-container-wrap">
              <div>
                <input
                  class="text__field"
                  // defaultValue={selectedItem.name}
                  name="nameTodo"
                  {...register("nameTodo", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
          {/* {errorsTodo?.nameToDo?.type === "required" && (
            <span className="form__error">This field is required</span>
          )} */}
          <label>Found todo:</label>
          <div>
            <div className="text__editor__container">
              <div
                className="text__editor__wrap"
                style={{ display: "flex", flexDirection: "column" }}
              >
                {(loading || toDo) &&
                  toDo.map((item, index) => {
                    return (
                      <div
                        style={{
                          width: "100%",
                          height: "30px",
                          color: "green",
                        }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="todo_actions_update">
            <button type="submit" className="button-3">
              Search
            </button>
            {/* <button className="button-1" onClick={() => setShowModal(false)}>
              Cancel
            </button> */}
          </div>
        </form>
      )}
    </div>
  );
}

export default Search;
