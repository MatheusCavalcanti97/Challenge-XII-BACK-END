-- CreateTable
CREATE TABLE "car" (
    "idCar" TEXT NOT NULL,
    "modelCar" TEXT NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("idCar")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fisrtName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "country" VARCHAR(30) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "referralCode" VARCHAR(8) NOT NULL,
    "ownCar" BOOLEAN NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "car_modelCar_key" ON "car"("modelCar");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_carId_key" ON "user"("carId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("idCar") ON DELETE RESTRICT ON UPDATE CASCADE;
