//dynamic routing using [...slug] and [[...slug]]

const Docs = (
  { params, 

  }: { 
    params: { slug: string[] } 
  }) => {
  if(params.slug?.length === 2) {
    return <h1>Viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
  } else if (params.slug?.length === 1) {
    return <h1>Viewing Docs for feature {params.slug[0]}</h1>
  }
  return (
    <div>
      <h1>Docs Catch-All Slug</h1>
    </div>
  )
}

export default Docs;
