import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/shared/Sidebar/Sidebar"
import Header from "@/shared/Header/Header"
import Footer from "@/shared/Footer/Footer"

export default function MasterLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SidebarProvider>
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1">
            
            <Header />
            <main className="flex-1 ">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      <div className="relative z-20">
        <Footer rounded={false} />
      </div>
    </div>
  )
}