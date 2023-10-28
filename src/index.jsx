import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { configure } from 'mobx'
import { InjectionProvider } from './Common/Providers/Injection'
import { getRoot } from './CompositionRoot'
import App from './App'

configure({
  enforceActions: 'observed',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InjectionProvider root={getRoot()}>
      <App />
    </InjectionProvider>
  </StrictMode>
)
