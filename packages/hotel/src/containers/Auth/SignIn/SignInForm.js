import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { AuthContext } from 'context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from 'settings/constant';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';

export default function SignInForm() {
  const { signIn, loggedIn } = useContext(AuthContext);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
   
    try{
    
     const data = await fetch(
       'https://run.mocky.io/v3/ed88a801-bfdf-454e-b292-be4606ce6132',
     );
     const ans = await data.json();
    //  console.log("ans",ans.status);
     if(ans.status==="success"){
        signIn(data);
     }

    }
    catch(e){
      console.log(e)
    }
 
  };
  
  // if (loggedIn) {
  //   return <Navigate to="/" replace={true} />;
  // }

  if (loggedIn) {
    return <Navigate to="/property" replace={true} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormControl
        label="Phone No."
        htmlFor="Phone No."
        error={
          errors.email && (
            <>
              {errors.email?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span>Please enter a valid email address!</span>
              )}
            </>
          )
        }
      >
        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </FormControl> */}
      <FormControl
        label="Phone Number"
        htmlFor="Phone Number"
        error={
          errors.Phone && (
            <>
              {errors.Phone?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {/* {errors.Phone?.type === 'minLength' && (
                <span>Phone Number must be of 10 digits!</span>
              )} */}
              {/* {errors.Phone?.type === 'maxLength' && (
                <span>Password must not be longer than 20 characters!</span>
              )} */}
               {errors.Phone?.type === 'pattern' && (
                <span>Please enter a valid phone number!</span>
              )}
            </>
          )
        }
      >
        <Controller
          name="Phone"
          defaultValue="+91"
          control={control}
          rules={{
             required: true,
              // minLength: 10,
              //  maxLength: 20,
            pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,

              }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            control={control}
            name="rememberMe"
            valueName="checked"
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Switch onChange={onChange} checked={value} />
            )}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <Link to={FORGET_PASSWORD_PAGE}>Forget Password ?</Link>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
      >
        <MdLockOpen />
        Login/Continue
      </Button>
    </form>
  );
}
