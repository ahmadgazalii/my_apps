export default function GiveName({ params, searchParams }: {
    params: { name: string },
    searchParams: { id: string },
  }) {
    
      return (
       
        <div style={{backgroundColor:'orange'}}>
              My name is {params.name}.
        </div>
      )
    }