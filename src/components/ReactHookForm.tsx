import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    getValues,
    watch,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data) => console.log(data);

  // RHFのregisterでやっていること
  const { name, ref, onChange, onBlur } = register('email');

  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: "入力が必須の項目です",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください。',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください。'
              }
            })}
          />
          {errors.password?.type === 'required' && (
            <div>入力が必須の項目です。</div>
          )}
          {errors.password?.type === 'minLength' && (
            <div>8文字以上入力してください。</div>
          )}
        </div>
        <div>{getValues('email')}</div>
        <div>{watch('email')}</div>
        <button type="submit" disabled={!dirtyFields.email || !dirtyFields.password}>ログイン</button>
      </form>
    </>
  )
}

export default ReactHookForm;
