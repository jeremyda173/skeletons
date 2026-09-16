// External Libraries
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: ${props => props.theme.cardBg};
  backdrop-filter: ${props => props.theme.glassBackdrop};
  -webkit-backdrop-filter: ${props => props.theme.glassBackdrop};
  border-right: 1px solid ${props => props.theme.cardBorder};
  padding: 32px 20px;
  overflow-y: auto;
  z-index: 100;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  }
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 32px 0;
  background: linear-gradient(135deg, ${props => props.theme.accentPrimary} 0%, ${props => props.theme.accentSecondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Category = styled.div`
  margin-bottom: 24px;
`;

const CategoryTitle = styled.h3`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.text};
  opacity: 0.5;
  font-weight: 700;
  margin: 0 0 12px 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 4px;
`;

const NavButton = styled.button`
  width: 100%;
  text-align: left;
  background: ${props => props.active ? `${props.theme.accentPrimary}1a` : 'transparent'};
  color: ${props => props.active ? props.theme.accentPrimary : props.theme.text};
  font-weight: ${props => props.active ? '600' : '400'};
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid ${props => props.active ? props.theme.accentPrimary : 'transparent'};

  &:hover {
    background: ${props => props.theme.accentPrimary}1a;
    color: ${props => props.theme.accentPrimary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  background: transparent;
  border: none;
  color: ${props => props.theme.text};
  font-size: 24px;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen, language }) {
  const menuES = [
    {
      category: "Empezando",
      items: [
        { id: "getting-started", label: "Instalación y Uso" }
      ]
    },
    {
      category: "Componentes Básicos",
      items: [
        { id: "text", label: "Texto" },
        { id: "avatar", label: "Avatar" },
        { id: "image", label: "Imagen" },
        { id: "button", label: "Botones" }
      ]
    },
    {
      category: "Componentes Complejos",
      items: [
        { id: "card", label: "Cards" },
        { id: "list", label: "Listas" },
        { id: "table", label: "Tablas" },
        { id: "profile", label: "Perfiles" },
        { id: "form", label: "Formularios" },
        { id: "blog", label: "Blog Posts" },
        { id: "comment", label: "Comentarios" },
        { id: "grid", label: "Grids" }
      ]
    }
  ];

  const menuEN = [
    {
      category: "Getting Started",
      items: [
        { id: "getting-started", label: "Installation & Usage" }
      ]
    },
    {
      category: "Basic Components",
      items: [
        { id: "text", label: "Text" },
        { id: "avatar", label: "Avatar" },
        { id: "image", label: "Image" },
        { id: "button", label: "Button" }
      ]
    },
    {
      category: "Complex Components",
      items: [
        { id: "card", label: "Cards" },
        { id: "list", label: "Lists" },
        { id: "table", label: "Tables" },
        { id: "profile", label: "Profiles" },
        { id: "form", label: "Forms" },
        { id: "blog", label: "Blog Posts" },
        { id: "comment", label: "Comments" },
        { id: "grid", label: "Grids" }
      ]
    }
  ];

  const menu = language === 'en' ? menuEN : menuES;

  const handleNavClick = (id) => {
    setActiveTab(id);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>&times;</CloseButton>
        <SidebarTitle>Mikens Skeletons</SidebarTitle>
        
        {menu.map((section, idx) => (
          <Category key={idx}>
            <CategoryTitle>{section.category}</CategoryTitle>
            <NavList>
              {section.items.map(item => (
                <NavItem key={item.id}>
                  <NavButton 
                    active={activeTab === item.id}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </NavButton>
                </NavItem>
              ))}
            </NavList>
          </Category>
        ))}
      </SidebarContainer>
    </>
  );
}
