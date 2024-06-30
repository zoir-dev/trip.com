import { Auth } from '@/components/auth'
import { GetStaticProps } from 'next'
import React from 'react'

const Login = () => {
  return (
    <Auth type='login' />
  )
}

export default Login


export const getStaticProps = (async (context) => {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}) satisfies GetStaticProps;
