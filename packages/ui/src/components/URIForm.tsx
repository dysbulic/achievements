import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export const URIForm: React.FC<{
  register: UseFormRegister<FieldValues>
}> = ({ register }) => {
  return (
    <input
      placeholder="Enter a URI for the token…"
      {...register('uri')}
    />
  )
}
