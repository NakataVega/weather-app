import React from 'react'
import ErrorBundary from './ErrorBoundary'

export default{
  title: "ErrorBundary",
  component: ErrorBundary
}

const ComponentWithoutError = () => <h1>Sin error</h1>

const prop = undefined

const ComponentWithError = () => <h1>{prop.test}</h1>

export const ErrorBoundaryWithError = () => (
  <ErrorBundary>
    <ComponentWithError />
  </ErrorBundary>
)

export const ErrorBoundaryWithoutError = () => (
  <ErrorBundary>
    <ComponentWithoutError />
  </ErrorBundary>
)