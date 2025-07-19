import { Home, ShoppingCart, Settings, LogOut, ChevronsLeft, ChevronsRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Link, NavLink } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Marketplace",
    url: "/dashboard/marketplace",
    icon: ShoppingCart,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "/logout",
    icon: LogOut,
  },
]

// Custom toggle button component
function CustomSidebarToggle() {
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className={`p-2 hover:bg-sidebar-accent ${isCollapsed ? '' : 'ml-auto'}`}
    >
      {isCollapsed ? (
        <ChevronsRight style={{ width: '30px', height: '30px' }} />
      ) : (
        <ChevronsLeft style={{ width: '30px', height: '30px' }} />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex bg-bg flex-row items-center justify-between">
        <CustomSidebarToggle />
      </SidebarHeader>
      <SidebarContent className={'bg-bg'}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}