/*
  Warnings:

  - You are about to drop the column `modelCar` on the `car` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `car` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "car_modelCar_key";

-- AlterTable
ALTER TABLE "car" DROP COLUMN "modelCar",
ADD COLUMN     "category" VARCHAR(50) NOT NULL,
ADD COLUMN     "link" VARCHAR(250) NOT NULL,
ADD COLUMN     "text" VARCHAR(250) NOT NULL,
ADD COLUMN     "type" VARCHAR(25) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "car_category_key" ON "car"("category");
