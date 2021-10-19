import React from 'react'
import { appStore } from './redux/store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import App from './App'

test('renders correctly', () => {
    const tree = render(
        <Provider store={appStore}>
            <App />
        </Provider>
    )

    expect().toMatchSnapshot()
})
