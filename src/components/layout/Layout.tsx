"use client";
import {
  Content,
  Header,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  Theme,
} from "@carbon/react";

const menuItems = [
  { href: "/installation", label: "Installation" },
  { href: "/getting-started", label: "Getting Started" },
  {
    href: "/templates",
    label: "Templates",
    items: [
      { href: "/templates", label: "Introduction" },
      { href: "/templates/chat", label: "Chat" },
      { href: "/templates/ai", label: "AI" },
      { href: "/templates/controls", label: "Controls" },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme="g100">
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderName href="#" prefix="IBM">
          Carbon Showcase Samples
        </HeaderName>
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

      <Content id="main-content">{children}</Content>
    </Theme>
  );
}
