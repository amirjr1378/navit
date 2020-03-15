import React from "react";

export default React.forwardRef(function(
  { text, as: Component = <input />, onSuccess, onCancle, ...props },
  ref
) {
  const [editMode, setEditMode] = React.useState(false);
  const [input, setInput] = React.useState(text);
  const toggle = setEditMode(state => !state);

  function EditView() {
    const inputProps = {
      onChange: e => {
        setInput(e.target.value);
      }
    };
    const handleSubmit = function(e) {
      e.preventDefault();
      onSuccess(input);
      toggle();
    };
    const handleCancel = function(e) {
      console.log("cancel");
      setInput(text);
      toggle();
    };
    return (
      <form onSubmit={handleSubmit}>
        <Component
          {...inputProps}
          ref={ref}
          defaultValue={text}
          value={input}
        />
        <button type="submit">change</button>
        <button onClick={handleCancel}>cancel</button>
      </form>
    );
  }
  function NormalView() {
    return (
      <div {...props} onClick={toggle}>
        {text}
      </div>
    );
  }
  return editMode ? <EditView /> : <NormalView />;
});
