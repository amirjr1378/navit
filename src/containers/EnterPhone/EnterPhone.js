import React from 'react';
import {Input} from '../../components/Form';
import {Button} from '../../components/Button';
import {withRouter} from 'react-router-dom';
import {useForm} from '../../hooks';
import {ajax} from '../../helpers';

const initialValue = {
  phone: ''
}

const EnterPhone = function({increase, history}) {
  const increaseStep = async function() {
    let registered = true; // we assume it is registered
    await ajax.mock('/', {phone:form.phone});
    // fetch api to see if it is registered or
    if(registered) {
      increase(form);
    }else {
      history.push('register');
    }
  }

  const validateCallback = function(values) {
    const error = {}
    if(values.phone.trim() === '') error.phone = 'enter phone'
    return error;
  }

  const {form, submitting, handleSubmit, bind} = useForm(increaseStep, validateCallback, initialValue);
  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/phone.png"
        srcSet="/static/img/phone.png,
        /static/img/phone@2x.png 2x,
        /static/img/phone@3x.png 3x"
        alt="phone"
        />
      <Input
        {...bind("phone")}
        label="شماره همراه خود را وارد نمایید"
        />
      <Button color="warning" loading={submitting} style={{marginTop: 30}} type="submit">بررسی شماره تلفن همراه شما</Button>
    </form>
  )
}

export default withRouter(EnterPhone);
