/*
  Warnings:

  - You are about to drop the column `fisrtName` on the `user` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "fisrtName",
ADD COLUMN     "firstName" VARCHAR(50) NOT NULL;
