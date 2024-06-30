import { Auth } from '@/components/auth'
import { GetStaticProps } from 'next'

const Reset = () => {
    return (
        <Auth type='reset'/>
    )
}

export default Reset


export const getStaticProps = (async (context) => {
    return {
        props: {
            messages: (await import(`../../messages/${context.locale}.json`)).default,
        },
    };
}) satisfies GetStaticProps;
