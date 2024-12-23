-- CreateTable
CREATE TABLE `NodProduct` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `ean` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `fullDescription` VARCHAR(191) NULL,
    `minimumQuantity` INTEGER NOT NULL,
    `manufacturerId` VARCHAR(191) NOT NULL,
    `manufacturerName` VARCHAR(191) NOT NULL,
    `categoryLevel1Id` INTEGER NOT NULL,
    `categoryLevel1Name` VARCHAR(191) NOT NULL,
    `categoryLevel2Id` INTEGER NOT NULL,
    `categoryLevel2Name` VARCHAR(191) NOT NULL,
    `categoryLevel3Id` INTEGER NOT NULL,
    `categoryLevel3Name` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL,
    `reservedStock` INTEGER NOT NULL,
    `supplierStock` INTEGER NOT NULL,
    `supplierStockDeliveryDate` DATETIME(3) NULL,
    `price` DOUBLE NOT NULL,
    `promoPrice` DOUBLE NOT NULL,
    `greenStamp` DOUBLE NOT NULL,
    `vatPercent` DOUBLE NOT NULL,
    `isSpecialPrice` BOOLEAN NOT NULL,
    `length` DOUBLE NOT NULL,
    `width` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `lengthUnitOfMeasure` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `weightUnitOfMeasure` VARCHAR(191) NOT NULL,
    `isNew` BOOLEAN NOT NULL,
    `isEol` BOOLEAN NOT NULL,
    `isOnDemand` BOOLEAN NOT NULL,
    `onDemandDeliveryTime` INTEGER NOT NULL,
    `hasResealed` BOOLEAN NOT NULL,
    `originalProductId` VARCHAR(191) NULL,
    `warranty` INTEGER NOT NULL,
    `version` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `NodProduct_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Picture` (
    `id` VARCHAR(191) NOT NULL,
    `pictureId` VARCHAR(191) NOT NULL,
    `pictureUrl` VARCHAR(191) NOT NULL,
    `nod_product_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attribute` (
    `id` VARCHAR(191) NOT NULL,
    `attributeNameId` INTEGER NOT NULL,
    `attributeName` VARCHAR(191) NOT NULL,
    `attributeValueId` INTEGER NOT NULL,
    `attributeValue` VARCHAR(191) NOT NULL,
    `nod_product_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Picture` ADD CONSTRAINT `Picture_nod_product_id_fkey` FOREIGN KEY (`nod_product_id`) REFERENCES `NodProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attribute` ADD CONSTRAINT `Attribute_nod_product_id_fkey` FOREIGN KEY (`nod_product_id`) REFERENCES `NodProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
