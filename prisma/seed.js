import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Starting seeding...");
  await prisma.user.upsert({
    where: { email: "consultintuitive@gmail.com" },
    update: {},
    create: {
      email: "consultintuitive@gmail.com",
      name: "John Doe",
      image:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
  });
}

main()
  .then(() => {
    console.log("✅ Admin user seeded");
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
