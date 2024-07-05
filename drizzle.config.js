/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:8nZSVKCxH2fN@ep-late-flower-a53q2nds.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require'
    }
  };
  