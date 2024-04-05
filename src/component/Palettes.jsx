import React from 'react'
import pallete from "../pallete.json"

export default function Palettes(props) {

    const { paletteName="string" } = props
    const currPalette = pallete.find((palette) => palette.paletteName === paletteName);
    const colors = currPalette.colors;

    return(
        <div className="bg-[white] mb-[10px] py-[10px] px-[10px] h-[200px] w-[320px] rounded-md">
            <div className="grid grid-cols-5 grid-rows-4 w-full h-[140px]">
                {colors.map((color, index) => (
                    <div key={index} className="w-full h-full" style={{ backgroundColor: color.color }}/>
                ))}
            </div>
                <a className='text-[#000] text-[15px] font-semibold h-[40px] leading-[40px] float-left w-full text-left [text-indent:2px] tracking-[.55px]'>
                    {currPalette.paletteName}
                    <span aria-label='palette' className='float-right inline-block mr-[4px] text-[20px]'>{currPalette.emoji}</span>
                </a> 
        </div>
    )
}