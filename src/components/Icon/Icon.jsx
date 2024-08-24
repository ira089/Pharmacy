import sprite from "../../assets/svg/symbol-defs.svg"

const Icon = ({ width, height, fillColor, strokeColor, name, className={}}) => {

  return (
    
 <svg className={className}  width={width} height={height} fill={fillColor} stroke={strokeColor}>
        <use href={`${sprite}#${name}`} />
     </svg>
  )
}

export default Icon