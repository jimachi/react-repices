import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z
    .string()
    .email({message: 'メールアドレス形式ではありません。'})
    .min(1, { message: '1文字以上入力する必要があります。' }),
  password: z.string().min(8),
})

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
    resolver: zodResolver(schema)
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
            {...register('email', {
              required: true,
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>{getValues('email')}</div>
        <div>{watch('email')}</div>
        <button type="submit" disabled={!dirtyFields.email || !dirtyFields.password}>ログイン</button>
      </form>
    </>
  )
}

export default ReactHookForm;
