import CloudinaryEffect from '@/components/cloudinarycomponents/CloudinaryEffect'
import React from 'react'

const EditPage = async({params}:{params:Promise<{id:string}>}) => {
  const {id} = (await params)
  return (
    <>
    <CloudinaryEffect id={id}/>
    </>
  )
}

export default EditPage