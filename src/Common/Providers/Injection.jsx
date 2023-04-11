import React, { useContext } from 'react'

const InversifyContext = React.createContext({ container: null })

function toLowerCase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1)
}

export function useInjection(...identifiers) {
  const { container } = useContext(InversifyContext)
  if (!container) {
    throw new Error()
  }

  return identifiers.reduce((accumulator, identifier) => {
    return {
      ...accumulator,
      [toLowerCase(identifier.name)]: container.get(identifier)
    }
  }, {})
}

export const InjectionProvider = (props) => {
  return <InversifyContext.Provider value={{ container: props.container }}>{props.children}</InversifyContext.Provider>
}
