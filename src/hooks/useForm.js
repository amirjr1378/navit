import { useState, } from "react";
import { toBase64 } from "../helpers";

export default (
  handleSubmitCallback,
  validateCallback,
  initialValues = {},
) => {
  const [form, setForm] = useState(initialValues); //for holding initial form data
  const [files, setFiles] = useState(initialValues); //for holding files with input type file
  const [errors, setErrors] = useState({}); //for validation errors
  const [submitting, setSubmitting] = useState(false); //set to true when first submitting the form to disable the submit button


  const setInitialTouched = function() {
    const touchedInitial = {};
    //if the initial values aren't populated than return an empty object.
    if (!form) return {};
    //create a new object using the keys of the form object setting all values to false.
    Object.keys(form).forEach(value => {
      touchedInitial[value] = false;
    });
    return touchedInitial;
  };
  const [touched, setTouched] = useState(setInitialTouched());

  const validate = (valcb = validateCallback) => {
    if (!valcb) return {};
    let e = valcb(form);
    setErrors(e);
    return e;
  };

  const handleChange = e => {
    const { name, value, type, files } = e.target; //use destructuring ot get name/value from target for ease of use
    if (type === "file") {
      if (e.target.multiple) {
        setForm(state => ({ ...state, [name]: files }));
        let array = [];
        for (let i = 0; i < e.target.files.length; i++) {
          toBase64(e.target.files[i]).then(result => {
            array = [...array, result];
            setFiles(state => ({ ...state, [name]: array }));
          });
        }
      } else {
        const file = files[0];
        setForm(state => {
          return { ...state, [name]: file };
        });

        // convert image file to base64 string
        toBase64(file).then(result =>
          setFiles(state => ({ ...state, [name]: result }))
        );
      }

      return;
    }
    setForm(state => {
      //here we use the spread operator to return the object. This puts the properties of
      //state into a new object and then adds on the newly created value.
      //since properties on the right side of a spread operation always "win", the new value will be returned with the new objecgt.
      return { ...state, [name]: value };
    });
  };

  const handleBlur = e => {
    const { name } = e.target;
    setTouched(c => {
      return { ...c, [name]: true };
    });
    //validate();
  };

  const clear = () => {
    const init = {};
    for (var i in form) {
      init[i] = "";
    }
    console.log("init", init);
    setForm(init);
  };

  const handleSubmit = async e => {
    e && e.preventDefault();
    if (!handleSubmitCallback) return;
    setSubmitting(true);
    //set all fields to touched
    const touchedTrue = {};
    Object.keys(form).forEach(value => {
      touchedTrue[value] = true;
    });
    setTouched(touchedTrue);
    const err = validate();
    if (Object.keys(err).length === 0) {
      //if there are no errors, set submitting=false and submit form.
      //I am setting submit to false before calling handleSubmitCallback because in my calling component I am performing a redirect with react-router and if I wait until
      //after I get a warning about trying to set state on an unmounted component.
      console.log("no errors.");

      await handleSubmitCallback({setSubmitting})
    } else {
      setSubmitting(false);
    }
  };

  return {
    validate,
    files,
    handleChange,
    handleBlur,
    handleSubmit,
    setForm,
    form,
    errors,
    touched,
    submitting,
    clear,
    bind: name => ({
      onChange: handleChange,
      onBlur: handleBlur,
      name,
      value: form[name],
      invalid: errors[name]
    }),
    bindFile: name => ({
      onChange: handleChange,
      name,
      invalid: errors[name]
    })
  };
};
