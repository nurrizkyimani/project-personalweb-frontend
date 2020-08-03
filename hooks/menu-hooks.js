import { useState, useEffect } from 'react';

const useMenuLink = () => { 
  const [menus, setMenus] = useState([]);

  const links = [
    {
        link: `#experience`,
        icon: `🏠`,
        info:  `Experiences`
    },
    {
        link: '#project',
        icon: `📂`,
        info: `Projects`
    },
    {
        link: '#stack',
        icon: `🛠`,
        info: `Stacks`
    },
     {
        link: '#about',
        icon: `👨‍🚀`,
        info: 'About'
    },
    
]

  useEffect(() => {
    setMenus(links)
  },[])

  return menus;
}

export default useMenuLink