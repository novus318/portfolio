import React from 'react'

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
    <div className="mx-auto max-w-md space-y-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Site Under Maintenance</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        We are currently performing scheduled maintenance to improve your experience. We expect to be back online Soon.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Thank you for your patience and understanding.</p>
    </div>
  </div>
  )
}

export default Error