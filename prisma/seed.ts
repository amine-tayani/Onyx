import prisma from '@/lib/db/prisma';

async function main() {
  prisma.user.create({
    data: {
      email: 'email@example.com',
      name: 'John Doe',
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
