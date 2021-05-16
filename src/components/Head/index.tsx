import React from 'react'

interface HeadProps {
  title: string;
  description: string;
}
const Head: React.FC<HeadProps> = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"')?.setAttribute('content', description);
  })
  return (
    <></>
  )
}

export default Head
