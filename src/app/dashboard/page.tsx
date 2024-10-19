import React from 'react'
import TransitionLink from '../components/link/transitionLink'

type Props = {}

function page({ }: Props) {
    return (
        <>
            <div> this is the dashboard page</div>
            <TransitionLink href='/' label='go back' />
        </>
    )
}

export default page