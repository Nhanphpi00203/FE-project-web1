import { Tintuc1, Tintuc2 } from '../../assets/Blog'
const NewsMoblie = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center gap-10">
        <div>
          <img src={Tintuc1} alt="" />
        </div>
        <div>
          <img src={Tintuc2} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center items-center gap-10 mt-[10px]">
        <div>
          <img src={Tintuc1} alt="" />
        </div>
        <div>
          <img src={Tintuc2} alt="" />
        </div>
      </div>
    </div>
  )
}
export default NewsMoblie
