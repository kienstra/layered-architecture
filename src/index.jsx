import 'reflect-metadata'
import React from 'react'
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
  <React.StrictMode>
    <InjectionProvider container={container}>
      <App />
    </InjectionProvider>
  </React.StrictMode>
)
