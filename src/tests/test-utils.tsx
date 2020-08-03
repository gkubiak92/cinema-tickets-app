import React, { ReactNode } from 'react'
import { AnyAction, Action, Store } from 'redux'
import { Provider } from 'react-redux'
import { render as rtlRender, RenderResult } from '@testing-library/react'
import { store as initialStore } from 'redux/store';


interface RenderWithRedux<S = any, A extends Action = AnyAction> {
    (ui: ReactNode, store?: Store<S, A>): RenderResult & {
        store: Store<S, A>
    }
}

const render: RenderWithRedux = (ui, store = initialStore) => ({
    ...rtlRender(
        <Provider store={store} >{ui}</Provider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
})

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }