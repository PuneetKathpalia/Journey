// import "./globals.css";
// import { ThemeProvider } from "next-themes";

// import { TooltipProvider } from "@/components/ui/tooltip";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//   <body className="antialiased">
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="dark"
//       enableSystem
//       disableTransitionOnChange
//     >
//       {children}
//     </ThemeProvider>
//   </body>
// </html>
//   );
// }
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
           <TooltipProvider delayDuration={100}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}