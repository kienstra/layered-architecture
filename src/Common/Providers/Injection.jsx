import React, { useContext } from 'react'

const RootContext = React.createContext({ container: null })

function toLowerCase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1)
}

export function useInjection(identifiers) {
  const { root } = useContext(RootContext)
  if (!root) {
    throw new Error('useInjection() called outside of <InjectionProvider>')
  }

  return Object.entries(identifiers).reduce(
    (accumulator, [identifier, ]) => {
      return {
        ...accumulator,
        [identifier]: root[identifier]
      }
    },
    {}
  )
}

export const InjectionProvider = (props) => {
  return <RootContext.Provider value={{ root: props.root }}>{props.children}</RootContext.Provider>
}
