-- AlterTable
ALTER TABLE `NodProduct` MODIFY `title` TEXT NOT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `fullDescription` TEXT NULL;

-- CreateTable
CREATE TABLE `AbisisProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productCode` VARCHAR(191) NOT NULL,
    `vendor` VARCHAR(191) NOT NULL,
    `productType` VARCHAR(191) NOT NULL,
    `productCategory` TEXT NOT NULL,
    `image` VARCHAR(191) NULL,
    `description` TEXT NOT NULL,
    `productCard` VARCHAR(191) NULL,
    `warrantyTerm` INTEGER NULL,
    `availability` INTEGER NULL,
    `retailPrice` DOUBLE NULL,
    `myPrice` DOUBLE NULL,
    `currencyCode` VARCHAR(191) NULL,
    `vendorId` INTEGER NULL,
    `groupId` INTEGER NULL,
    `ean` BIGINT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AbisisImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AbisisAttributeList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AbisisMarketingField` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `productId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AbisisMarketingField_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AbisisImage` ADD CONSTRAINT `AbisisImage_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `AbisisProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AbisisAttributeList` ADD CONSTRAINT `AbisisAttributeList_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `AbisisProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AbisisMarketingField` ADD CONSTRAINT `AbisisMarketingField_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `AbisisProduct`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
