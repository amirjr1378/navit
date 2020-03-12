import React from 'react';
import {Input} from '../../components/Form';
import {Button} from '../../components/Button';
import Timer from '../../components/Timer';
import {Link} from 'react-router-dom';
import {useForm,useTimer} from '../../hooks';
import {ajax} from '../../helpers';
import {withRouter} from 'react-router-dom';
import EditNumber from '../../components/EditNumber';


const EnterVerifyCode = function({increase, match}) {
  const initialValue = React.useMemo(() => ({
    phone: match.params.phone,
    verifyCode: ''
  }), []);

  const {timer} = useTimer(120);


  const increaseStep = async function() {
      await ajax.mock('posts', {phone: form.phone}, {'content-type': 'json'})
      increase(form);
  }
  const validateCallback = function(values) {
    const e = {}
    if(values.verifyCode.trim() === "") e.verifyCode = 'enter verify code'
    return e;
  }
  const {form, submitting, handleSubmit, bind} = useForm(increaseStep, validateCallback, initialValue);
  React.useEffect(() => {
    // we should request for send message to phone number
    if(!form.phone) return;
    ajax.mock('posts', {phone: form.phone}, {'content-type': 'json'})
  }, [form.phone])


  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/verify-code.png"
        srcSet="/static/img/verify-code.png,
        /static/img/verify-code@2x.png 2x,
        /static/img/verify-code@3x.png 3x"
        alt="verify-code"
        />
      <EditNumber phone={form.phone} label='ارسال کد تایید به شماره' style={{marginBottom: 20}}/>
      <Input
        {...bind("verifyCode")}
        label="کد تاییدیه ارسال را وارد کنید"
        />
      <Button type="submit" loading={submitting} color="warning" style={{marginTop: 30}}>بررسی شماره تلفن همراه شما</Button>

      <span className="display--flex justify-content--center align-items--center" style={{marginTop: 30, flexWrap: 'nowrap'}}>
        <strong>ارسال مجدد کد تاییدیه بعد از</strong>
        <Timer timer={timer} />
      </span>

    </form>
  )
}
export default withRouter(EnterVerifyCode);
