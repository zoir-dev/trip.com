import { Auth } from '@/components/auth'
import { GetStaticProps } from 'next'

const Registration = () => {
    return (
        <Auth type='registration' />
    )
}

export default Registration


export const getStaticProps = (async (context) => {
    return {
        props: {
            messages: (await import(`../../messages/${context.locale}.json`)).default,
        },
    };
}) satisfies GetStaticProps;

