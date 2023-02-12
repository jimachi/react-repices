import React, { FormEvent, useRef, useState } from 'react'

const BasicForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // refを使うと再レンダリングが行われない
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            // ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            // ref={passwordRef}
          />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </>
  )
}

export default BasicForm;
