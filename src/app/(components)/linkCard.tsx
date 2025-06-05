import React from "react";

interface LinkProps {
  children: React.ReactNode 
  title: string
  link: string 
}

export default function LinkCard(props: LinkProps) {
  return(
    <a href={props.link} className="max-w-screen h-fit p-5 pl-14 pr-14 flex flex-row justify-center items-center gap-3 
      border-gray-300 dark:border-gray-800 border-1 rounded-full shadow-md shadow-indigo-400/20 
      xl:shadow-none xl:hover:shadow-md xl:hover:shadow-indigo-400/30 transition transform hover:-translate-y-1.5"
    >
      <span className="text-[var(--destak)] text-xl md:text-2xl">{props.children}</span>
      <h3 className="text-sm md:text-x">{props.title}</h3>
    </a>
  );
}
