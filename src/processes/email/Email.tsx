import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input, Typography } from 'shared/ui';
import Policy from 'widgets/policy/Policy';

import styles from './styles.module.scss';

interface FormData {
  email: string;
}

const Email = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  //TODO: This component will be finished in TASK-5-fix-input-logic

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>
          <Input
            name="email"
            label={'Enter your email to see how you can grow with Nebula'}
            placeholder="Your email"
            type="email"
            ref={register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>
        <div className={styles.text}>
          <Typography
            title="*Nebula does not share any personal information. We'll email you a copy of your program for convenient access."
            className={styles.text}
          />
          <Policy />
        </div>
        <Button title="Continue" fill="secondary" type="submit" />
      </form>
    </div>
  );
};
export default Email;
