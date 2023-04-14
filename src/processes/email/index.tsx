import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useBehavior } from 'shared/lib';
import { Button, Input, Typography } from 'shared/ui';
import Policy from 'widgets/policy/Policy';

import { emailBehaviors } from './index.behavior';
import styles from './styles.module.scss';

interface FormData {
  email: string;
}

const Email = () => {
  const { setUserEmail } = useBehavior(emailBehaviors);
  const { control, handleSubmit, formState } = useForm<FormData>();
  const methods = useForm();
  const onSubmit = (data: FormData) => {
    setUserEmail(data);
  };

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>
            <Input
              control={control}
              name="email"
              label={'Enter your email to see how you can grow with Nebula'}
              placeholder="Your email"
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
      </FormProvider>
    </div>
  );
};
export default Email;
