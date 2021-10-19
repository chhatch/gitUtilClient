import React from 'react'
import { render } from '@testing-library/react'
import { Component } from '../components/repoInfoFetcher'

test('renders correctly with no data passed', () => {
    const props = { error: '', openPRs: [] }
    const tree = render(<Component {...props} />)

    expect().toMatchSnapshot()
})

test('renders correctly with open PRs passed', () => {
    const props = {
        error: '',
        openPRs: [{ numberOfCommits: 1, title: 'test' }],
        url: 'test.com',
    }
    const tree = render(<Component {...props} />)

    expect().toMatchSnapshot()
})

test('renders correctly when error passed', () => {
    const props = {
        error: 'test error',
        openPRs: [],
        url: '',
    }
    const tree = render(<Component {...props} />)

    expect().toMatchSnapshot()
})
