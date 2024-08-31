import { useEffect } from 'react'
import { ButtonProps } from './interface'

const button = (props: ButtonProps) => {
  const { test } = props

  useEffect(() => {
    console.log(test)
  }, [test])

  return (
    <>
      <div>{test}</div>
    </>
  )
}

export default button
