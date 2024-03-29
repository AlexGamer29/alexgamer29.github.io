import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import axiosClient from "../../api/axiosClient";

function ModalForm({ showModal, setShowModal }) {
  const { register, handleSubmit } = useForm();
  const location = useLocation();

  const url = process.env.REACT_APP_BASE_URL;
  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    setShowModal(false);
  };

  const onHandleCreateTask = async (data, e) => {
    e.preventDefault();
    try {
      const payload = {
        name: data.nameTask,
        description: data.descriptionTask,
      };
      const createTaskURL = `${url}/task_lists/`;
      const response = await axiosClient.post(createTaskURL, payload, config);
      console.log(response);
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div>
      {showModal && (
        <form
          onSubmit={handleSubmit(onHandleCreateTask)}
          style={{ padding: "50px" }}
        >
          <label>Task name:</label>
          <div className="text__field-container">
            <div className="text__field-container-wrap">
              <div>
                <input
                  class="text__field"
                  // defaultValue={selectedItem.name}
                  name="nameTask"
                  {...register("nameTask", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
          {/* {errorsTodo?.nameToDo?.type === "required" && (
            <span className="form__error">This field is required</span>
          )} */}
          <label>Description:</label>
          <div>
            <div className="text__editor__container">
              <div className="text__editor__wrap">
                <textarea
                  id="notes"
                  cols="50"
                  rows="2"
                  name="descriptionTask"
                  {...register("descriptionTask")}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="todo_actions_update">
            <button type="submit" className="button-3">
              Add
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

export default ModalForm;
