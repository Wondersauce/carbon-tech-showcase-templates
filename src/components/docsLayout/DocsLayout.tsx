"use client";
import {
  Content,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  Theme,
} from "@carbon/react";
import { Search, Notification, Switcher } from "@carbon/icons-react";

const menuItems = [
  { href: "/docs", label: "Installation" },
  { href: "/docs/tailwind", label: "Tailwind" },
  {
    href: "/docs/templates",
    label: "Templates",
    items: [{ href: "/docs/templates/chat", label: "Chat" }],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme theme="white">
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderName href="#" prefix="IBM">
          Carbon Showcase Samples
        </HeaderName>
        {/* <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation> */}
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            // onClick={action("search click")}
          >
            <Search size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            // onClick={action("notification click")}
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={() => {
              console.log("app-switcher click");
            }}
            tooltipAlignment="end"
          >
            <Switcher size={20} />
          </HeaderGlobalAction>

          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
        </HeaderGlobalBar>
      </Header>
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <SideNavItems>
          {menuItems.map((item) => {
            if (item.items) {
              return (
                <SideNavMenu key={item.href} title={item.label} defaultExpanded>
                  {item.items.map((subItem) => (
                    <SideNavMenuItem key={subItem.href} href={subItem.href}>
                      {subItem.label}
                    </SideNavMenuItem>
                  ))}
                </SideNavMenu>
              );
            }
            return (
              <SideNavMenuItem key={item.href} href={item.href}>
                {item.label}
              </SideNavMenuItem>
            );
          })}
        </SideNavItems>
      </SideNav>

      <Content id="main-content" className="prose !max-w-[1200px]">
        {children}
      </Content>
    </Theme>
  );
}
