import Loader from "react-loader-spinner";

function ThreeDots({typeLoading}){

    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
         >
           <Loader type={typeLoading} color="#00BFFF" height={80} width={80} />
         </div>
    )
}

export default ThreeDots;