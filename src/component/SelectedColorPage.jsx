import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import pallete from "../pallete.json"
import { CopyToClipboard } from "react-copy-to-clipboard"
import MP3 from "../src_notify.mp3"

export default function ColorPage(props) {

    const { paletteName="string" } = props
    const currPalette = pallete.find((palette) => palette.paletteName === paletteName);
    const colors = currPalette.colors;

    const [copyBlock, setcopyBlock] = useState(new Set());
    const [hoverBlock, sethoverBlock] = useState(null);
    const [baseColor, setbaseColor] = useState(null);

    const CopiedColor = (color) => {
        setcopyBlock(new Set([color]));
        setbaseColor(color);
        playSound();
    }
    
    useEffect(() => {
        if (baseColor) {
            const timer = setTimeout(() => {
                setbaseColor(null);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [baseColor]);

    const playSound = () =>{
        const sound = new Audio(MP3);
        sound.play();
    }

    return (
        <div className="relative">
            <header className="color-black pl-[10px] pb-[5px] pt-[8px] h-[50px] text-[20px] [text-shadow:0_1px,_1px_0,_1px_1px]">
                <NavLink to="/"> ⬅ Back </NavLink>
            </header>

            <div className="grid grid-cols-5 grid-rows-4 w-full h-[800px]">
                {colors.map((color, index) => (
                    <CopyToClipboard key={index} text={color.color} onCopy={() => CopiedColor(color)}>
                        <div className="cursor-pointer relative" style={{ background: color.color }} onMouseEnter={() => sethoverBlock(color.color)} onMouseLeave={() => sethoverBlock(null)} onClick={() => setclickBlock(color.color)}>
                            {hoverBlock === color.color && !copyBlock.has(color.color) && (
                                <div className="absolute w-[100px] h-[40px] flex rounded-[5px] border-[2px] border-[hsla(0,0%,100%,.2)] text-white text-[20px] justify-center items-center inset-0 left-2/4 top-2/4 -ml-[50px] -mt-[22.5px]">
                                    COPY
                                </div>
                            )}
                            <span className="absolute bottom-[8px] text-[#fff] opacity-[.9] uppercase right-[8px]">{color.name}</span>
                        </div>
                    </CopyToClipboard>
                ))}
            </div>

            {baseColor && (
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                    <div style={{ background: baseColor.color }} className="w-full h-full flex flex-col justify-center items-center">
                        <div className="text-5xl mb-2">Got It!</div>
                        <div className="text-2x1 mb-2">{baseColor.name}</div>
                        <div className="text-2x1">{baseColor.color}</div>
                    </div>
                </div>
            )}

            <footer className="text-right text-[20px] pr-[16px] pt-[15px] [text-shadow:0_1px,_1px_0,_1px_1px]">{currPalette.paletteName}</footer>
        </div>
    )
}
