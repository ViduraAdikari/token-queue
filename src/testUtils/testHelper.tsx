import React from 'react';

type EditBlogRealProviderProps = {
  children: React.ReactNode
}

const TokenQueueMockProvider: React.FC<EditBlogRealProviderProps> = ({children}: EditBlogRealProviderProps) => {

  // wrap fragment with the real provider if it uses a context.
  return (
      <React.Fragment>
        {children}
      </React.Fragment>
  )
}

export {TokenQueueMockProvider}