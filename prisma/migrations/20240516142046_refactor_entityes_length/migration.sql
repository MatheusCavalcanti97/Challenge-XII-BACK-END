/*
  Warnings:

  - You are about to drop the column `type` on the `car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "car" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "referralCode" SET DATA TYPE VARCHAR(250);
