import { useForm } from "react-hook-form";

function ModalForm({ showModal, setShowModal }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register} />
            <input name="age" ref={register} />
            <select name="gender" ref={register}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setShowModal(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default ModalForm;
