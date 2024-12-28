type Props ={
    count:number ,
    setCount:React.Dispatch<React.SetStateAction<number>>
    sum :()=>string
};
// type ApiRes<dataType,message>={
    type ApiRes<dataType>={
    data:dataType,
    status:"thanhcong"|"thatbai",
    // message:message
}
export const Count =({count,setCount}:Props)=>{
    const userResponse:ApiRes<{name:String,id:number}>={
        data:{name:"duy  2",id:15},
        status:"thanhcong"
    }
    const bookResponse:ApiRes<{bookname:String,id:number}>={
        data:{bookname:"nguoi phan xet",id:123},
        status:"thanhcong"
    }
    return(
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      )
}