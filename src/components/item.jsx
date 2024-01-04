import React from 'react' 

const item = ({Links,title}) => {
  return (
    <div >
       <ul>
      <h1 className="mb-1 text-[#AE8461] font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-slate-300 hover:text-[#AE8461] duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default item