function Class7(){
    const hi=[
        {
        order_id:1,
        status:1
        },
        {
        order_id:2,
        status:2
        }
   
    ]


    return(
        <>
            {hi.map((e) => (
              
<>
             
           <p>Order_id:{e.order_id}</p>
               <p> {e.status === 1 ?"Status: 'Pending'" : "Status:'Completed'"}</p>

</>
            )
            )}

        </>
    )
}
export default Class7;



