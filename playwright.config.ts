import { defineConfig, devices } from "@playwright/test";

const port = 3100;

// Tests de accesibilidad contra el build de producción (`npm run build` antes).
// En local se puede usar el navegador instalado: PW_CHANNEL=msedge npm run test:a11y
export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    channel: process.env.PW_CHANNEL,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `npm run start -- -p ${port}`,
    url: `http://localhost:${port}/en`,
    reuseExistingServer: !process.env.CI,
  },
});
