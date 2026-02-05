const RangeForm = ({ handleRangeChange, items, disabled }) => {
  return (
    <form className={`p-1.5 w-fit border-greendark rounded-3xl inline-flex items-center gap-1.5 font-black bg-greenlight transition-opacity duration-200 ${disabled && 'opacity-60'}`} >
      {
        items.map((item, index) => (
          <label key={index} className={`transition-opacity duration-200 ${disabled ? 'pointer-events-none' : 'cursor-pointer'} flex items-center`} >
            <input 
              type='radio' 
              onChange={handleRangeChange} 
              id={index} 
              name='dateRange' 
              value={item.value} 
              className='peer hidden' 
              defaultChecked={index === 0}
            />
            <span className='peer-checked:bg-greenmedium p-2 rounded-3xl leading-tight'>
              {item.text}
            </span>
          </label>
        ))
      }
    </form>
  )
}

export default RangeForm;