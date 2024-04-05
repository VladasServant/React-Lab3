import { Component, useState } from 'react'
import Palettes from './component/Palettes.jsx'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <div className='bg-[#3c40c6] bg-[url(https://flatuicolors.com/static/img/stars-opacity.0979c1.svg)] flex flex-col items-center w-screen h-screen'>
      <div className='block w-[1024px] text-left relative h-[75px] box-border mb-[15px]'>
        <div className='!w-full flex content-center justify-center float-left h-[105px]'>
          <a className="absolute text-[24px] text-[#fff] left-[2px] bottom-[5px] tracking-[2.5px] font-semibold [text-shadow:0_1px,_1px_0,_1px_1px] [transition:all_.2s] origin-[0_50%]">
            FLAT UI COLORS 2
          </a>
          <div className='absolute right-[0] bottom-[5px] mr-[2px] font-[bolder] tracking-[1px]'>
            <a className='ml-[40px] font-semibold text-[17px] text-[#fff] inline-block [transition:all_.2s] relative'>
              Designer Inspiration
            </a>
            <a className='ml-[40px] font-semibold text-[17px] text-[#fff] inline-block [transition:all_.2s] relative'>
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 grid-rows-3 gap-20 justify-center items-center'>
        <NavLink to="/Material-UI-Colors"><Palettes paletteName="Material UI Colors"/></NavLink>
        <NavLink to="/Flat-UI-Colors-v1"><Palettes paletteName="Flat UI Colors v1"/></NavLink>
        <NavLink to="/Flat-UI-Colors-Dutch"><Palettes paletteName="Flat UI Colors Dutch"/></NavLink>
        <NavLink to="/Flat-UI-Colors-American"><Palettes paletteName="Flat UI Colors American"/></NavLink>
        <NavLink to="/Flat-UI-Colors-Aussie"><Palettes paletteName="Flat UI Colors Aussie"/></NavLink>
        <NavLink to="/Flat-UI-Colors-British"><Palettes paletteName="Flat UI Colors British"/></NavLink>
        <NavLink to="/Flat-UI-Colors-Spanish"><Palettes paletteName="Flat UI Colors Spanish"/></NavLink>
        <NavLink to="/Flat-UI-Colors-Indian"><Palettes paletteName="Flat UI Colors Indian"/></NavLink>
        <NavLink to="/Flat-UI-Colors-French"><Palettes paletteName="Flat UI Colors French"/></NavLink>
      </div>
    </div>
  )
}

export default App