
export default function LoadingButton() {
    return (
     
        <div className="flex items-center gap-1 justify-center w-auto h-auto text-white">
          <div className=" text-white h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent" />
          <p >Chargement...</p>
        </div>
     
    )
  }