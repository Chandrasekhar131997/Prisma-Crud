/*
  Warnings:

  - Changed the type of `pepoleHubId` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "pepoleHubId",
ADD COLUMN     "pepoleHubId" INTEGER NOT NULL;
