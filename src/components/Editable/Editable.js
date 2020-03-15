import React from "react";
export const EditContext = React.createContext(null);

const Editable = function(
  { text, onSuccess, onCancel, children, ...props },
  ref
) {
  const [editMode, setEditMode] = React.useState(false);
  const toggle = () => setEditMode(state => !state);

  return (
    <EditContext.Provider
      value={{ toggle, editMode, text, onSuccess, onCancel }}
    >
      {children}
    </EditContext.Provider>
  );
};

function Toggle({ as: Component = "div", ...props }) {
  const { toggle } = React.useContext(EditContext);
  return <Component {...props} onClick={toggle} />;
}
const View = React.forwardRef(function View(
  { Input = "input", Content = "div", wrapperClassName = "", ...props },
  ref
) {
  const { editMode, toggle, text, onSuccess, onCancel } = React.useContext(
    EditContext
  );
  const [input, setInput] = React.useState(text);

  function EditView() {
    const inputProps = {
      onChange: e => {
        setInput(e.target.value);
      }
    };
    const handleSubmit = function(e) {
      e.preventDefault();
      typeof onSuccess === "function" && onSuccess(input);
      toggle();
    };
    const handleCancel = function(e) {
      console.log("cancel");
      setInput(text);
      typeof onCancel === "function" && onCancel();
      toggle();
    };
    return (
      <form onSubmit={handleSubmit} className={wrapperClassName}>
        <Input {...inputProps} ref={ref} value={input} autoFocus />
        <button type="submit">
          <span className="lnr-checkmark-circle lnr" />
        </button>
        <button onClick={handleCancel}>
          <span className="lnr-cross lnr" />
        </button>
      </form>
    );
  }
  function NormalView() {
    return <Content {...props}>{text}</Content>;
  }
  return editMode ? <EditView /> : <NormalView />;
});

Editable.Toggle = Toggle;
Editable.View = View;

export default Editable;
