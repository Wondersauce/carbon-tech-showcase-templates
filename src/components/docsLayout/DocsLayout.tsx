"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  Content,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SideNav,
  HeaderMenuButton,
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
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const onClickSideNavExpand = () => {
    setIsSideNavExpanded((prev) => !prev);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Theme theme="white">
      <Header aria-label="IBM Platform Name">
        <SkipToContent />
        <HeaderMenuButton
          aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
          aria-expanded={isSideNavExpanded}
        />
        <HeaderName href="#" prefix="IBM">
          <div className="hidden lg:block">Carbon Showcase Samples</div>
        </HeaderName>
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
        {isMounted && (
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            tabIndex={-1}
          >
            <SideNavItems>
              {menuItems.map((item) => {
                if (item.items) {
                  return (
                    <SideNavMenu
                      key={item.href}
                      title={item.label}
                      defaultExpanded
                    >
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
        )}
      </Header>

      <Content
        id="main-content"
        aria-hidden="false"
        className="overflow-hidden"
      >
        <Grid>
          <Column
            sm={4}
            md={8}
            lg={{ span: 12, offset: 4 }}
            xlg={{ span: 13, offset: 3 }}
            className="prose max-w-full"
          >
            {children}
          </Column>
        </Grid>
      </Content>
    </Theme>
  );
}
