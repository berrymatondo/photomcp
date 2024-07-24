-- CreateTable
CREATE TABLE "activites" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembersOnActivites" (
    "memberId" INTEGER NOT NULL,
    "activiteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MembersOnActivites_pkey" PRIMARY KEY ("memberId","activiteId")
);

-- AddForeignKey
ALTER TABLE "MembersOnActivites" ADD CONSTRAINT "MembersOnActivites_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembersOnActivites" ADD CONSTRAINT "MembersOnActivites_activiteId_fkey" FOREIGN KEY ("activiteId") REFERENCES "activites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
