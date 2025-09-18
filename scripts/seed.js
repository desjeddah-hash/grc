const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/User").default || require("../models/User");
const Organization = require("../models/Organization").default || require("../models/Organization");
const Framework = require("../models/Framework").default || require("../models/Framework");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/siyeb";

(async () => {
  await mongoose.connect(uri);
  const org = await Organization.create({ name: "Resilience" });
  const admin = await User.create({
    email: "admin@example.com",
    name: "Admin",
    passwordHash: await bcrypt.hash("admin123", 10),
    role: "admin",
    orgId: org._id
  });
  await Framework.create({
    name: "Sample Framework",
    version: "1.0",
    controls: [{ key: "AC-1", title: "Access Control Policy", description: "Define and document ACP." }]
  });
  console.log("Seeded:", { org: org.name, admin: admin.email });
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
