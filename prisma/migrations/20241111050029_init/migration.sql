-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "fullname" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "phoneNumber" INTEGER,
    "googleId" INTEGER,
    "facebookId" INTEGER,
    "lineId" INTEGER,
    "birthDate" TIMESTAMP(3),
    "gen" TEXT,
    "profileImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
