import 'reflect-metadata'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { configure } from 'mobx'
import { InjectionProvider } from './Common/Providers/Injection'
import container from './AppIoc'
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
    <InjectionProvider container={container}>
      <App />
    </InjectionProvider>
  </StrictMode>
)
